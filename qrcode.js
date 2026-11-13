/**
 * Zero-dependency Offline QR Code Generator (Byte mode, UTF-8, ECC Level M)
 * Supports QR Versions 1 to 10 (up to 271 UTF-8 bytes) with full Reed-Solomon
 * error correction, automatic mask evaluation, and SVG / Canvas rendering.
 */
(function (global) {
  'use strict';

  // GF(256) exp and log tables with primitive polynomial 0x11d (285)
  const GF_EXP = new Uint8Array(512);
  const GF_LOG = new Uint8Array(256);
  (function initGF() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      GF_EXP[i] = x;
      GF_LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) {
      GF_EXP[i] = GF_EXP[i - 255];
    }
  })();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF_EXP[GF_LOG[a] + GF_LOG[b]];
  }

  function rsGeneratorPoly(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i++) {
      const next = new Array(poly.length + 1).fill(0);
      const factor = GF_EXP[i];
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], factor);
      }
      poly = next;
    }
    return poly;
  }

  function rsEncode(data, ecCount) {
    const gen = rsGeneratorPoly(ecCount);
    const res = new Uint8Array(data.length + ecCount);
    res.set(data);
    for (let i = 0; i < data.length; i++) {
      const coef = res[i];
      if (coef !== 0) {
        for (let j = 0; j < gen.length; j++) {
          res[i + j] ^= gfMul(gen[j], coef);
        }
      }
    }
    return res.slice(data.length);
  }

  // Version table for ECC Level M (index 1..10):
  // [totalDataCodewords, ecPerBlock, [group1Blocks, group1Data, group2Blocks, group2Data], alignmentCenters]
  const VERSION_TABLE_M = {
    1:  { dataBytes: 16,  ecPerBlock: 10, blocks: [[1, 16]],           align: [] },
    2:  { dataBytes: 28,  ecPerBlock: 16, blocks: [[1, 28]],           align: [6, 18] },
    3:  { dataBytes: 44,  ecPerBlock: 26, blocks: [[1, 44]],           align: [6, 22] },
    4:  { dataBytes: 64,  ecPerBlock: 18, blocks: [[2, 32]],           align: [6, 26] },
    5:  { dataBytes: 86,  ecPerBlock: 24, blocks: [[2, 43]],           align: [6, 30] },
    6:  { dataBytes: 108, ecPerBlock: 16, blocks: [[4, 27]],           align: [6, 34] },
    7:  { dataBytes: 124, ecPerBlock: 18, blocks: [[4, 31]],           align: [6, 22, 38] },
    8:  { dataBytes: 154, ecPerBlock: 22, blocks: [[2, 38], [2, 39]],  align: [6, 24, 42] },
    9:  { dataBytes: 182, ecPerBlock: 22, blocks: [[3, 36], [2, 37]],  align: [6, 26, 46] },
    10: { dataBytes: 216, ecPerBlock: 26, blocks: [[4, 43], [1, 44]],  align: [6, 28, 50] },
    11: { dataBytes: 254, ecPerBlock: 30, blocks: [[1, 50], [4, 51]],  align: [6, 30, 54] },
    12: { dataBytes: 290, ecPerBlock: 22, blocks: [[6, 36], [2, 37]],  align: [6, 32, 58] }
  };

  function encodeUTF8(str) {
    if (typeof TextEncoder !== 'undefined') {
      return Array.from(new TextEncoder().encode(str));
    }
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 0x80) bytes.push(c);
      else if (c < 0x800) bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
      else bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
    return bytes;
  }

  function chooseVersion(byteLen) {
    for (let v = 1; v <= 12; v++) {
      const charCountBits = v <= 9 ? 8 : 16;
      const overheadBits = 4 + charCountBits;
      const capacityBits = VERSION_TABLE_M[v].dataBytes * 8;
      if (overheadBits + byteLen * 8 <= capacityBits) {
        return v;
      }
    }
    throw new Error('Link quá dài cho mã QR tiêu chuẩn (tối đa ~286 ký tự UTF-8).');
  }

  function buildDataCodewords(bytes, version) {
    const spec = VERSION_TABLE_M[version];
    const bits = [];
    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };

    // Byte mode indicator (0100)
    pushBits(0b0100, 4);
    pushBits(bytes.length, version <= 9 ? 8 : 16);
    for (const b of bytes) pushBits(b, 8);

    const totalBits = spec.dataBytes * 8;
    const terminatorLen = Math.min(4, totalBits - bits.length);
    for (let i = 0; i < terminatorLen; i++) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);

    const codewords = [];
    for (let i = 0; i < bits.length; i += 8) {
      let byte = 0;
      for (let j = 0; j < 8; j++) byte = (byte << 1) | bits[i + j];
      codewords.push(byte);
    }

    const pads = [0xec, 0x11];
    let padIdx = 0;
    while (codewords.length < spec.dataBytes) {
      codewords.push(pads[padIdx % 2]);
      padIdx++;
    }

    // Split into blocks and interleave data + ECC
    const dataBlocks = [];
    const ecBlocks = [];
    let offset = 0;
    for (const [count, len] of spec.blocks) {
      for (let b = 0; b < count; b++) {
        const slice = codewords.slice(offset, offset + len);
        offset += len;
        dataBlocks.push(slice);
        ecBlocks.push(Array.from(rsEncode(slice, spec.ecPerBlock)));
      }
    }

    const finalBytes = [];
    const maxDataLen = Math.max(...dataBlocks.map((b) => b.length));
    for (let i = 0; i < maxDataLen; i++) {
      for (const blk of dataBlocks) {
        if (i < blk.length) finalBytes.push(blk[i]);
      }
    }
    for (let i = 0; i < spec.ecPerBlock; i++) {
      for (const blk of ecBlocks) {
        finalBytes.push(blk[i]);
      }
    }
    return finalBytes;
  }

  function createMatrix(version) {
    const size = version * 4 + 17;
    const modules = Array.from({ length: size }, () => new Int8Array(size).fill(-1));
    const isFunction = Array.from({ length: size }, () => new Uint8Array(size));

    const setModule = (r, c, val, fn = true) => {
      if (r < 0 || c < 0 || r >= size || c >= size) return;
      modules[r][c] = val ? 1 : 0;
      if (fn) isFunction[r][c] = 1;
    };

    const drawFinder = (top, left) => {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const rr = top + r;
          const cc = left + c;
          if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
          const inOuter = r >= 0 && r <= 6 && c >= 0 && c <= 6;
          const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const inInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          setModule(rr, cc, inOuter && (onBorder || inInner) ? 1 : 0, true);
        }
      }
    };

    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    // Alignment patterns
    const centers = VERSION_TABLE_M[version].align;
    for (let i = 0; i < centers.length; i++) {
      for (let j = 0; j < centers.length; j++) {
        const rCenter = centers[i];
        const cCenter = centers[j];
        const overlapsFinder =
          (rCenter <= 8 && cCenter <= 8) ||
          (rCenter <= 8 && cCenter >= size - 9) ||
          (rCenter >= size - 9 && cCenter <= 8);
        if (overlapsFinder) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const dark = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
            setModule(rCenter + dr, cCenter + dc, dark ? 1 : 0, true);
          }
        }
      }
    }

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      const bit = i % 2 === 0 ? 1 : 0;
      if (!isFunction[6][i]) setModule(6, i, bit, true);
      if (!isFunction[i][6]) setModule(i, 6, bit, true);
    }

    // Dark module
    setModule(size - 8, 8, 1, true);

    // Reserve format info cells
    for (let i = 0; i < 9; i++) {
      if (i !== 6) {
        isFunction[8][i] = 1;
        isFunction[i][8] = 1;
      }
    }
    for (let i = 0; i < 8; i++) {
      isFunction[8][size - 1 - i] = 1;
      if (i < 7) isFunction[size - 1 - i][8] = 1;
    }

    // Version info (>= 7)
    if (version >= 7) {
      let rem = version;
      for (let i = 0; i < 12; i++) {
        rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
      }
      const bits = (version << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = (bits >>> i) & 1;
        const a = size - 11 + (i % 3);
        const b = Math.floor(i / 3);
        setModule(a, b, bit, true);
        setModule(b, a, bit, true);
      }
    }

    return { size, modules, isFunction };
  }

  function placeData(matrix, codewords) {
    const { size, modules, isFunction } = matrix;
    let bitIdx = 0;
    const totalBits = codewords.length * 8;
    let upward = true;

    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let step = 0; step < size; step++) {
        const r = upward ? size - 1 - step : step;
        for (let dx = 0; dx < 2; dx++) {
          const c = right - dx;
          if (!isFunction[r][c]) {
            let bit = 0;
            if (bitIdx < totalBits) {
              const byte = codewords[bitIdx >> 3];
              bit = (byte >> (7 - (bitIdx & 7))) & 1;
              bitIdx++;
            }
            modules[r][c] = bit;
          }
        }
      }
      upward = !upward;
    }
  }

  function applyMaskAndFormat(matrix, mask) {
    const { size, modules, isFunction } = matrix;
    const copy = modules.map((row) => new Int8Array(row));

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!isFunction[r][c]) {
          let invert = false;
          switch (mask) {
            case 0: invert = (r + c) % 2 === 0; break;
            case 1: invert = r % 2 === 0; break;
            case 2: invert = c % 3 === 0; break;
            case 3: invert = (r + c) % 3 === 0; break;
            case 4: invert = (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; break;
            case 5: invert = ((r * c) % 2) + ((r * c) % 3) === 0; break;
            case 6: invert = (((r * c) % 2) + ((r * c) % 3)) % 2 === 0; break;
            case 7: invert = (((r + c) % 2) + ((r * c) % 3)) % 2 === 0; break;
          }
          if (invert) copy[r][c] ^= 1;
        }
      }
    }

    // Format info: ECC Level M = 0b00
    const data = (0b00 << 3) | mask;
    let rem = data;
    for (let i = 0; i < 10; i++) {
      rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    }
    const formatBits = ((data << 10) | rem) ^ 0x5412;

    for (let i = 0; i <= 5; i++) copy[8][i] = (formatBits >> i) & 1;
    copy[8][7] = (formatBits >> 6) & 1;
    copy[8][8] = (formatBits >> 7) & 1;
    copy[7][8] = (formatBits >> 8) & 1;
    for (let i = 9; i < 15; i++) copy[14 - i][8] = (formatBits >> i) & 1;

    for (let i = 0; i < 8; i++) copy[8][size - 1 - i] = (formatBits >> i) & 1;
    for (let i = 8; i < 15; i++) copy[size - 15 + i][8] = (formatBits >> i) & 1;

    return copy;
  }

  function penaltyScore(grid) {
    const n = grid.length;
    let score = 0;

    // Rule 1: 5+ consecutive same-color modules
    for (let r = 0; r < n; r++) {
      let runLen = 1;
      for (let c = 1; c < n; c++) {
        if (grid[r][c] === grid[r][c - 1]) {
          runLen++;
          if (runLen === 5) score += 3;
          else if (runLen > 5) score += 1;
        } else {
          runLen = 1;
        }
      }
    }
    for (let c = 0; c < n; c++) {
      let runLen = 1;
      for (let r = 1; r < n; r++) {
        if (grid[r][c] === grid[r - 1][c]) {
          runLen++;
          if (runLen === 5) score += 3;
          else if (runLen > 5) score += 1;
        } else {
          runLen = 1;
        }
      }
    }

    // Rule 2: 2x2 blocks
    for (let r = 0; r < n - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        const v = grid[r][c];
        if (v === grid[r][c + 1] && v === grid[r + 1][c] && v === grid[r + 1][c + 1]) {
          score += 3;
        }
      }
    }

    // Rule 3: finder-like patterns 1011101 + 0000
    const checkFinderPattern = (line) => {
      for (let i = 0; i <= line.length - 11; i++) {
        const p1 =
          line[i] === 1 && line[i + 1] === 0 && line[i + 2] === 1 && line[i + 3] === 1 &&
          line[i + 4] === 1 && line[i + 5] === 0 && line[i + 6] === 1 &&
          line[i + 7] === 0 && line[i + 8] === 0 && line[i + 9] === 0 && line[i + 10] === 0;
        const p2 =
          line[i] === 0 && line[i + 1] === 0 && line[i + 2] === 0 && line[i + 3] === 0 &&
          line[i + 4] === 1 && line[i + 5] === 0 && line[i + 6] === 1 && line[i + 7] === 1 &&
          line[i + 8] === 1 && line[i + 9] === 0 && line[i + 10] === 1;
        if (p1 || p2) score += 40;
      }
    };
    for (let r = 0; r < n; r++) checkFinderPattern(grid[r]);
    for (let c = 0; c < n; c++) {
      const col = [];
      for (let r = 0; r < n; r++) col.push(grid[r][c]);
      checkFinderPattern(col);
    }

    // Rule 4: dark ratio
    let dark = 0;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c]) dark++;
      }
    }
    const pct = (dark * 100) / (n * n);
    score += Math.floor(Math.abs(pct - 50) / 5) * 10;

    return score;
  }

  function generateMatrix(text) {
    const bytes = encodeUTF8(String(text || 'https://vi.wikipedia.org'));
    const version = chooseVersion(bytes.length);
    const codewords = buildDataCodewords(bytes, version);
    const base = createMatrix(version);
    placeData(base, codewords);

    let bestGrid = null;
    let bestScore = Infinity;
    for (let mask = 0; mask < 8; mask++) {
      const masked = applyMaskAndFormat(base, mask);
      const score = penaltyScore(masked);
      if (score < bestScore) {
        bestScore = score;
        bestGrid = masked;
      }
    }
    return bestGrid;
  }

  function toSVG(text, opts = {}) {
    const {
      size = 200,
      margin = 2,
      darkColor = '#1E293B',
      lightColor = '#FFFFFF',
      rounded = true
    } = opts;

    const grid = generateMatrix(text);
    const n = grid.length;
    const total = n + margin * 2;
    const radius = rounded ? 0.28 : 0;

    let rects = '';
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c]) {
          const x = c + margin;
          const y = r + margin;
          rects += `<rect x="${x}" y="${y}" width="1" height="1"${radius ? ` rx="${radius}"` : ''} fill="${darkColor}"/>`;
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="Mã QR dẫn tới trang sách">
      <rect width="${total}" height="${total}" fill="${lightColor}"/>
      ${rects}
    </svg>`;
  }

  function toCanvas(text, opts = {}) {
    const {
      size = 400,
      margin = 16,
      darkColor = '#1E293B',
      lightColor = '#FFFFFF',
      label = ''
    } = opts;

    const grid = generateMatrix(text);
    const n = grid.length;
    const extraBottom = label ? 44 : 0;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size + extraBottom;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = lightColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const modulePx = (size - margin * 2) / n;
    ctx.fillStyle = darkColor;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c]) {
          ctx.fillRect(
            Math.floor(margin + c * modulePx),
            Math.floor(margin + r * modulePx),
            Math.ceil(modulePx),
            Math.ceil(modulePx)
          );
        }
      }
    }

    if (label) {
      ctx.fillStyle = darkColor;
      ctx.font = 'bold 16px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label.slice(0, 38), size / 2, size + 24);
    }

    return canvas;
  }

  global.QRCodeGenerator = {
    generateMatrix,
    toSVG,
    toCanvas
  };
})(typeof window !== 'undefined' ? window : globalThis);
