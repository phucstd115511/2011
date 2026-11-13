(function () {
  'use strict';

  const T = window.THREE;
  const STORAGE_KEY = 'tri_an_20_11_books_v2';
  const SETTINGS_KEY = 'tri_an_20_11_settings_v3';
  const PUBLIC_GITHUB_PAGES_URL = 'https://phucstd115511.github.io/2011/';

  const SUBPATH_SLUGS = new Set([
    'ban-sac-van-hoa-viet-nam',
    'giao-luu-tiep-bien-van-hoa',
    'co-so-van-hoa-viet-nam',
    'viet-nam-van-hoa-su-cuong',
    'lang-du-trong-van-hoa-viet-nam'
  ]);

  const DEFAULT_BOOKS = [
    {
      id: 'ban-sac-van-hoa-viet-nam',
      shortTitle: 'Bản sắc VHVN',
      bgWord: 'BẢN SẮC',
      title: 'Bản sắc văn hóa Việt Nam',
      author: 'GS. Phan Ngọc',
      url: 'https://fr.scribd.com/document/1027136379/B%E1%BA%A3n-S%E1%BA%AFc-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Phan-Ng%E1%BB%8Dc',
      accentColor: '#d97706',
      stages: [
        {
          label: 'CHẶNG 01 · TÂM THỨC VIỆT',
          title: 'Bốn trục bất biến: Tổ quốc, Làng xã, Thân phận, Diện mạo',
          narrative:
            'GS. Phan Ngọc định nghĩa văn hóa là hệ thống quan hệ và “kiểu lựa chọn riêng” của dân tộc. Qua mọi biến động lịch sử, tâm thức Việt luôn neo giữ bốn nhu cầu bất biến gắn với mái đình làng xã và non sông Tổ quốc.',
          quote: '“Bản sắc văn hóa là mặt bất biến của một hệ thống quan hệ qua lịch sử.”',
          takeaway: 'Nhận diện đúng 4 trụ cột tâm thức giúp thế hệ trẻ tự tin giữ gốc rễ.',
          image: './assets/scenes/ban-sac-1.svg'
        },
        {
          label: 'CHẶNG 02 · KHÚC XẠ VĂN HÓA',
          title: 'Tiếp nhận Nho học, Đạo giáo & Phương Tây qua sự khúc xạ',
          narrative:
            'Khi tiếp xúc với văn hóa Trung Hoa hay văn minh phương Tây, người Việt không sao chép rập khuôn mà đưa các giá trị ngoại lai đi qua “lăng kính khúc xạ” của tâm thức bản địa để biến đổi phù hợp.',
          quote: '“Người Việt tiếp nhận Nho học không rập khuôn mà bằng một sự khúc xạ.”',
          takeaway: 'Bản lĩnh văn hóa nằm ở khả năng chuyển hóa ngoại lực thành nội lực.',
          image: './assets/scenes/ban-sac-2.svg'
        },
        {
          label: 'CHẶNG 03 · HỘI NHẬP 20/11',
          title: 'Giữ gìn bản sắc khi bước ra biển lớn hội nhập',
          narrative:
            'Trong bối cảnh kinh tế thị trường và toàn cầu hóa, tính linh hoạt và tình nghĩa cộng đồng trở thành ưu thế giúp người Việt mở cửa đón tinh hoa nhân loại mà vẫn giữ vững căn cước văn hóa.',
          quote: '“Muốn hội nhập không hòa tan, phải thấu hiểu cái bất biến trong tâm thức Việt.”',
          takeaway: 'Tri ân 20/11: Trao cho người học nền tảng văn hóa vững chắc để vươn xa.',
          image: './assets/scenes/ban-sac-3.svg'
        }
      ]
    },
    {
      id: 'giao-luu-tiep-bien-van-hoa',
      shortTitle: 'Giao lưu tiếp biến',
      bgWord: 'TIẾP BIẾN',
      title: 'Giao lưu tiếp biến văn hóa & sự biến đổi văn hóa Việt Nam',
      author: 'Chuyên khảo Văn hóa học',
      url: 'https://fr.scribd.com/document/1049743615/8002-Giao-L%C6%B0u-Ti%E1%BA%BFp-Bi%E1%BA%BFn-V%C4%83n-Hoa-Va-S%E1%BB%B1-Bi%E1%BA%BFn-%C4%90%E1%BB%95i-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam',
      accentColor: '#34d399',
      stages: [
        {
          label: 'CHẶNG 01 · NỘI SINH – NGOẠI SINH',
          title: 'Cơ tầng bản địa đón nhận và chọn lọc dòng chảy bên ngoài',
          narrative:
            'Giao lưu và tiếp biến văn hóa diễn ra liên tục qua thương mại, tôn giáo và lịch sử. Mọi yếu tố ngoại sinh muốn bén rễ lâu dài đều phải hòa quyện với cơ tầng văn hóa nội sinh sẵn có.',
          quote: '“Không có nền văn hóa nào phát triển được nếu đóng cửa biệt lập.”',
          takeaway: 'Cơ tầng bản địa vững chắc chính là bộ rễ giữ văn hóa không bật gốc.',
          image: './assets/scenes/giao-luu-1.svg'
        },
        {
          label: 'CHẶNG 02 · BA CUỘC TIẾP XÚC',
          title: 'Từ Đông Á, Ấn Độ – Champa đến chữ Quốc ngữ & Phương Tây',
          narrative:
            'Việt Nam trải qua những cuộc giao thoa sâu sắc với văn hóa Đông Á (Nho – Phật – Đạo), văn hóa Ấn Độ qua Champa – Óc Eo, và làn sóng cận đại phương Tây tạo nên chữ Quốc ngữ cùng đô thị mới.',
          quote: '“Đứng ở ngã tư đường giao lưu, văn hóa Việt biết đối đầu và Việt hóa.”',
          takeaway: 'Mỗi giai đoạn tiếp biến đều bồi đắp thêm tầng lớp giá trị cho di sản Việt.',
          image: './assets/scenes/giao-luu-2.svg'
        },
        {
          label: 'CHẶNG 03 · SỨC ĐỀ KHÁNG SỐ',
          title: 'Xây dựng sức đề kháng văn hóa trước làn sóng toàn cầu',
          narrative:
            'Trước sự bùng nổ của công nghệ và văn hóa đại chúng toàn cầu, bài học tiếp biến nhắc ta giữ gìn lòng yêu nước, ngôn ngữ mẹ đẻ và tinh thần cộng đồng làm tấm khiên bảo vệ bản sắc.',
          quote: '“Sức đề kháng văn hóa giúp tiếp thu cái tiến bộ mà không đánh mất mình.”',
          takeaway: 'Giáo dục văn hóa là trao cho thế hệ trẻ chiếc la bàn trong thế giới phẳng.',
          image: './assets/scenes/giao-luu-3.svg'
        }
      ]
    },
    {
      id: 'co-so-van-hoa-viet-nam',
      shortTitle: 'Cơ sở VHVN',
      bgWord: 'CƠ SỞ',
      title: 'Cơ sở văn hóa Việt Nam',
      author: 'GS. TSKH Trần Ngọc Thêm',
      url: 'https://fr.scribd.com/document/945446496/C%C6%A1-S%E1%BB%9F-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Tr%E1%BA%A7n-Ng%E1%BB%8Dc-Them-Nxb-%C4%90HQGHN-2024',
      accentColor: '#fbbf24',
      stages: [
        {
          label: 'CHẶNG 01 · GỐC LÚA NƯỚC',
          title: 'Loại hình văn hóa trọng tĩnh, trọng tình và ưa hài hòa',
          narrative:
            'GS. Trần Ngọc Thêm lý giải văn hóa Việt bắt nguồn từ nền nông nghiệp lúa nước vùng sông Hồng và Đông Nam Á — hình thành lối tư duy tổng hợp, linh hoạt và gắn bó mật thiết với thiên nhiên.',
          quote: '“Đặc trưng tối thượng của văn hóa gốc nông nghiệp là trọng tình và hài hòa.”',
          takeaway: 'Chìa khóa nông nghiệp lúa nước giải mã mọi tập quán ứng xử người Việt.',
          image: './assets/scenes/co-so-1.svg'
        },
        {
          label: 'CHẶNG 02 · NHẬN THỨC VŨ TRỤ',
          title: 'Triết lý Âm Dương, Tam Tài và Ngũ Hành',
          narrative:
            'Người Việt nhận thức thế giới qua cặp đôi Âm Dương bổ sung cho nhau, đặt con người vào thế cân bằng giữa Trời và Đất (Tam Tài) cùng quy luật tương sinh tương khắc của Ngũ Hành và lịch Can Chi.',
          quote: '“Tư duy Âm Dương giúp người Việt nhìn nhận sự vật uyển chuyển, không cực đoan.”',
          takeaway: 'Sự cân bằng hài hòa là thước đo lý tưởng trong tư duy truyền thống.',
          image: './assets/scenes/co-so-2.svg'
        },
        {
          label: 'CHẶNG 03 · LÀNG NƯỚC & ĐỜI SỐNG',
          title: 'Cấu trúc Làng – Nước và nghệ thuật sống thuận tự nhiên',
          narrative:
            'Từ tế bào làng xã mang tính cộng đồng và tự trị đến bữa cơm hài hòa ngũ vị, tà áo mềm mại và ngôi nhà đón gió sông nước — tất cả thấm đẫm tinh thần dung hợp Việt Nam.',
          quote: '“Làng là tế bào gốc, nơi lưu giữ phong tục, tín ngưỡng và tình nghĩa.”',
          takeaway: 'Những điều bình dị trong ăn, mặc, ở hàng ngày chính là bảo tàng sống.',
          image: './assets/scenes/co-so-3.svg'
        }
      ]
    },
    {
      id: 'viet-nam-van-hoa-su-cuong',
      shortTitle: 'VN Văn hóa sử cương',
      bgWord: 'SỬ CƯƠNG',
      title: 'Việt Nam văn hóa sử cương',
      author: 'Học giả Đào Duy Anh',
      url: 'https://fr.scribd.com/document/675715360/Vi%E1%BB%87t-Nam-V%C4%83n-Hoa-S%E1%BB%AD-C%C6%B0%C6%A1ng-%C4%90ao-Duy-Anh',
      accentColor: '#60a5fa',
      stages: [
        {
          label: 'CHẶNG 01 · SINH HOẠT DÂN TỘC',
          title: '“Văn hóa tức là sinh hoạt” — Kinh tế & Đời sống (1938)',
          narrative:
            'Ra đời năm 1938, tác phẩm mở đầu bằng định nghĩa súc tích “Văn hóa tức là sinh hoạt”, khảo sát toàn diện nghề nông, thủ công mỹ nghệ, thương nghiệp và địa lý nuôi dưỡng dân tộc suốt bốn nghìn năm.',
          quote: '“Văn hóa tức là sinh hoạt, bao gồm cả đời sống vật chất lẫn tinh thần.”',
          takeaway: 'Nghiên cứu văn hóa là nhìn vào chính đời sống lao động thực tiễn.',
          image: './assets/scenes/su-cuong-1.svg'
        },
        {
          label: 'CHẶNG 02 · XÃ HỘI & KHOA CỬ',
          title: 'Thiết chế làng xã, khoa cử, chữ Nôm và Tam giáo',
          narrative:
            'Đào Duy Anh hệ thống hóa cấu trúc gia đình, làng xã, bộ máy nhà nước cùng bức tranh trí thức sinh hoạt: từ chế độ khoa cử Nho học đến văn học chữ Hán, chữ Nôm và nghệ thuật cổ truyền.',
          quote: '“Hiểu tổ chức xã hội và đời sống trí thức xưa là nắm được mạch nguồn sử Việt.”',
          takeaway: 'Kho tư liệu đồ sộ của Đào Duy Anh vẫn nguyên giá trị cho người học.',
          image: './assets/scenes/su-cuong-2.svg'
        },
        {
          label: 'CHẶNG 03 · THỨC TỈNH THẾ HỆ',
          title: 'Ôn lại vốn văn hóa nước nhà trước làn sóng Tây phương',
          narrative:
            'Trước cuộc va đập Đông – Tây đầu thế kỷ XX, học giả Đào Duy Anh viết sách để người Việt hiểu sâu sắc cội nguồn dân tộc, từ đó tỉnh táo chọn lọc giá trị mới của văn minh nhân loại.',
          quote: '“Cần ôn lại cái vốn văn hóa nước nhà để đối diện và tiếp thu văn minh mới.”',
          takeaway: 'Tinh thần tự tôn dân tộc và học thuật nghiêm cẩn là di sản của người thầy.',
          image: './assets/scenes/su-cuong-3.svg'
        }
      ]
    },
    {
      id: 'lang-du-trong-van-hoa-viet-nam',
      shortTitle: 'Lãng du văn hóa',
      bgWord: 'LÃNG DU',
      title: 'Lãng du trong văn hóa Việt Nam',
      author: 'Nhà văn hóa Hữu Ngọc',
      url: 'https://fr.scribd.com/document/804984636/Lang-Du-Trong-Van-Hoa-Viet-Nam-Huu-Ngoc',
      accentColor: '#f472b6',
      stages: [
        {
          label: 'CHẶNG 01 · ĐẤT VIỆT MUÔN SẮC',
          title: 'Hành trình xê dịch từ núi cao Tây Bắc tới Cửu Long',
          narrative:
            'Với tâm thế lãng du thong thả, học giả Hữu Ngọc dẫn người đọc đi dọc chiều dài đất nước — qua phiên chợ vùng cao, phố cổ miền Trung đến miệt vườn Nam Bộ để cảm nhận vẻ đẹp phong tục từng miền.',
          quote: '“Mỗi miền đất Việt Nam là một trang ký ức sống động về phong tục và tâm hồn.”',
          takeaway: 'Sự đa dạng vùng miền tạo nên bức tranh văn hóa vừa thống nhất vừa phong phú.',
          image: './assets/scenes/lang-du-1.svg'
        },
        {
          label: 'CHẶNG 02 · TẢN VĂN UYÊN BÁC',
          title: 'Chân dung tâm hồn Việt bên chén trà sen và trang sách nhỏ',
          narrative:
            'Bằng lối viết tản văn mộc mạc như chuyện trò mà uyên bác sâu xa, cuốn sách phác họa nét đẹp hiếu học, trọng nghĩa tình, thờ cúng tổ tiên và cách ứng xử tinh tế trong gia đình Việt.',
          quote: '“Văn hóa hiện diện trong chén trà sớm, câu ca dao và ký ức làng quê.”',
          takeaway: 'Những trang ký ngắn giàu cảm xúc giúp người đọc yêu văn hóa tự nhiên.',
          image: './assets/scenes/lang-du-2.svg'
        },
        {
          label: 'CHẶNG 03 · CẦU NỐI NĂM CHÂU',
          title: '“Hòa nhập nhưng không hòa tan” — Lan tỏa ra thế giới',
          narrative:
            'Xuất phát từ những bài viết giới thiệu văn hóa Việt cho bạn bè quốc tế, Hữu Ngọc gửi gắm thông điệp: muốn đối thoại bình đẳng với thế giới, ta phải trân trọng và kể được câu chuyện bản sắc của mình.',
          quote: '“Hòa nhập với nhân loại nhưng tuyệt đối không hòa tan bản sắc cội nguồn.”',
          takeaway: 'Tri ân 20/11: Mỗi trang sách là một nhịp cầu lan tỏa tri thức quê hương.',
          image: './assets/scenes/lang-du-3.svg'
        }
      ]
    }
  ];

  // State & Route Detection
  function getRootPrefix() {
    if (typeof window.APP_ROOT_PREFIX === 'string') return window.APP_ROOT_PREFIX;
    return './';
  }

  function resolveAssetPath(path) {
    if (!path) return '';
    if (path.startsWith('data:') || path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return getRootPrefix() + path.replace(/^\.\//, '');
  }

  function detectRoute() {
    if (window.BOOK_ROUTE_SLUG) return { bookId: window.BOOK_ROUTE_SLUG, solo: true };
    const params = new URLSearchParams(window.location.search);
    const qb = params.get('book');
    if (qb) return { bookId: qb, solo: true };
    const hashMatch = window.location.hash.match(/book=([^&]+)/);
    if (hashMatch) return { bookId: decodeURIComponent(hashMatch[1]), solo: true };
    const pathMatch = window.location.pathname.match(/\/sach\/([^/]+)\/?$/);
    if (pathMatch) return { bookId: decodeURIComponent(pathMatch[1]), solo: true };
    return { bookId: null, solo: false };
  }

  function defaultBaseUrl() {
    const { hostname, origin, pathname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('github.io')) {
      return PUBLIC_GITHUB_PAGES_URL;
    }
    const stripped = pathname.replace(/\/sach\/[^/]+\/?$/, '/').replace(/index\.html$/, '');
    return origin + (stripped.endsWith('/') ? stripped : stripped + '/');
  }

  function loadBooks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return JSON.parse(JSON.stringify(DEFAULT_BOOKS));
  }

  function saveBooks(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return { baseUrl: defaultBaseUrl() };
  }

  function saveSettings(s) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
    } catch (_) {}
  }

  function getBookRouteUrl(book) {
    const base = (settings.baseUrl || defaultBaseUrl()).trim().split('?')[0].split('#')[0];
    const norm = base.endsWith('/') ? base : base + '/';
    if (SUBPATH_SLUGS.has(book.id)) {
      return `${norm}sach/${encodeURIComponent(book.id)}/`;
    }
    return `${norm}?book=${encodeURIComponent(book.id)}&solo=1`;
  }

  function slugify(str) {
    return (
      (str || 'sach')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'sach-' + Date.now()
    );
  }

  function splitSummaryIntoStages(rawText, title) {
    const text = (rawText || '').trim();
    let parts = text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length < 3 && text) {
      const sentences = text.split(/(?<=[.!?…])\s+/).filter(Boolean);
      if (sentences.length >= 3) {
        const c = Math.ceil(sentences.length / 3);
        parts = [sentences.slice(0, c).join(' '), sentences.slice(c, c * 2).join(' '), sentences.slice(c * 2).join(' ')];
      }
    }
    while (parts.length < 3) parts.push(parts[parts.length - 1] || `Tóm tắt sách "${title}" nhân dịp 20/11.`);
    return [0, 1, 2].map((i) => ({
      label: `CHẶNG 0${i + 1}`,
      title: parts[i].split(/[,.;:!?]/)[0].slice(0, 56) || `${title} — Phần ${i + 1}`,
      narrative: parts[i],
      quote: `“${parts[i].slice(0, 96)}${parts[i].length > 96 ? '…' : ''}”`,
      takeaway: `Giá trị cốt lõi chặng ${i + 1} của ${title}`,
      image: './assets/scenes/ban-sac-' + (i + 1) + '.svg'
    }));
  }

  let books = loadBooks();
  let settings = loadSettings();
  const route = detectRoute();
  let activeBookIdx = 0;
  if (route.bookId) {
    const foundIdx = books.findIndex((b) => b.id === route.bookId);
    if (foundIdx >= 0) activeBookIdx = foundIdx;
  }
  let stageFilter = 'all'; // 'all' | 0 | 1 | 2
  let currentVariant = 'original'; // 'original' | 'certificate'
  let modalOpen = false;
  let loadedArtImg = null;
  let loadedArtSrc = '';

  /* ======================================================================
     1. 3D PAPER TEXTURE AUTHORING (Exact ThreeUI 1200x1656 / 1400x1932 Grid)
     ====================================================================== */
  const TW = 1200, TH = 1656;
  const CW = 1400, CH = 1932;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const rng = (s) => () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return (s >>> 8) / 8388608;
  };
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function wrapL(ctx, text, x, y, maxW, lh, maxLines = 10) {
    const words = String(text || '').split(' ');
    let line = '';
    let yy = y;
    let linesDrawn = 0;
    for (const w of words) {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && line) {
        ctx.fillText(line, x, yy);
        linesDrawn++;
        if (linesDrawn >= maxLines) return yy + lh;
        line = w;
        yy += lh;
      } else {
        line = t;
      }
    }
    if (line) {
      ctx.fillText(line, x, yy);
      yy += lh;
    }
    return yy;
  }

  function track(ctx, txt, x, y, sp, centre) {
    const chars = [...String(txt || '')];
    let total = 0;
    for (const c of chars) total += ctx.measureText(c).width + sp;
    total -= sp;
    let cx = centre ? x - total / 2 : x;
    for (const c of chars) {
      ctx.fillText(c, cx, y);
      cx += ctx.measureText(c).width + sp;
    }
    return total;
  }

  function signature(ctx, x, y, s, seed, color, lw) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.strokeStyle = color;
    ctx.lineWidth = lw || 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const rnd = rng(seed * 7919 + 13);
    ctx.beginPath();
    ctx.moveTo(0, 15);
    ctx.bezierCurveTo(-3 + rnd() * 4, -7, 9, -20 - rnd() * 6, 15, -5);
    ctx.bezierCurveTo(18, 7, 7, 15, 9, 4);
    let px = 9, py = 4;
    const n = 4 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const step = 9 + rnd() * 11;
      const nx = px + step;
      const ny = 4 - (i % 2 ? -1 : 1) * (4 + rnd() * 13);
      ctx.bezierCurveTo(px + step * 0.35, py - 9 - rnd() * 10, nx - step * 0.35, ny + 7 + rnd() * 8, nx, ny);
      px = nx;
      py = ny;
    }
    ctx.bezierCurveTo(px + 9, py - 13, px + 21, py + 11, px + 29, py - 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = (lw || 2.2) * 0.64;
    ctx.moveTo(-5, 19);
    ctx.quadraticCurveTo(px * 0.55, 24 + rnd() * 5, px + 25, 12 + rnd() * 4);
    ctx.stroke();
    ctx.restore();
  }

  function drawQRCodeOnCanvas(ctx, url, x, y, size, darkColor, lightColor) {
    const grid = window.QRCodeGenerator.generateMatrix(url);
    const n = grid.length;
    const pad = 10;
    const mod = (size - pad * 2) / n;
    ctx.save();
    ctx.fillStyle = lightColor;
    rr(ctx, x, y, size, size, 12);
    ctx.fill();
    ctx.fillStyle = darkColor;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c]) {
          ctx.fillRect(
            Math.floor(x + pad + c * mod),
            Math.floor(y + pad + r * mod),
            Math.ceil(mod),
            Math.ceil(mod)
          );
        }
      }
    }
    ctx.restore();
  }

  function drawGlassContent(ctx, book) {
    ctx.fillStyle = 'rgba(255,255,255,.040)';
    ctx.fillRect(0, 0, TW, TH);

    const fr = ctx.createLinearGradient(0, 210, 0, 1180);
    fr.addColorStop(0, 'rgba(255,255,255,0)');
    fr.addColorStop(0.22, 'rgba(255,255,255,.075)');
    fr.addColorStop(0.78, 'rgba(255,255,255,.075)');
    fr.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = fr;
    ctx.fillRect(40, 210, 1120, 970);

    ctx.strokeStyle = 'rgba(255,255,255,.34)';
    ctx.lineWidth = 2;
    rr(ctx, 20, 20, 1160, 1616, 14);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.12)';
    ctx.lineWidth = 1;
    rr(ctx, 36, 36, 1128, 1584, 10);
    ctx.stroke();

    const M = 76;
    // Header mark
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 68px "Inter Tight", Inter, sans-serif';
    ctx.fillText('20/11.', M, 142);

    ctx.font = '600 22px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    const badgeTxt = `CUỐN 0${activeBookIdx + 1} / 0${books.length} · TỦ SÁCH VĂN HÓA VIỆT NAM`;
    ctx.fillText(badgeTxt, M, 186);

    // Book Title + Author
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 66px "Inter Tight", Inter, sans-serif';
    let curY = wrapL(ctx, book.title, M, 280, TW - M * 2, 74, 2);

    ctx.font = '500 30px "Inter Tight", Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.68)';
    ctx.fillText(`Tác giả: ${book.author}`, M, curY + 12);
    curY += 64;

    // Divider line
    ctx.strokeStyle = 'rgba(255,255,255,.20)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(M, curY);
    ctx.lineTo(TW - M, curY);
    ctx.stroke();
    curY += 46;

    if (stageFilter === 'all') {
      // Draw all 3 summary stages cleanly on the glass sheet
      book.stages.forEach((st, idx) => {
        ctx.fillStyle = 'rgba(245, 158, 11, 0.92)';
        ctx.font = '700 21px Inter, sans-serif';
        ctx.fillText(`0${idx + 1} · ${st.label}`, M, curY);
        curY += 34;

        ctx.fillStyle = '#ffffff';
        ctx.font = '600 30px "Inter Tight", Inter, sans-serif';
        curY = wrapL(ctx, st.title, M, curY, TW - M * 2, 36, 2);

        ctx.fillStyle = 'rgba(255,255,255,.78)';
        ctx.font = '400 24px Inter, sans-serif';
        curY = wrapL(ctx, st.narrative, M, curY + 4, TW - M * 2, 32, 4);
        curY += 28;
      });
    } else {
      const st = book.stages[stageFilter] || book.stages[0];
      ctx.fillStyle = 'rgba(245, 158, 11, 0.95)';
      ctx.font = '700 24px Inter, sans-serif';
      ctx.fillText(st.label, M, curY);
      curY += 44;

      ctx.fillStyle = '#ffffff';
      ctx.font = '600 44px "Inter Tight", Inter, sans-serif';
      curY = wrapL(ctx, st.title, M, curY, TW - M * 2, 52, 3);
      curY += 16;

      // Embed scene artwork frame directly onto the 3D sheet if loaded
      if (loadedArtImg && loadedArtImg.complete) {
        const artW = 460;
        const artH = 345;
        ctx.save();
        rr(ctx, M, curY, artW, artH, 16);
        ctx.clip();
        ctx.drawImage(loadedArtImg, M, curY, artW, artH);
        ctx.restore();
        ctx.strokeStyle = 'rgba(255,255,255,.35)';
        ctx.lineWidth = 2;
        rr(ctx, M, curY, artW, artH, 16);
        ctx.stroke();

        // Narrative right next to artwork
        const textX = M + artW + 34;
        const textW = TW - M - textX;
        ctx.fillStyle = 'rgba(255,255,255,.88)';
        ctx.font = '400 26px Inter, sans-serif';
        wrapL(ctx, st.narrative, textX, curY + 26, textW, 36, 9);
        curY += artH + 40;
      } else {
        ctx.fillStyle = 'rgba(255,255,255,.88)';
        ctx.font = '400 28px Inter, sans-serif';
        curY = wrapL(ctx, st.narrative, M, curY, TW - M * 2, 38, 7) + 24;
      }

      // Quote block
      ctx.fillStyle = 'rgba(255,255,255,.10)';
      rr(ctx, M, curY, TW - M * 2, 128, 14);
      ctx.fill();
      ctx.fillStyle = '#fde68a';
      ctx.font = 'italic 400 27px "EB Garamond", Georgia, serif';
      wrapL(ctx, st.quote, M + 24, curY + 46, TW - M * 2 - 48, 36, 2);
      curY += 158;

      // Takeaway
      ctx.fillStyle = 'rgba(167, 243, 208, 0.92)';
      ctx.font = '600 24px Inter, sans-serif';
      wrapL(ctx, `Điểm cốt lõi: ${st.takeaway}`, M, curY, TW - M * 2, 34, 2);
    }

    // Bottom QR + Signatures + Footer
    const qrSize = 215;
    const qrX = M;
    const qrY = TH - 325;
    const routeUrl = getBookRouteUrl(book);
    drawQRCodeOnCanvas(ctx, routeUrl, qrX, qrY, qrSize, '#0f172a', '#ffffff');

    const infoX = qrX + qrSize + 34;
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 24px Inter, sans-serif';
    ctx.fillText('QUÉT MÃ QR ĐỂ MỞ TRANG RIÊNG', infoX, qrY + 34);
    ctx.fillStyle = 'rgba(255,255,255,.68)';
    ctx.font = '400 21px Inter, sans-serif';
    wrapL(ctx, routeUrl, infoX, qrY + 72, TW - M - infoX, 28, 2);

    [0, 1].forEach((i) => signature(ctx, infoX + i * 165, qrY + 165, 1.05, i * 7 + activeBookIdx + 3, 'rgba(255,255,255,.65)', 2.2));

    ctx.font = '700 30px "Inter Tight", Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('tri ân 20/11.', M, 1570);
    const w = ctx.measureText('tri ân 20/11.').width;
    ctx.font = '500 28px "Inter Tight", Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.58)';
    ctx.fillText(' tủ sách văn hóa việt', M + w, 1570);
  }

  function drawCertificateContent(ctx, book) {
    const INK = '#3B2A17';
    const rnd = rng(4711 + activeBookIdx * 17);
    ctx.fillStyle = '#EFE4CB';
    ctx.fillRect(0, 0, TW, TH);

    for (let i = 0; i < 170; i++) {
      const x = rnd() * TW, y = rnd() * TH, r = 40 + rnd() * 190, a = 0.012 + rnd() * 0.026;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(146,112,62,' + a + ')');
      g.addColorStop(1, 'rgba(146,112,62,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < 2200; i++) {
      const x = rnd() * TW, y = rnd() * TH, a = rnd() * Math.PI, l = 3 + rnd() * 11;
      ctx.strokeStyle = rnd() < 0.5 ? 'rgba(255,250,238,.22)' : 'rgba(120,96,58,.13)';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
      ctx.stroke();
    }

    ctx.strokeStyle = INK;
    ctx.lineWidth = 4.5;
    ctx.strokeRect(56, 56, TW - 112, TH - 112);
    ctx.lineWidth = 1.4;
    ctx.strokeRect(74, 74, TW - 148, TH - 148);
    ctx.fillStyle = INK;
    [
      [74, 74],
      [TW - 74, 74],
      [TW - 74, TH - 74],
      [74, TH - 74]
    ].forEach(([x, y]) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-7, -7, 14, 14);
      ctx.restore();
    });

    const M = 112;
    ctx.fillStyle = 'rgba(59,42,23,.78)';
    ctx.font = '500 20px Inter, sans-serif';
    track(ctx, 'TỦ SÁCH TRI ÂN 20/11 · VĂN HÓA VIỆT NAM', 600, 145, 6, true);

    ctx.fillStyle = INK;
    ctx.font = '500 66px "EB Garamond", Georgia, serif';
    let curY = wrapL(ctx, book.title, M, 236, TW - M * 2, 74, 2);

    ctx.font = 'italic 400 34px "EB Garamond", Georgia, serif';
    ctx.fillStyle = 'rgba(59,42,23,.82)';
    ctx.fillText(`Tác giả: ${book.author}`, M, curY + 8);
    curY += 64;

    if (stageFilter === 'all') {
      book.stages.forEach((st, idx) => {
        ctx.fillStyle = '#8E2B22';
        ctx.font = '700 20px Inter, sans-serif';
        ctx.fillText(`0${idx + 1} · ${st.label}`, M, curY);
        curY += 32;

        ctx.fillStyle = INK;
        ctx.font = '600 31px "EB Garamond", Georgia, serif';
        curY = wrapL(ctx, st.title, M, curY, TW - M * 2, 36, 2);

        ctx.fillStyle = 'rgba(59,42,23,.85)';
        ctx.font = '400 25px "EB Garamond", Georgia, serif';
        curY = wrapL(ctx, st.narrative, M, curY + 4, TW - M * 2, 32, 4);
        curY += 24;
      });
    } else {
      const st = book.stages[stageFilter] || book.stages[0];
      ctx.fillStyle = '#8E2B22';
      ctx.font = '700 22px Inter, sans-serif';
      ctx.fillText(st.label, M, curY);
      curY += 42;

      ctx.fillStyle = INK;
      ctx.font = '600 46px "EB Garamond", Georgia, serif';
      curY = wrapL(ctx, st.title, M, curY, TW - M * 2, 54, 3) + 14;

      if (loadedArtImg && loadedArtImg.complete) {
        const artW = 430;
        const artH = 322;
        ctx.save();
        rr(ctx, M, curY, artW, artH, 12);
        ctx.clip();
        ctx.drawImage(loadedArtImg, M, curY, artW, artH);
        ctx.restore();
        ctx.strokeStyle = 'rgba(59,42,23,.45)';
        ctx.lineWidth = 2;
        rr(ctx, M, curY, artW, artH, 12);
        ctx.stroke();

        const tx = M + artW + 30;
        ctx.fillStyle = 'rgba(59,42,23,.88)';
        ctx.font = '400 28px "EB Garamond", Georgia, serif';
        wrapL(ctx, st.narrative, tx, curY + 26, TW - M - tx, 36, 9);
        curY += artH + 34;
      } else {
        ctx.fillStyle = 'rgba(59,42,23,.88)';
        ctx.font = '400 30px "EB Garamond", Georgia, serif';
        curY = wrapL(ctx, st.narrative, M, curY, TW - M * 2, 38, 7) + 20;
      }

      ctx.fillStyle = '#8E2B22';
      ctx.font = 'italic 400 29px "EB Garamond", Georgia, serif';
      curY = wrapL(ctx, st.quote, M, curY, TW - M * 2, 36, 2) + 16;

      ctx.fillStyle = 'rgba(59,42,23,.85)';
      ctx.font = '600 23px Inter, sans-serif';
      wrapL(ctx, `Điểm cốt lõi: ${st.takeaway}`, M, curY, TW - M * 2, 32, 2);
    }

    // Crimson Wax Seal + QR Code + Signatures
    ctx.save();
    ctx.translate(220, 1345);
    const sg = ctx.createRadialGradient(-24, -28, 4, 0, 0, 86);
    sg.addColorStop(0, '#B24236');
    sg.addColorStop(1, '#7A2019');
    ctx.fillStyle = sg;
    ctx.beginPath();
    for (let i = 0; i <= 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      const r = 78 + Math.sin(a * 9) * 4.2;
      ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,220,205,.32)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 58, 0, 7);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,226,212,.92)';
    ctx.font = '600 34px "EB Garamond", Georgia, serif';
    const sealText = '20/11';
    ctx.fillText(sealText, -ctx.measureText(sealText).width / 2, 12);
    ctx.restore();

    const routeUrl = getBookRouteUrl(book);
    drawQRCodeOnCanvas(ctx, routeUrl, 345, 1230, 215, '#3B2A17', '#FFFDF8');

    signature(ctx, 625, 1295, 1.4, 9 + activeBookIdx, 'rgba(59,42,23,.82)', 2.4);
    ctx.strokeStyle = 'rgba(59,42,23,.55)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(605, 1348);
    ctx.lineTo(1060, 1348);
    ctx.stroke();
    ctx.fillStyle = 'rgba(59,42,23,.86)';
    ctx.font = '500 26px "EB Garamond", Georgia, serif';
    ctx.fillText('Tri Ân Ngày Nhà Giáo Việt Nam', 605, 1384);
    ctx.fillStyle = 'rgba(59,42,23,.58)';
    ctx.font = '500 16px Inter, sans-serif';
    track(ctx, 'QUÉT MÃ QR ĐỂ MỞ SÁCH', 605, 1418, 4, false);

    ctx.fillStyle = 'rgba(59,42,23,.62)';
    ctx.font = '500 18px Inter, sans-serif';
    track(ctx, 'NGÀY NHÀ GIÁO VIỆT NAM · 20 · XI · MMXXVI', 600, 1545, 5, true);
  }

  function makeCertTexture() {
    const book = books[activeBookIdx] || books[0];
    const c = document.createElement('canvas');
    c.width = CW;
    c.height = CH;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, CW, CH);
    ctx.save();
    ctx.scale(CW / TW, CH / TH);
    rr(ctx, 0, 0, TW, TH, 26);
    ctx.clip();
    if (currentVariant === 'certificate') {
      drawCertificateContent(ctx, book);
    } else {
      drawGlassContent(ctx, book);
    }
    ctx.restore();
    const t = new T.CanvasTexture(c);
    t.encoding = T.sRGBEncoding;
    t.anisotropy = 8;
    t.needsUpdate = true;
    return t;
  }

  /* ======================================================================
     2. GRAIN (Exact ThreeUI implementation)
     ====================================================================== */
  (function grain() {
    const n = 160;
    const c = document.createElement('canvas');
    c.width = c.height = n;
    const x = c.getContext('2d');
    const d = x.createImageData(n, n);
    for (let i = 0; i < n * n; i++) {
      const v = 128 + (Math.random() - 0.5) * 168;
      d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v;
      d.data[i * 4 + 3] = 255;
    }
    x.putImageData(d, 0, 0);
    const url = 'url(' + c.toDataURL() + ')';
    document.getElementById('grain').style.backgroundImage = url;
    document.getElementById('grain2').style.backgroundImage = url;
  })();

  /* ======================================================================
     3. THREE.JS SCENE & WAVE SHADER (Exact ThreeUI r149 Implementation)
     ====================================================================== */
  const canvas = document.getElementById('gl');
  const renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.outputEncoding = T.sRGBEncoding;
  renderer.toneMapping = T.NoToneMapping;

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 8.2);

  function envTexture() {
    const w = 1024, h = 512;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a3d47');
    g.addColorStop(0.46, '#171820');
    g.addColorStop(1, '#08080a');
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
    const blob = (cx, cy, rx, ry, col, a) => {
      const rg = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
      rg.addColorStop(0, col.replace('A', a));
      rg.addColorStop(1, col.replace('A', '0'));
      x.save();
      x.translate(cx, cy);
      x.scale(1, ry / rx);
      x.translate(-cx, -cy);
      x.fillStyle = rg;
      x.beginPath();
      x.arc(cx, cy, rx, 0, 7);
      x.fill();
      x.restore();
    };
    blob(w * 0.3, h * 0.24, 330, 240, 'rgba(255,252,246,A)', '1');
    blob(w * 0.74, h * 0.34, 240, 200, 'rgba(150,175,235,A)', '.42');
    blob(w * 0.52, h * 0.86, 420, 190, 'rgba(255,170,120,A)', '.10');
    const t = new T.CanvasTexture(c);
    t.mapping = T.EquirectangularReflectionMapping;
    t.encoding = T.sRGBEncoding;
    return t;
  }

  const pmrem = new T.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  scene.environment = pmrem.fromEquirectangular(envTexture()).texture;

  const key = new T.DirectionalLight(0xfff6ec, 1.42);
  key.position.set(-3.3, 2.1, 2.0);
  const fill = new T.DirectionalLight(0x9fb6ff, 0.13);
  fill.position.set(3.6, -1.8, 1.6);
  const rim = new T.DirectionalLight(0xffffff, 0.1);
  rim.position.set(1.6, 1.2, -2.6);
  scene.add(key, fill, rim, new T.AmbientLight(0xffffff, 0.16));

  const touchLight = new T.PointLight(0xdfe8ff, 0, 7.5, 1.35);
  touchLight.position.set(0, 0, 1.7);
  scene.add(touchLight);

  const SW = 2.3, SH = 2.72;
  const geo = new T.PlaneGeometry(SW, SH, 72, 96);

  const uni = {
    uTime: { value: 0 },
    uAmp: { value: 1.18 },
    uFreq: { value: 4.7 },
    uTwist: { value: 1.3 },
    uSize: { value: new T.Vector2(SW, SH) },
    uFlutter: { value: 0 },
    uPhase: { value: 0 },
    uRim: { value: 0.62 },
    uRimA: { value: 0.88 },
    uSpecA: { value: 0.14 },
    uRimCol: { value: new T.Color(0xeaf2ff) }
  };

  const WAVE = `
uniform float uTime, uAmp, uFlutter, uPhase, uFreq, uTwist;
uniform vec2  uSize;

float sAmp(float u, float v){ return uAmp*(0.10 + pow(u,1.35))*(0.50 + 0.64*v); }
float sAmpV(float u){        return uAmp*(0.10 + pow(u,1.35))*0.64; }

float sTheta(float u, float v){
  float a  = sAmp(u,v);
  float ph = uFreq*u + uTwist*v + uTime*0.40 + uPhase;
  return a*sin(ph) + uFlutter*a*0.60*sin(ph*2.35 + uTime*2.0);
}
float sThetaV(float u, float v){
  float a  = sAmp(u,v), da = sAmpV(u);
  float ph = uFreq*u + uTwist*v + uTime*0.40 + uPhase;
  float f  = ph*2.35 + uTime*2.0;
  return da*sin(ph) + a*cos(ph)*uTwist
       + uFlutter*0.60*(da*sin(f) + a*cos(f)*uTwist*2.35);
}
float sYoff(float u, float v){
  float w = 1.0 - 0.55*v;
  return 0.021*uSize.y*sin(2.05*u + uTime*0.47 + uPhase)
       + 0.013*uSize.y*sin(3.35*u - 1.55*v + uTime*0.63 + uPhase)*w;
}
float sYdU(float u, float v){
  float w = 1.0 - 0.55*v;
  return 0.0431*uSize.y*cos(2.05*u + uTime*0.47 + uPhase)
       + 0.0436*uSize.y*cos(3.35*u - 1.55*v + uTime*0.63 + uPhase)*w;
}
float sYdV(float u, float v){
  float ph = 3.35*u - 1.55*v + uTime*0.63 + uPhase;
  return 0.013*uSize.y*(-1.55*cos(ph)*(1.0-0.55*v) - 0.55*sin(ph));
}

void sheetPoint(vec2 q, out vec3 P, out vec3 NN){
  float u = q.x, v = q.y;
  float x=0.0, z=0.0, xe=0.0, ze=0.0, dxv=0.0, dzv=0.0, dxe=0.0, dze=0.0;
  const int NS = 20;
  float h = 1.0/float(NS);
  for(int i=0;i<NS;i++){
    float uu = (float(i)+0.5)*h;
    float w  = clamp((u-(uu-0.5*h))/h, 0.0, 1.0);
    float th = sTheta(uu,v);
    float dt = sThetaV(uu,v);
    float c = cos(th), sn = sin(th);
    xe += c*h;          ze += sn*h;
    dxe += -sn*dt*h;    dze +=  c*dt*h;
    x   += c*h*w;       z   += sn*h*w;
    dxv += -sn*dt*h*w;  dzv +=  c*dt*h*w;
  }
  float W = uSize.x, H = uSize.y;
  float th0 = sTheta(u,v);
  P = vec3((x - xe*0.5)*W, (v-0.5)*H + sYoff(u,v), (z - ze*0.5)*W);
  vec3 Tu = vec3(W*cos(th0), sYdU(u,v), W*sin(th0));
  vec3 Tv = vec3((dxv - dxe*0.5)*W, H + sYdV(u,v), (dzv - dze*0.5)*W);
  NN = normalize(cross(Tu, Tv));
}`;

  let tex = makeCertTexture();
  const mat = new T.MeshPhysicalMaterial({
    map: tex,
    color: new T.Color(0xc4d2e8),
    side: T.DoubleSide,
    metalness: 0.0,
    roughness: 0.06,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    iridescence: 0.1,
    iridescenceIOR: 1.35,
    iridescenceThicknessRange: [120, 420],
    envMapIntensity: 1.15,
    specularIntensity: 1.0,
    ior: 1.5,
    transparent: true,
    alphaTest: 0.012,
    opacity: 1
  });

  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + WAVE)
      .replace(
        '#include <beginnormal_vertex>',
        `
      vec3 sheetP; vec3 objectNormal;
      sheetPoint(uv, sheetP, objectNormal);
      #ifdef USE_TANGENT
        vec3 objectTangent = vec3( tangent.xyz );
      #endif
    `
      )
      .replace('#include <begin_vertex>', 'vec3 transformed = sheetP;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uRim, uRimA, uSpecA;\nuniform vec3 uRimCol;')
      .replace('#include <alphatest_fragment>', 'if ( diffuseColor.a / max(opacity,1e-4) < alphaTest ) discard;')
      .replace(
        '#include <output_fragment>',
        `
      float fres = pow(1.0 - clamp(abs(dot(geometry.normal, geometry.viewDir)),0.0,1.0), 3.2);
      outgoingLight += fres * uRim * uRimCol;
      float baseA = diffuseColor.a / max(opacity, 1e-4);
      float outA  = clamp(baseA + fres*uRimA
                        + uSpecA*dot(outgoingLight, vec3(0.3333)), 0.0, 1.0) * opacity;
      gl_FragColor = vec4( outgoingLight, outA );
    `
      );
  };

  const mesh = new T.Mesh(geo, mat);
  const group = new T.Group();
  group.add(mesh);
  scene.add(group);

  const haloTex = (() => {
    const s = 256;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(0,0,0,.55)');
    g.addColorStop(0.45, 'rgba(0,0,0,.28)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, s, s);
    const t = new T.CanvasTexture(c);
    t.encoding = T.sRGBEncoding;
    return t;
  })();

  const halo = new T.Mesh(
    new T.PlaneGeometry(3.9, 4.9),
    new T.MeshBasicMaterial({ map: haloTex, transparent: true, depthWrite: false, opacity: 0.3 })
  );
  halo.position.z = -0.62;
  group.add(halo);

  /* ======================================================================
     4. POINTER — drag to turn, hover to light
     ====================================================================== */
  let dragging = false,
    dragYaw = 0,
    dragPitch = 0,
    release = 0;
  let velYaw = 0,
    velPitch = 0,
    prevYaw = 0,
    prevPitch = 0;
  let lastPX = 0,
    lastPY = 0,
    moved = 0,
    overSheet = false,
    hover = 0,
    hoverTarget = 0;
  let quad = null,
    cursorNow = '';
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const hintEl = document.getElementById('hint');
  let hintUsed = false;

  const _v = new T.Vector3();
  function cornerPoint(qx, qy) {
    const t = uni.uTime.value,
      ph = uni.uPhase.value;
    const A = uni.uAmp.value,
      F = uni.uFreq.value,
      TWs = uni.uTwist.value;
    const u = qx,
      v = qy;
    const theta = (uu) => A * (0.1 + Math.pow(uu, 1.35)) * (0.5 + 0.64 * v) * Math.sin(F * uu + TWs * v + t * 0.4 + ph);
    let x = 0,
      z = 0,
      xe = 0,
      ze = 0;
    const N = 20,
      h = 1 / N;
    for (let i = 0; i < N; i++) {
      const uu = (i + 0.5) * h;
      const w = clamp((u - (uu - 0.5 * h)) / h, 0, 1);
      const th = theta(uu),
        c = Math.cos(th),
        s = Math.sin(th);
      xe += c * h;
      ze += s * h;
      x += c * h * w;
      z += s * h * w;
    }
    const yo =
      0.021 * SH * Math.sin(2.05 * u + t * 0.47 + ph) +
      0.013 * SH * Math.sin(3.35 * u - 1.55 * v + t * 0.63 + ph) * (1 - 0.55 * v);
    return _v.set((x - xe * 0.5) * SW, (v - 0.5) * SH + yo, (z - ze * 0.5) * SW);
  }

  function buildQuad() {
    const pts = [];
    for (const [u, v] of [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0]
    ]) {
      cornerPoint(u, v).applyMatrix4(group.matrixWorld).project(camera);
      pts.push([(_v.x * 0.5 + 0.5) * vw, (-_v.y * 0.5 + 0.5) * vh]);
    }
    const cx = (pts[0][0] + pts[1][0] + pts[2][0] + pts[3][0]) / 4;
    const cy = (pts[0][1] + pts[1][1] + pts[2][1] + pts[3][1]) / 4;
    quad = pts.map(([x, y]) => [cx + (x - cx) * 1.07, cy + (y - cy) * 1.07]);
  }

  function inQuad(px, py) {
    if (!quad) return false;
    let sign = 0;
    for (let i = 0; i < 4; i++) {
      const [ax, ay] = quad[i],
        [bx, by] = quad[(i + 1) % 4];
      const c = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
      if (c !== 0) {
        const s = c > 0 ? 1 : -1;
        if (sign === 0) sign = s;
        else if (s !== sign) return false;
      }
    }
    return true;
  }

  function useHint() {
    hintUsed = true;
    hintEl.style.opacity = '0';
  }

  function startDrag(clientX, clientY, pointerId) {
    dragging = true;
    moved = 0;
    lastPX = clientX;
    lastPY = clientY;
    velYaw = velPitch = 0;
    prevYaw = dragYaw;
    prevPitch = dragPitch;
    hoverTarget = 1;
    canvas.classList.add('is-dragging');
    if (pointerId != null && canvas.setPointerCapture) {
      try {
        canvas.setPointerCapture(pointerId);
      } catch (_) {}
    }
  }

  function moveDrag(clientX, clientY) {
    mouse.tx = (clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    mouse.ty = (clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
    if (dragging) {
      const dx = clientX - lastPX,
        dy = clientY - lastPY;
      lastPX = clientX;
      lastPY = clientY;
      moved += Math.abs(dx) + Math.abs(dy);
      dragYaw += dx * 0.0075;
      dragPitch = clamp(dragPitch - dy * 0.0055, -0.65, 0.65);
      if (moved > 24) useHint();
      return;
    }
    overSheet = inQuad(clientX, clientY);
    hoverTarget = 1;
  }

  function endDrag(pointerId) {
    if (dragging) {
      dragging = false;
      release = 0.65;
      canvas.classList.remove('is-dragging');
      if (pointerId != null && canvas.releasePointerCapture) {
        try {
          canvas.releasePointerCapture(pointerId);
        } catch (_) {}
      }
    }
  }

  canvas.addEventListener('pointerdown', (e) => {
    if (modalOpen) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY, e.pointerId);
  });

  window.addEventListener(
    'pointermove',
    (e) => {
      if (modalOpen) return;
      moveDrag(e.clientX, e.clientY);
    },
    { passive: true }
  );

  window.addEventListener('pointerup', (e) => endDrag(e.pointerId));
  window.addEventListener('pointercancel', (e) => endDrag(e.pointerId));
  window.addEventListener('pointerleave', () => {
    if (!dragging) hoverTarget = 0;
  });

  canvas.addEventListener(
    'touchstart',
    (e) => {
      if (modalOpen || !e.touches || !e.touches[0]) return;
      startDrag(e.touches[0].clientX, e.touches[0].clientY, null);
    },
    { passive: true }
  );

  canvas.addEventListener(
    'touchmove',
    (e) => {
      if (modalOpen || !e.touches || !e.touches[0]) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: false }
  );

  canvas.addEventListener('touchend', () => endDrag(null));
  canvas.addEventListener('touchcancel', () => endDrag(null));

  canvas.addEventListener(
    'wheel',
    (e) => {
      if (modalOpen) return;
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      velYaw += clamp(delta * 0.015, -4.5, 4.5);
      release = 0.65;
      hoverTarget = 1;
      useHint();
    },
    { passive: false }
  );

  canvas.addEventListener('dblclick', () => {
    if (modalOpen) return;
    stepScene(1);
  });

  /* ======================================================================
     5. RESIZE & FRAME LOOP
     ====================================================================== */
  let vw = 0,
    vh = 0;
  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(vw, vh, false);
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
    const visH = 2 * camera.position.z * Math.tan(T.MathUtils.degToRad(camera.fov) / 2);
    const visW = visH * camera.aspect;
    const wCap = Math.min(0.88, 0.6 + Math.max(0, 1.45 - camera.aspect) * 0.45);
    group.scale.setScalar(Math.min((visH * 0.63) / SH, (visW * wCap) / SW));
  }
  window.addEventListener('resize', resize);

  const clock = new T.Clock();
  const lightPos = new T.Vector3();
  let intro = 0;

  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    uni.uTime.value = REDUCED ? 2.4 : t;

    intro += (1 - intro) * Math.min(1, dt * 1.9);
    mat.opacity = intro;
    halo.material.opacity = intro * (currentVariant === 'certificate' ? 0.55 : 0.3);
    if (intro > 0.7 && !hintUsed) hintEl.style.opacity = '1';

    if (dragging) {
      const k = Math.min(1, dt * 14);
      velYaw += ((dragYaw - prevYaw) / Math.max(dt, 1e-3) - velYaw) * k;
      velPitch += ((dragPitch - prevPitch) / Math.max(dt, 1e-3) - velPitch) * k;
      velYaw = clamp(velYaw, -7, 7);
      velPitch = clamp(velPitch, -4, 4);
    } else {
      dragYaw += velYaw * dt;
      dragPitch = clamp(dragPitch + velPitch * dt, -0.6, 0.6);
      const decay = Math.pow(0.018, dt);
      velYaw *= decay;
      velPitch *= decay;
      release = Math.max(0, release - dt);
      if (release <= 0) {
        const home = Math.round(dragYaw / (Math.PI * 2)) * Math.PI * 2;
        const k = Math.min(1, dt * 0.55);
        dragYaw += (home - dragYaw) * k;
        dragPitch -= dragPitch * k;
      }
    }
    prevYaw = dragYaw;
    prevPitch = dragPitch;

    mouse.x += (mouse.tx - mouse.x) * Math.min(1, dt * 3.0);
    mouse.y += (mouse.ty - mouse.y) * Math.min(1, dt * 3.0);
    const idle = REDUCED ? 0 : 1;
    const rise = 1 - intro;
    group.rotation.y = dragYaw + mouse.x * 0.16 + Math.sin(t * 0.23) * 0.045 * idle;
    group.rotation.x = dragPitch - mouse.y * 0.11 + Math.sin(t * 0.19) * 0.026 * idle + rise * 0.28;
    group.rotation.z = Math.sin(t * 0.27) * 0.018 * idle;
    group.position.y = -0.05 + Math.sin(t * 0.36) * 0.045 * idle - rise * 0.7;
    group.position.x = Math.sin(t * 0.21) * 0.05 * idle + mouse.x * 0.1;
    group.updateMatrixWorld();

    hover += (hoverTarget - hover) * Math.min(1, dt * 4.5);
    touchLight.intensity = hover * 2.6 * intro;
    if (hover > 0.002) {
      lightPos.set(mouse.tx, -mouse.ty, 0.5).unproject(camera).sub(camera.position).normalize();
      touchLight.position.copy(camera.position).addScaledVector(lightPos, (1.75 - camera.position.z) / lightPos.z);
    }

    buildQuad();
    document.body.dataset.yaw = dragYaw.toFixed(3);
    document.body.dataset.pitch = dragPitch.toFixed(3);

    renderer.render(scene, camera);
  }

  /* ======================================================================
     6. DYNAMIC BACKGROUND, VARIANT SWITCHING & HUD CONTROLS
     ====================================================================== */
  function applyMaterialVariant() {
    document.body.classList.toggle('is-certificate', currentVariant === 'certificate');
    if (currentVariant === 'certificate') {
      mat.color.setHex(0xffffff);
      mat.roughness = 0.86;
      mat.clearcoat = 0.0;
      mat.clearcoatRoughness = 0.5;
      mat.iridescence = 0.0;
      mat.sheen = 0.34;
      mat.sheenRoughness = 0.9;
      mat.sheenColor.setHex(0xffffff);
      mat.envMapIntensity = 0.16;
      mat.specularIntensity = 0.3;
      mat.alphaTest = 0.42;
      uni.uRim.value = 0.05;
      uni.uRimA.value = 0.0;
      uni.uSpecA.value = 0.0;
      uni.uRimCol.value.setHex(0xffe8c8);
      touchLight.color.setHex(0xffd9a8);
    } else {
      mat.color.setHex(0xc4d2e8);
      mat.roughness = 0.06;
      mat.clearcoat = 1.0;
      mat.clearcoatRoughness = 0.03;
      mat.iridescence = 0.1;
      mat.sheen = 0.0;
      mat.envMapIntensity = 1.15;
      mat.specularIntensity = 1.0;
      mat.alphaTest = 0.012;
      uni.uRim.value = 0.62;
      uni.uRimA.value = 0.88;
      uni.uSpecA.value = 0.14;
      uni.uRimCol.value.setHex(0xeaf2ff);
      touchLight.color.setHex(0xdfe8ff);
    }
    mat.needsUpdate = true;
  }

  function refreshSheetTexture() {
    const book = books[activeBookIdx] || books[0];
    const st = stageFilter === 'all' ? book.stages[0] : book.stages[stageFilter] || book.stages[0];
    const artSrc = resolveAssetPath(st.image || './assets/scenes/ban-sac-1.svg');

    // Update dynamic background artwork & wordmark
    const bgArt = document.getElementById('bgArt');
    const bgWord = document.getElementById('bgWord');
    if (bgArt) bgArt.src = artSrc;
    if (bgWord) bgWord.textContent = book.bgWord || book.shortTitle || '20/11';

    const openOriginalBtn = document.getElementById('openOriginalBtn');
    if (openOriginalBtn) openOriginalBtn.href = book.url || '#';

    const drawAndSwap = () => {
      const nextTex = makeCertTexture();
      if (tex) tex.dispose();
      tex = nextTex;
      mat.map = tex;
      mat.needsUpdate = true;
    };

    if (artSrc !== loadedArtSrc) {
      loadedArtSrc = artSrc;
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        loadedArtImg = img;
        drawAndSwap();
      };
      img.onerror = () => {
        loadedArtImg = null;
        drawAndSwap();
      };
      img.src = artSrc;
    } else {
      drawAndSwap();
    }
  }

  function renderHUD() {
    const bookTabsRow = document.getElementById('bookTabsRow');
    bookTabsRow.innerHTML = books
      .map(
        (b, idx) =>
          `<button class="pill-btn ${idx === activeBookIdx ? 'is-active' : ''}" data-book-idx="${idx}" type="button">${idx + 1}. ${b.shortTitle || b.title}</button>`
      )
      .join('');

    bookTabsRow.querySelectorAll('[data-book-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextIdx = Number(btn.dataset.bookIdx);
        if (nextIdx !== activeBookIdx) {
          activeBookIdx = nextIdx;
          velYaw = 4.6;
          release = 0.6;
          renderHUD();
          refreshSheetTexture();
        }
      });
    });

    const stageTabs = document.getElementById('stageTabs');
    const stageOptions = [
      { key: 'all', label: 'Tổng quan' },
      { key: 0, label: 'Chặng 1' },
      { key: 1, label: 'Chặng 2' },
      { key: 2, label: 'Chặng 3' }
    ];
    stageTabs.innerHTML = stageOptions
      .map(
        (opt) =>
          `<button class="pill-btn ${stageFilter === opt.key ? 'is-active' : ''}" data-stage-opt="${opt.key}" type="button">${opt.label}</button>`
      )
      .join('');

    stageTabs.querySelectorAll('[data-stage-opt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.stageOpt;
        stageFilter = val === 'all' ? 'all' : Number(val);
        velYaw = 3.8;
        release = 0.5;
        renderHUD();
        refreshSheetTexture();
      });
    });

    document.querySelectorAll('[data-variant]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.variant === currentVariant);
    });
    document.body.dataset.bookId = (books[activeBookIdx] || books[0]).id;
    document.body.dataset.stage = String(stageFilter);
    document.body.dataset.variant = currentVariant;
  }

  function stepScene(dir) {
    const order = ['all', 0, 1, 2];
    const pos = order.indexOf(stageFilter);
    const nextPos = pos + dir;
    if (nextPos >= 0 && nextPos < order.length) {
      stageFilter = order[nextPos];
    } else if (dir > 0) {
      activeBookIdx = (activeBookIdx + 1) % books.length;
      stageFilter = 'all';
    } else {
      activeBookIdx = (activeBookIdx - 1 + books.length) % books.length;
      stageFilter = 2;
    }
    velYaw = dir > 0 ? 4.8 : -4.8;
    release = 0.55;
    renderHUD();
    refreshSheetTexture();
  }

  function renderModalContent() {
    const book = books[activeBookIdx] || books[0];
    const detail = document.getElementById('activeSummaryDetail');
    detail.innerHTML = `
      <div style="font-size:12px; color:#f59e0b; font-weight:700; margin-bottom:4px;">ĐANG XEM: ${book.title} (${book.author})</div>
      <div style="display:grid; gap:8px; font-size:13px; color:rgba(242,242,240,0.85);">
        ${book.stages
          .map(
            (s, i) =>
              `<div><strong>0${i + 1}. ${s.title}:</strong> ${s.narrative}</div>`
          )
          .join('')}
      </div>
    `;

    const qrGrid = document.getElementById('qrGrid');
    qrGrid.innerHTML = books
      .map((b, idx) => {
        const url = getBookRouteUrl(b);
        const svg = window.QRCodeGenerator.toSVG(url, { size: 150 });
        return `
        <div class="qr-card">
          <div style="font-weight:700; font-size:14px;">${idx + 1}. ${b.title}</div>
          <div class="qr-card__svg">${svg}</div>
          <div class="qr-card__url">${url}</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:center;">
            <button class="dock-btn" data-dl-png="${b.id}" type="button">Tải PNG</button>
            <button class="dock-btn" data-dl-svg="${b.id}" type="button">Tải SVG</button>
            <a class="dock-btn dock-btn--primary" href="${url}" target="_blank" rel="noopener">Mở link ↗</a>
          </div>
        </div>
      `;
      })
      .join('');

    qrGrid.querySelectorAll('[data-dl-png]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const b = books.find((x) => x.id === btn.dataset.dlPng);
        if (!b) return;
        const canvasQr = window.QRCodeGenerator.toCanvas(getBookRouteUrl(b), { size: 520, label: b.title });
        const a = document.createElement('a');
        a.href = canvasQr.toDataURL('image/png');
        a.download = `qr-${b.id}.png`;
        a.click();
      });
    });

    qrGrid.querySelectorAll('[data-dl-svg]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const b = books.find((x) => x.id === btn.dataset.dlSvg);
        if (!b) return;
        const svg = window.QRCodeGenerator.toSVG(getBookRouteUrl(b), { size: 420 });
        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `qr-${b.id}.svg`;
        a.click();
      });
    });

    document.getElementById('baseUrlInput').value = settings.baseUrl || PUBLIC_GITHUB_PAGES_URL;
  }

  // Event Wireup
  document.querySelectorAll('[data-variant]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentVariant = btn.dataset.variant;
      applyMaterialVariant();
      renderHUD();
      refreshSheetTexture();
    });
  });

  document.getElementById('prevSceneBtn').addEventListener('click', () => stepScene(-1));
  document.getElementById('nextSceneBtn').addEventListener('click', () => stepScene(1));

  document.addEventListener('keydown', (e) => {
    if (modalOpen) return;
    if (e.key === 'ArrowRight') stepScene(1);
    if (e.key === 'ArrowLeft') stepScene(-1);
  });

  const qrModal = document.getElementById('qrModal');
  document.getElementById('openQrModalBtn').addEventListener('click', () => {
    modalOpen = true;
    renderModalContent();
    qrModal.classList.remove('hidden');
  });
  document.getElementById('closeQrModalBtn').addEventListener('click', () => {
    modalOpen = false;
    qrModal.classList.add('hidden');
  });

  document.getElementById('baseUrlInput').addEventListener('change', (e) => {
    settings.baseUrl = e.target.value.trim() || PUBLIC_GITHUB_PAGES_URL;
    saveSettings(settings);
    renderModalContent();
    refreshSheetTexture();
  });

  document.getElementById('quickAddBtn').addEventListener('click', () => {
    const title = document.getElementById('quickAddTitle').value.trim();
    const author = document.getElementById('quickAddAuthor').value.trim() || 'Sưu tầm 20/11';
    const url = document.getElementById('quickAddUrl').value.trim() || PUBLIC_GITHUB_PAGES_URL;
    const summary = document.getElementById('quickAddSummary').value.trim();
    if (!title) return;
    const newBook = {
      id: slugify(title),
      shortTitle: title.slice(0, 18),
      bgWord: title.split(' ').slice(0, 2).join(' ').toUpperCase(),
      title,
      author,
      url,
      accentColor: '#f59e0b',
      stages: splitSummaryIntoStages(summary, title)
    };
    books.push(newBook);
    saveBooks(books);
    activeBookIdx = books.length - 1;
    stageFilter = 'all';
    renderHUD();
    renderModalContent();
    refreshSheetTexture();
  });

  document.getElementById('resetBooksBtn').addEventListener('click', () => {
    books = JSON.parse(JSON.stringify(DEFAULT_BOOKS));
    saveBooks(books);
    activeBookIdx = 0;
    stageFilter = 'all';
    renderHUD();
    renderModalContent();
    refreshSheetTexture();
  });

  function boot() {
    applyMaterialVariant();
    renderHUD();
    resize();
    mesh.visible = true;
    mat.opacity = 0.002;
    renderer.compile(scene, camera);
    renderer.render(scene, camera);
    mat.opacity = 1;
    refreshSheetTexture();
    frame();
  }

  if (document.fonts && document.fonts.ready) {
    Promise.race([
      Promise.all([
        document.fonts.load('700 68px "Inter Tight"'),
        document.fonts.load('600 66px "Inter Tight"'),
        document.fonts.load('600 30px "Inter"'),
        document.fonts.load('500 22px "Inter"'),
        document.fonts.load('500 66px "EB Garamond"'),
        document.fonts.load('italic 400 34px "EB Garamond"')
      ]).then(() => document.fonts.ready),
      new Promise((r) => setTimeout(r, 2500))
    ]).then(boot);
  } else {
    boot();
  }

  window.__sheet = {
    group,
    mat,
    uni,
    renderer,
    scene,
    camera,
    mesh,
    state: () => ({ intro, dragYaw, dragPitch, hover, quad, variant: currentVariant, activeBookIdx, stageFilter }),
    hit: (x, y) => inQuad(x, y),
    spin: (y) => {
      dragYaw = y;
      release = 1e9;
    }
  };
})();
