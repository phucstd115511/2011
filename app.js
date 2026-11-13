(function () {
  'use strict';

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
      title: 'Bản sắc văn hóa Việt Nam',
      author: 'GS. Phan Ngọc',
      url: 'https://fr.scribd.com/document/1027136379/B%E1%BA%A3n-S%E1%BA%AFc-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Phan-Ng%E1%BB%8Dc',
      themeColor: '#C85A32',
      message2011: 'Tri ân người thầy văn hóa học đã chỉ ra cội rễ tâm thức Việt.',
      stages: [
        {
          label: 'Chặng 1 · Hệ tọa độ tâm thức Việt',
          title: 'Bốn trục bất biến: Tổ quốc, Làng xã, Thân phận, Diện mạo',
          narrative:
            'GS. Phan Ngọc định nghĩa văn hóa là hệ thống quan hệ và “kiểu lựa chọn riêng” của một dân tộc. Qua bao biến động lịch sử, tâm thức người Việt luôn neo giữ bốn nhu cầu bất biến gắn với mái đình làng xã và non sông Tổ quốc.',
          quote: '“Bản sắc văn hóa là cái mặt bất biến của một hệ thống quan hệ trong quá trình lịch sử.”',
          takeaway: 'Hiểu rõ 4 trụ cột tâm thức giúp thế hệ trẻ nhận diện đúng gốc rễ văn hóa dân tộc.',
          image: './assets/scenes/ban-sac-1.svg'
        },
        {
          label: 'Chặng 2 · Lăng kính khúc xạ văn hóa',
          title: 'Tiếp nhận Nho học, Đạo giáo & Phương Tây qua sự khúc xạ',
          narrative:
            'Khi tiếp xúc với văn hóa Trung Hoa hay văn minh phương Tây, người Việt không sao chép rập khuôn mà đưa các giá trị ngoại lai đi qua “lăng kính khúc xạ” của tâm thức bản địa để biến đổi cho phù hợp.',
          quote: '“Người Việt tiếp nhận Nho học không phải bằng sự rập khuôn mà là một sự khúc xạ.”',
          takeaway: 'Bản lĩnh văn hóa nằm ở khả năng biến ngoại lực thành nội lực mang dấu ấn Việt.',
          image: './assets/scenes/ban-sac-2.svg'
        },
        {
          label: 'Chặng 3 · Phát huy trong thời đại mới',
          title: 'Giữ gìn bản sắc khi bước ra biển lớn hội nhập',
          narrative:
            'Trong bối cảnh kinh tế thị trường và toàn cầu hóa, tính linh hoạt và tình nghĩa cộng đồng trở thành ưu thế giúp người Việt mở cửa đón tinh hoa nhân loại mà vẫn giữ vững căn cước văn hóa.',
          quote: '“Muốn hội nhập không hòa tan, phải thấu hiểu cái bất biến trong tâm thức Việt.”',
          takeaway: 'Món quà tri thức 20/11: Trao cho người học nền tảng tự tin hội nhập từ cội nguồn.',
          image: './assets/scenes/ban-sac-3.svg'
        }
      ]
    },
    {
      id: 'giao-luu-tiep-bien-van-hoa',
      title: 'Giao lưu tiếp biến văn hóa và sự biến đổi văn hóa Việt Nam',
      author: 'Chuyên khảo Văn hóa học',
      url: 'https://fr.scribd.com/document/1049743615/8002-Giao-L%C6%B0u-Ti%E1%BA%BFp-Bi%E1%BA%BFn-V%C4%83n-Hoa-Va-S%E1%BB%B1-Bi%E1%BA%BFn-%C4%90%E1%BB%95i-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam',
      themeColor: '#2E6F5E',
      message2011: 'Hành trình tiếp biến tri thức nhân loại trên nền tảng nội sinh bền vững.',
      stages: [
        {
          label: 'Chặng 1 · Quy luật Nội sinh – Ngoại sinh',
          title: 'Cơ tầng bản địa đón nhận và chọn lọc dòng chảy bên ngoài',
          narrative:
            'Giao lưu và tiếp biến văn hóa diễn ra liên tục qua thương mại, tôn giáo và biến động lịch sử. Mọi yếu tố ngoại sinh muốn bén rễ lâu dài đều phải hòa quyện với cơ tầng văn hóa nội sinh sẵn có.',
          quote: '“Không có nền văn hóa nào phát triển được nếu đóng cửa biệt lập với bên ngoài.”',
          takeaway: 'Cơ tầng bản địa vững chắc chính là bộ rễ giúp văn hóa dân tộc không bị bật gốc.',
          image: './assets/scenes/giao-luu-1.svg'
        },
        {
          label: 'Chặng 2 · Ba cuộc tiếp xúc lịch sử lớn',
          title: 'Từ Đông Á, Ấn Độ – Champa đến chữ Quốc ngữ & Phương Tây',
          narrative:
            'Việt Nam trải qua những cuộc giao thoa sâu sắc với văn hóa Đông Á (Nho – Phật – Đạo), văn hóa Ấn Độ qua Champa – Óc Eo, và làn sóng cận đại phương Tây tạo nên chữ Quốc ngữ, báo chí cùng đô thị mới.',
          quote: '“Đứng ở ngã tư đường giao lưu, văn hóa Việt biết đối đầu và Việt hóa mọi ảnh hưởng.”',
          takeaway: 'Mỗi giai đoạn tiếp biến đều bổ sung thêm tầng lớp giá trị mới cho di sản Việt.',
          image: './assets/scenes/giao-luu-2.svg'
        },
        {
          label: 'Chặng 3 · Bản lĩnh thời toàn cầu hóa',
          title: 'Xây dựng sức đề kháng văn hóa trước làn sóng số',
          narrative:
            'Trước sự bùng nổ của công nghệ và văn hóa đại chúng toàn cầu, bài học tiếp biến nhắc nhở chúng ta giữ gìn lòng yêu nước, ngôn ngữ mẹ đẻ và tinh thần cộng đồng làm tấm khiên bảo vệ bản sắc.',
          quote: '“Sức đề kháng văn hóa giúp ta tiếp thu cái tiến bộ mà không đánh mất chính mình.”',
          takeaway: 'Giáo dục văn hóa là trao cho thế hệ trẻ chiếc la bàn trong thế giới phẳng.',
          image: './assets/scenes/giao-luu-3.svg'
        }
      ]
    },
    {
      id: 'co-so-van-hoa-viet-nam',
      title: 'Cơ sở văn hóa Việt Nam',
      author: 'GS. TSKH Trần Ngọc Thêm',
      url: 'https://fr.scribd.com/document/945446496/C%C6%A1-S%E1%BB%9F-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Tr%E1%BA%A7n-Ng%E1%BB%8Dc-Them-Nxb-%C4%90HQGHN-2024',
      themeColor: '#D97706',
      message2011: 'Công trình giáo trình kinh điển dẫn lối bao thế hệ sinh viên Việt Nam.',
      stages: [
        {
          label: 'Chặng 1 · Gốc nông nghiệp lúa nước',
          title: 'Loại hình văn hóa trọng tĩnh, trọng tình và ưa hài hòa',
          narrative:
            'GS. Trần Ngọc Thêm lý giải văn hóa Việt bắt nguồn từ nền nông nghiệp lúa nước vùng sông Hồng và Đông Nam Á — từ đó hình thành lối tư duy tổng hợp, linh hoạt, gắn bó mật thiết với thiên nhiên.',
          quote: '“Đặc trưng tối thượng của văn hóa gốc nông nghiệp là trọng tình và ưa sự hài hòa.”',
          takeaway: 'Chìa khóa nông nghiệp lúa nước giúp giải mã mọi tập quán ứng xử của người Việt.',
          image: './assets/scenes/co-so-1.svg'
        },
        {
          label: 'Chặng 2 · Văn hóa nhận thức vũ trụ',
          title: 'Triết lý Âm Dương, Tam Tài và Ngũ Hành',
          narrative:
            'Người Việt nhận thức thế giới qua cặp đôi Âm Dương bổ sung cho nhau, đặt con người vào thế cân bằng giữa Trời và Đất (Tam Tài) cùng quy luật tương sinh tương khắc của Ngũ Hành và lịch Can Chi.',
          quote: '“Tư duy Âm Dương giúp người Việt nhìn nhận sự vật uyển chuyển, không cực đoan.”',
          takeaway: 'Sự cân bằng hài hòa là thước đo lý tưởng trong tư duy truyền thống.',
          image: './assets/scenes/co-so-2.svg'
        },
        {
          label: 'Chặng 3 · Làng xã & Ăn – Mặc – Ở',
          title: 'Cấu trúc Làng – Nước và nghệ thuật sống thuận tự nhiên',
          narrative:
            'Từ tế bào làng xã mang hai tính chất song hành (cộng đồng và tự trị) đến bữa cơm hài hòa ngũ vị, tà áo mềm mại và ngôi nhà đón gió sông nước — tất cả thấm đẫm tinh thần dung hợp Việt Nam.',
          quote: '“Làng là tế bào gốc, nơi lưu giữ phong tục, tín ngưỡng thờ tổ tiên và tình nghĩa xóm giềng.”',
          takeaway: 'Những điều bình dị trong ăn, mặc, ở hàng ngày chính là bảo tàng sống của văn hóa.',
          image: './assets/scenes/co-so-3.svg'
        }
      ]
    },
    {
      id: 'viet-nam-van-hoa-su-cuong',
      title: 'Việt Nam văn hóa sử cương',
      author: 'Học giả Đào Duy Anh',
      url: 'https://fr.scribd.com/document/675715360/Vi%E1%BB%87t-Nam-V%C4%83n-Hoa-S%E1%BB%AD-C%C6%B0%C6%A1ng-%C4%90ao-Duy-Anh',
      themeColor: '#3B5998',
      message2011: 'Tôn vinh bậc đại học giả đặt nền móng cho văn hóa học và sử học nước nhà.',
      stages: [
        {
          label: 'Chặng 1 · Quan niệm nền tảng (1938)',
          title: '“Văn hóa tức là sinh hoạt” — Kinh tế & Đời sống dân tộc',
          narrative:
            'Ra đời năm 1938, tác phẩm mở đầu bằng định nghĩa súc tích “Văn hóa tức là sinh hoạt”, khảo sát toàn diện nghề nông, thủ công mỹ nghệ, thương nghiệp và điều kiện địa lý đã nuôi dưỡng dân tộc suốt bốn nghìn năm.',
          quote: '“Văn hóa tức là sinh hoạt, bao gồm cả đời sống vật chất lẫn tinh thần của con người.”',
          takeaway: 'Nghiên cứu văn hóa là nhìn vào chính đời sống lao động thực tiễn của nhân dân.',
          image: './assets/scenes/su-cuong-1.svg'
        },
        {
          label: 'Chặng 2 · Tổ chức xã hội & Trí thức',
          title: 'Thiết chế làng xã, khoa cử, chữ Nôm và tư tưởng Tam giáo',
          narrative:
            'Đào Duy Anh hệ thống hóa công phu cấu trúc gia đình, làng xã, bộ máy nhà nước phong kiến cùng bức tranh trí thức sinh hoạt: từ chế độ khoa cử Nho học đến văn học chữ Hán, chữ Nôm và nghệ thuật cổ truyền.',
          quote: '“Hiểu tổ chức xã hội và đời sống trí thức xưa là nắm được mạch nguồn lịch sử nước nhà.”',
          takeaway: 'Kho tư liệu đồ sộ của Đào Duy Anh vẫn nguyên giá trị tham khảo cho người học hôm nay.',
          image: './assets/scenes/su-cuong-2.svg'
        },
        {
          label: 'Chặng 3 · Sứ mệnh thức tỉnh thế hệ',
          title: 'Ôn lại vốn văn hóa nước nhà trước làn sóng Tây phương',
          narrative:
            'Trước cuộc va đập Đông – Tây đầu thế kỷ XX, học giả Đào Duy Anh viết sách để người Việt hiểu sâu sắc cội nguồn dân tộc, từ đó tỉnh táo chọn lọc giá trị mới của văn minh nhân loại.',
          quote: '“Cần ôn lại cái vốn văn hóa nước nhà để có cơ sở đối diện và tiếp thu văn minh mới.”',
          takeaway: 'Tinh thần tự tôn dân tộc và thái độ học thuật nghiêm cẩn là di sản vô giá của người thầy.',
          image: './assets/scenes/su-cuong-3.svg'
        }
      ]
    },
    {
      id: 'lang-du-trong-van-hoa-viet-nam',
      title: 'Lãng du trong văn hóa Việt Nam',
      author: 'Nhà văn hóa Hữu Ngọc',
      url: 'https://fr.scribd.com/document/804984636/Lang-Du-Trong-Van-Hoa-Viet-Nam-Huu-Ngoc',
      themeColor: '#8B3A2B',
      message2011: 'Kính tặng những người truyền cảm hứng đưa văn hóa Việt ra thế giới.',
      stages: [
        {
          label: 'Chặng 1 · Đất Việt muôn sắc',
          title: 'Hành trình xê dịch từ núi cao Tây Bắc tới sông nước Cửu Long',
          narrative:
            'Với tâm thế lãng du thong thả, học giả Hữu Ngọc dẫn người đọc đi dọc chiều dài đất nước — qua phiên chợ vùng cao, phố cổ miền Trung đến miệt vườn Nam Bộ để cảm nhận vẻ đẹp phong tục từng miền.',
          quote: '“Mỗi miền đất Việt Nam là một trang ký ức sống động về phong tục và tâm hồn con người.”',
          takeaway: 'Sự đa dạng vùng miền tạo nên bức tranh văn hóa Việt Nam vừa thống nhất vừa phong phú.',
          image: './assets/scenes/lang-du-1.svg'
        },
        {
          label: 'Chặng 2 · Bậc thầy ký ngắn & Tản văn',
          title: 'Chân dung tâm hồn Việt bên chén trà sen và trang sách nhỏ',
          narrative:
            'Bằng lối viết tản văn mộc mạc như chuyện trò mà uyên bác sâu xa, cuốn sách phác họa nét đẹp hiếu học, trọng nghĩa tình, thờ cúng tổ tiên và cách ứng xử tinh tế trong gia đình Việt.',
          quote: '“Văn hóa hiện diện trong chén trà sớm, câu ca dao, nếp nhà và ký ức làng quê.”',
          takeaway: 'Những câu chuyện ngắn giàu cảm xúc giúp người đọc yêu văn hóa một cách tự nhiên nhất.',
          image: './assets/scenes/lang-du-2.svg'
        },
        {
          label: 'Chặng 3 · Cầu nối văn hóa Đông – Tây',
          title: '“Hòa nhập nhưng không hòa tan” — Đưa hương sắc Việt ra năm châu',
          narrative:
            'Xuất phát từ những bài viết giới thiệu văn hóa Việt cho bạn bè quốc tế, Hữu Ngọc gửi gắm thông điệp: muốn đối thoại bình đẳng với thế giới, ta phải trân trọng và kể được câu chuyện bản sắc của chính mình.',
          quote: '“Hòa nhập với nhân loại nhưng tuyệt đối không hòa tan bản sắc cội nguồn.”',
          takeaway: 'Chúc mừng ngày 20/11 — Mỗi trang sách là một nhịp cầu lan tỏa tri thức và tình yêu quê hương.',
          image: './assets/scenes/lang-du-3.svg'
        }
      ]
    }
  ];

  const TAKEAWAY_ICON_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.6 6.1L21 9l-4.7 4.4L17.5 20 12 16.8 6.5 20l1.2-6.6L3 9l6.4-.9L12 2z"/></svg>';

  // Resolve asset paths cleanly whether accessed from root / or /sach/<slug>/
  function getRootPrefix() {
    if (typeof window.APP_ROOT_PREFIX === 'string') return window.APP_ROOT_PREFIX;
    return './';
  }

  function resolveAssetPath(path) {
    if (!path) return '';
    if (path.startsWith('data:') || path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const clean = path.replace(/^\.\//, '');
    return getRootPrefix() + clean;
  }

  // Detect GitHub Pages / Solo Book route via /sach/<slug>/, ?book=<slug>, or #book=<slug>
  function detectRoute() {
    if (window.BOOK_ROUTE_SLUG) {
      return { bookId: window.BOOK_ROUTE_SLUG, solo: true };
    }

    const params = new URLSearchParams(window.location.search);
    const queryBook = params.get('book');
    const isSoloQuery = params.get('solo') === '1' || Boolean(queryBook);

    const hashMatch = window.location.hash.match(/book=([^&]+)/);
    if (hashMatch) {
      return { bookId: decodeURIComponent(hashMatch[1]), solo: true };
    }

    const pathMatch = window.location.pathname.match(/\/sach\/([^/]+)\/?$/);
    if (pathMatch) {
      return { bookId: decodeURIComponent(pathMatch[1]), solo: true };
    }

    if (queryBook) {
      return { bookId: queryBook, solo: isSoloQuery };
    }

    return { bookId: null, solo: false };
  }

  function defaultBaseUrl() {
    const { hostname, origin, pathname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('github.io')) {
      return PUBLIC_GITHUB_PAGES_URL;
    }
    const stripped = pathname.replace(/\/sach\/[^/]+\/?$/, '/').replace(/index\.html$/, '');
    const normalized = stripped.endsWith('/') ? stripped : stripped + '/';
    return origin + normalized;
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return {
      baseUrl: defaultBaseUrl(),
      qrTargetMode: 'subpath'
    };
  }

  function saveSettings(settings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (_) {}
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

  function saveBooks(books) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } catch (_) {}
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

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function splitSummaryIntoStages(rawText, bookTitle, existingStages) {
    const text = (rawText || '').trim();
    if (!text) {
      return existingStages && existingStages.length === 3
        ? existingStages
        : [
            {
              label: 'Chặng 1 · Mở đầu',
              title: `${bookTitle} — Bối cảnh mở đầu`,
              narrative: `Khám phá những trang đầu tiên của cuốn sách "${bookTitle}" với thông điệp ý nghĩa gửi tặng thầy cô nhân ngày 20/11.`,
              quote: '“Mỗi trang sách mở ra một chân trời tri thức mới.”',
              takeaway: 'Khơi gợi cảm hứng đọc sách và trân trọng tri thức.',
              image: ''
            },
            {
              label: 'Chặng 2 · Điểm nhấn',
              title: `${bookTitle} — Giá trị cốt lõi`,
              narrative: 'Những bài học sâu sắc về bản sắc văn hóa, lòng kiên trì và vai trò dẫn dắt của người thầy.',
              quote: '“Người thầy giỏi khơi dậy ánh sáng bên trong mỗi học trò.”',
              takeaway: 'Lan tỏa giá trị nhân văn và tinh thần học tập suốt đời.',
              image: ''
            },
            {
              label: 'Chặng 3 · Tri ân 20/11',
              title: `${bookTitle} — Thông điệp đọng lại`,
              narrative: 'Quét mã QR để mở trang sách gốc và cùng lưu giữ những cảm xúc đẹp đẽ nhân Ngày Nhà Giáo Việt Nam 20/11.',
              quote: '“Tri ân thầy cô — những người chắp cánh ước mơ.”',
              takeaway: 'Chúc mừng ngày Nhà giáo Việt Nam 20/11 thật nhiều niềm vui!',
              image: ''
            }
          ];
    }

    let parts = text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);

    if (parts.length < 3) {
      const sentences = text
        .split(/(?<=[.!?…])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (sentences.length >= 3) {
        const chunk = Math.ceil(sentences.length / 3);
        parts = [
          sentences.slice(0, chunk).join(' '),
          sentences.slice(chunk, chunk * 2).join(' '),
          sentences.slice(chunk * 2).join(' ')
        ].filter(Boolean);
      }
    }

    while (parts.length < 3) {
      parts.push(parts[parts.length - 1] || text);
    }

    const stageMeta = [
      { label: 'Chặng 1 · Mở đầu câu chuyện', prefix: 'Khởi nguồn:' },
      { label: 'Chặng 2 · Cao trào & Điểm nhấn', prefix: 'Giá trị cốt lõi:' },
      { label: 'Chặng 3 · Thông điệp 20/11', prefix: 'Đọng lại:' }
    ];

    return [0, 1, 2].map((i) => {
      const prev = existingStages && existingStages[i] ? existingStages[i] : {};
      const snippet = parts[i] || text;
      const shortHeadline = snippet.split(/[,.;:!?]/)[0].slice(0, 56).trim();
      return {
        label: stageMeta[i].label,
        title: prev.customTitle || (shortHeadline ? `${shortHeadline}` : `${bookTitle} — Chặng ${i + 1}`),
        narrative: snippet,
        quote: prev.quote || `“${snippet.slice(0, 110)}${snippet.length > 110 ? '…' : ''}”`,
        takeaway: prev.takeaway || `${stageMeta[i].prefix} ${shortHeadline || bookTitle}`,
        image: prev.image || ''
      };
    });
  }

  function buildSceneFallbackDataURL(book, stage, stageIdx) {
    const palettes = [
      ['#2C3E50', '#C85A32', '#F3E5D8'],
      ['#1E4D40', '#D97706', '#EAF4F0'],
      ['#3A2D4C', '#C85A32', '#F5EEF8']
    ];
    const [bg, accent, paper] = palettes[stageIdx % palettes.length];
    const safeTitle = escapeHtml(book.title).slice(0, 34);
    const safeStage = escapeHtml(stage.title).slice(0, 44);
    const safeLabel = escapeHtml(stage.label);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="#141C2B"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="660" cy="120" r="160" fill="${accent}" opacity="0.18"/>
      <circle cx="140" cy="500" r="190" fill="${paper}" opacity="0.08"/>
      <rect x="64" y="64" width="672" height="472" rx="24" fill="${paper}" opacity="0.96"/>
      <rect x="96" y="100" width="190" height="32" rx="16" fill="${accent}"/>
      <text x="191" y="121" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">${safeLabel}</text>
      <text x="96" y="190" font-family="Georgia, serif" font-size="32" font-weight="700" fill="#1c2536">${safeTitle}</text>
      <line x1="96" y1="216" x2="240" y2="216" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
      <text x="96" y="275" font-family="Georgia, serif" font-size="22" font-weight="600" fill="${accent}">${safeStage}</text>
      <rect x="96" y="330" width="608" height="145" rx="16" fill="#ffffff" stroke="#e6dccf" stroke-width="2"/>
      <text x="120" y="382" font-family="system-ui, sans-serif" font-size="18" fill="#4a5568">Chặng ${stageIdx + 1}/3 · Minh họa theo nội dung tóm tắt</text>
      <text x="120" y="422" font-family="system-ui, sans-serif" font-size="16" fill="#718096">Có thể tải ảnh riêng cho từng chặng trong Xưởng QR</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function getStageImageSrc(book, stage, idx) {
    if (stage.image) return resolveAssetPath(stage.image);
    return buildSceneFallbackDataURL(book, stage, idx);
  }

  function getBookRouteUrl(book, settings) {
    const base = (settings.baseUrl || defaultBaseUrl()).trim();
    if (settings.qrTargetMode === 'direct' && book.url) {
      return book.url;
    }
    const cleanBase = base.split('?')[0].split('#')[0];
    const normalizedBase = cleanBase.endsWith('/') ? cleanBase : cleanBase + '/';

    if (settings.qrTargetMode === 'subpath' && SUBPATH_SLUGS.has(book.id)) {
      return `${normalizedBase}sach/${encodeURIComponent(book.id)}/`;
    }
    return `${normalizedBase}?book=${encodeURIComponent(book.id)}&solo=1`;
  }

  function getLocalSoloHref(book) {
    if (SUBPATH_SLUGS.has(book.id)) {
      return `${getRootPrefix()}sach/${encodeURIComponent(book.id)}/`;
    }
    return `${getRootPrefix()}?book=${encodeURIComponent(book.id)}&solo=1`;
  }

  // Application State
  let books = loadBooks();
  let settings = loadSettings();
  let currentMode = 'scrolly';
  let activeRoute = detectRoute();
  let slideBookIdx = 0;
  let slideStageIdx = 0;
  let autoPlayTimer = null;
  const activeStageByBook = {};

  function getVisibleBooks() {
    if (activeRoute.solo && activeRoute.bookId) {
      const found = books.find((b) => b.id === activeRoute.bookId);
      if (found) return [found];
    }
    return books;
  }

  // DOM References
  const scrollyView = document.getElementById('scrollyView');
  const slideView = document.getElementById('slideView');
  const studioView = document.getElementById('studioView');
  const heroSection = document.getElementById('heroSection');
  const soloBanner = document.getElementById('soloBanner');
  const soloBannerText = document.getElementById('soloBannerText');
  const exitSoloBtn = document.getElementById('exitSoloBtn');
  const readingProgressFill = document.getElementById('readingProgressFill');

  function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-tab').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.mode === mode);
    });
    scrollyView.classList.toggle('hidden', mode !== 'scrolly');
    slideView.classList.toggle('hidden', mode !== 'slide');
    studioView.classList.toggle('hidden', mode !== 'studio');

    if (mode === 'slide') {
      stopAutoPlay();
      renderSlideView();
    } else if (mode === 'studio') {
      stopAutoPlay();
      renderStudioView();
    } else {
      renderScrollyView();
    }
  }

  function renderHero() {
    const soloMode = activeRoute.solo && activeRoute.bookId && books.some((b) => b.id === activeRoute.bookId);
    if (heroSection) heroSection.classList.toggle('hidden', soloMode);
    if (soloBanner) soloBanner.classList.toggle('hidden', !soloMode);

    if (soloMode && soloBannerText) {
      const targetBook = books.find((b) => b.id === activeRoute.bookId);
      soloBannerText.textContent = `Đang mở trang riêng từ mã QR: "${targetBook.title}" (${targetBook.author})`;
    }

    const pillsEl = document.getElementById('heroBookPills');
    if (pillsEl) {
      pillsEl.innerHTML = books
        .map(
          (book, i) => `
        <button class="book-pill" data-jump-book="${escapeHtml(book.id)}" type="button">
          <span>${i + 1}. ${escapeHtml(book.title)}</span>
          <span class="book-pill__tag">3 chặng QR →</span>
        </button>
      `
        )
        .join('');

      pillsEl.querySelectorAll('[data-jump-book]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (currentMode !== 'scrolly') setMode('scrolly');
          const target = document.getElementById(`book-${btn.dataset.jumpBook}`);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }
  }

  function updateBookStageVisual(book, stageIdx) {
    activeStageByBook[book.id] = stageIdx;
    const chapter = document.getElementById(`book-${book.id}`);
    if (!chapter) return;

    const stage = book.stages[stageIdx] || book.stages[0];
    const frame = chapter.querySelector('.visual-frame');
    const img = chapter.querySelector('.visual-frame__img');
    const pill = chapter.querySelector('.visual-frame__stage-pill');
    const caption = chapter.querySelector('.visual-frame__caption');

    if (frame && img) {
      const nextSrc = getStageImageSrc(book, stage, stageIdx);
      if (img.dataset.currentSrc !== nextSrc) {
        frame.classList.add('is-transitioning');
        setTimeout(() => {
          img.src = nextSrc;
          img.alt = stage.title;
          img.dataset.currentSrc = nextSrc;
          frame.classList.remove('is-transitioning');
        }, 120);
      }
    }
    if (pill) pill.textContent = stage.label;
    if (caption) caption.textContent = stage.title;

    chapter.querySelectorAll('.stage-dot').forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === stageIdx);
    });
    chapter.querySelectorAll('.story-step').forEach((step, idx) => {
      step.classList.toggle('is-active', idx === stageIdx);
    });
  }

  let scrollObservers = [];

  function setupScrollObserver(visibleBooks) {
    scrollObservers.forEach((obs) => obs.disconnect());
    scrollObservers = [];

    const isHorizontalMobile = window.innerWidth <= 960;

    if (isHorizontalMobile) {
      scrollyView.querySelectorAll('.scrolly-steps').forEach((container) => {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
                const bookId = entry.target.dataset.bookId;
                const stageIdx = Number(entry.target.dataset.stageIdx);
                const book = visibleBooks.find((b) => b.id === bookId);
                if (book) updateBookStageVisual(book, stageIdx);
              }
            });
          },
          { root: container, threshold: 0.6 }
        );
        container.querySelectorAll('.story-step').forEach((el) => obs.observe(el));
        scrollObservers.push(obs);
      });
    } else {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bookId = entry.target.dataset.bookId;
              const stageIdx = Number(entry.target.dataset.stageIdx);
              const book = visibleBooks.find((b) => b.id === bookId);
              if (book) updateBookStageVisual(book, stageIdx);
            }
          });
        },
        {
          rootMargin: '-30% 0px -42% 0px',
          threshold: 0.15
        }
      );
      scrollyView.querySelectorAll('.story-step').forEach((el) => obs.observe(el));
      scrollObservers.push(obs);
    }
  }

  function renderScrollyView() {
    const visibleBooks = getVisibleBooks();
    scrollyView.innerHTML = visibleBooks
      .map((book, bIdx) => {
        const activeIdx = activeStageByBook[book.id] || 0;
        const activeStage = book.stages[activeIdx] || book.stages[0];
        const routeUrl = getBookRouteUrl(book, settings);
        const qrSvg = window.QRCodeGenerator.toSVG(routeUrl, {
          size: 160,
          darkColor: '#1C2536',
          lightColor: '#FFFFFF'
        });
        const localSoloHref = getLocalSoloHref(book);

        return `
        <article id="book-${escapeHtml(book.id)}" class="book-chapter">
          <div class="book-chapter__header">
            <div>
              <div class="book-chapter__num">Cuốn sách ${bIdx + 1} · Bộ Văn hóa Việt Nam</div>
              <h2 class="book-chapter__title">${escapeHtml(book.title)}</h2>
              <div class="book-chapter__author">Tác giả: ${escapeHtml(book.author)} · ${escapeHtml(book.message2011 || '')}</div>
            </div>
            <div class="book-chapter__links">
              <button class="btn btn-secondary btn-sm" data-open-slide="${escapeHtml(book.id)}" type="button">Xem dạng Vuốt Slide</button>
              <a class="btn btn-sage btn-sm" href="${escapeHtml(book.url)}" target="_blank" rel="noopener">Đọc sách gốc (Scribd) ↗</a>
            </div>
          </div>

          <div class="scrolly-grid">
            <div class="scrolly-stage">
              <div class="visual-frame">
                <img
                  class="visual-frame__img"
                  src="${escapeHtml(getStageImageSrc(book, activeStage, activeIdx))}"
                  data-current-src="${escapeHtml(getStageImageSrc(book, activeStage, activeIdx))}"
                  alt="${escapeHtml(activeStage.title)}"
                />
                <div class="visual-frame__overlay">
                  <span class="visual-frame__stage-pill">${escapeHtml(activeStage.label)}</span>
                  <p class="visual-frame__caption">${escapeHtml(activeStage.title)}</p>
                </div>
              </div>

              <div class="stage-dots">
                ${book.stages
                  .map(
                    (_, idx) =>
                      `<button class="stage-dot ${idx === activeIdx ? 'is-active' : ''}" data-dot-book="${escapeHtml(book.id)}" data-dot-idx="${idx}" aria-label="Chặng ${idx + 1}" type="button"></button>`
                  )
                  .join('')}
              </div>

              <div class="qr-mini-card">
                <div class="qr-mini-card__code">${qrSvg}</div>
                <div class="qr-mini-card__info">
                  <div class="qr-mini-card__title">Mã QR riêng cho cuốn sách này</div>
                  <div class="qr-mini-card__url">${escapeHtml(routeUrl)}</div>
                  <div class="qr-mini-card__actions">
                    <button class="btn btn-primary btn-sm" data-dl-png="${escapeHtml(book.id)}" type="button">Tải PNG</button>
                    <button class="btn btn-secondary btn-sm" data-copy-route="${escapeHtml(book.id)}" type="button">Sao chép link</button>
                    <a class="btn btn-secondary btn-sm" href="${escapeHtml(localSoloHref)}">Mở trang riêng</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="scrolly-steps">
              ${book.stages
                .map(
                  (stage, sIdx) => `
                <div class="story-step ${sIdx === activeIdx ? 'is-active' : ''}" data-book-id="${escapeHtml(book.id)}" data-stage-idx="${sIdx}">
                  <div class="story-step__label">${escapeHtml(stage.label)}</div>
                  <h3 class="story-step__title">${escapeHtml(stage.title)}</h3>
                  <p class="story-step__text">${escapeHtml(stage.narrative)}</p>
                  <blockquote class="story-step__quote">${escapeHtml(stage.quote)}</blockquote>
                  <div class="story-step__takeaway">${TAKEAWAY_ICON_SVG}<span>${escapeHtml(stage.takeaway)}</span></div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </article>
      `;
      })
      .join('');

    scrollyView.querySelectorAll('.visual-frame__img').forEach((img) => {
      img.addEventListener('error', () => {
        const chapter = img.closest('.book-chapter');
        if (!chapter) return;
        const bookId = chapter.id.replace(/^book-/, '');
        const book = books.find((b) => b.id === bookId);
        const idx = activeStageByBook[bookId] || 0;
        if (book) {
          img.src = buildSceneFallbackDataURL(book, book.stages[idx], idx);
        }
      });
    });

    scrollyView.querySelectorAll('.story-step').forEach((step) => {
      step.addEventListener('click', () => {
        const book = books.find((b) => b.id === step.dataset.bookId);
        if (book) updateBookStageVisual(book, Number(step.dataset.stageIdx));
      });
    });

    scrollyView.querySelectorAll('[data-dot-book]').forEach((dot) => {
      dot.addEventListener('click', () => {
        const book = books.find((b) => b.id === dot.dataset.dotBook);
        const idx = Number(dot.dataset.dotIdx);
        if (book) {
          updateBookStageVisual(book, idx);
          const step = scrollyView.querySelector(`.story-step[data-book-id="${book.id}"][data-stage-idx="${idx}"]`);
          if (step) step.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    scrollyView.querySelectorAll('[data-open-slide]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const visible = getVisibleBooks();
        const idx = visible.findIndex((b) => b.id === btn.dataset.openSlide);
        if (idx >= 0) {
          slideBookIdx = idx;
          slideStageIdx = 0;
          setMode('slide');
        }
      });
    });

    scrollyView.querySelectorAll('[data-dl-png]').forEach((btn) => {
      btn.addEventListener('click', () => downloadBookQR(btn.dataset.dlPng, 'png'));
    });

    scrollyView.querySelectorAll('[data-copy-route]').forEach((btn) => {
      btn.addEventListener('click', () => copyBookRoute(btn.dataset.copyRoute, btn));
    });

    setupScrollObserver(visibleBooks);
  }

  function renderSlideView() {
    const visibleBooks = getVisibleBooks();
    if (slideBookIdx >= visibleBooks.length) slideBookIdx = 0;
    const book = visibleBooks[slideBookIdx];
    const stage = book.stages[slideStageIdx] || book.stages[0];

    const selector = document.getElementById('slideBookSelector');
    selector.innerHTML = visibleBooks
      .map(
        (b, idx) => `
      <button class="slide-book-btn ${idx === slideBookIdx ? 'is-active' : ''}" data-slide-book="${idx}" type="button">
        ${escapeHtml(b.title)}
      </button>
    `
      )
      .join('');

    selector.querySelectorAll('[data-slide-book]').forEach((btn) => {
      btn.addEventListener('click', () => {
        slideBookIdx = Number(btn.dataset.slideBook);
        slideStageIdx = 0;
        renderSlideView();
      });
    });

    const originalLink = document.getElementById('slideOriginalLink');
    originalLink.href = book.url || '#';

    const storySegments = document.getElementById('storySegments');
    if (storySegments) {
      storySegments.style.gridTemplateColumns = `repeat(${book.stages.length}, 1fr)`;
      storySegments.innerHTML = book.stages
        .map(
          (_, idx) =>
            `<div class="story-segment ${idx < slideStageIdx ? 'is-done' : ''} ${idx === slideStageIdx ? 'is-active' : ''}" data-seg-idx="${idx}" role="button" tabindex="0" aria-label="Chặng ${idx + 1}"><div class="story-segment__fill"></div></div>`
        )
        .join('');
      storySegments.querySelectorAll('[data-seg-idx]').forEach((seg) => {
        seg.addEventListener('click', () => {
          slideStageIdx = Number(seg.dataset.segIdx);
          renderSlideView();
        });
      });
    }

    const slideCard = document.getElementById('slideCard');
    const imgSrc = getStageImageSrc(book, stage, slideStageIdx);
    const routeUrl = getBookRouteUrl(book, settings);
    const qrSvg = window.QRCodeGenerator.toSVG(routeUrl, { size: 110 });

    slideCard.innerHTML = `
      <div class="slide-card__media">
        <button class="slide-tap-zone slide-tap-zone--prev" data-tap-prev type="button" aria-label="Chặng trước"></button>
        <button class="slide-tap-zone slide-tap-zone--next" data-tap-next type="button" aria-label="Chặng tiếp theo"></button>
        <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(stage.title)}" />
      </div>
      <div class="slide-card__body">
        <div>
          <div class="story-step__label">${escapeHtml(book.title)} · ${escapeHtml(stage.label)}</div>
          <h2 class="story-step__title" style="font-size:1.45rem;">${escapeHtml(stage.title)}</h2>
          <p class="story-step__text">${escapeHtml(stage.narrative)}</p>
          <blockquote class="story-step__quote">${escapeHtml(stage.quote)}</blockquote>
          <div class="story-step__takeaway">${TAKEAWAY_ICON_SVG}<span>${escapeHtml(stage.takeaway)}</span></div>
        </div>
        <div class="qr-mini-card" style="padding:10px 12px;">
          <div class="qr-mini-card__code" style="width:74px; height:74px;">${qrSvg}</div>
          <div class="qr-mini-card__info">
            <div class="qr-mini-card__title" style="font-size:0.84rem;">Quét để mở trang sách này</div>
            <div class="qr-mini-card__url" style="margin-bottom:0;">${escapeHtml(routeUrl)}</div>
          </div>
        </div>
      </div>
    `;

    const tapPrev = slideCard.querySelector('[data-tap-prev]');
    const tapNext = slideCard.querySelector('[data-tap-next]');
    if (tapPrev) tapPrev.addEventListener('click', prevSlide);
    if (tapNext) tapNext.addEventListener('click', nextSlide);

    const counter = document.getElementById('slideCounter');
    counter.textContent = `Chặng ${slideStageIdx + 1} / ${book.stages.length} · Vuốt ngang hoặc dùng phím ← →`;
  }

  function nextSlide() {
    const visibleBooks = getVisibleBooks();
    const book = visibleBooks[slideBookIdx];
    if (slideStageIdx < book.stages.length - 1) {
      slideStageIdx++;
    } else {
      slideBookIdx = (slideBookIdx + 1) % visibleBooks.length;
      slideStageIdx = 0;
    }
    renderSlideView();
  }

  function prevSlide() {
    const visibleBooks = getVisibleBooks();
    if (slideStageIdx > 0) {
      slideStageIdx--;
    } else {
      slideBookIdx = (slideBookIdx - 1 + visibleBooks.length) % visibleBooks.length;
      slideStageIdx = visibleBooks[slideBookIdx].stages.length - 1;
    }
    renderSlideView();
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
    const btn = document.getElementById('slideAutoPlayBtn');
    if (btn) btn.textContent = 'Tự động chuyển';
  }

  function toggleAutoPlay() {
    const btn = document.getElementById('slideAutoPlayBtn');
    if (autoPlayTimer) {
      stopAutoPlay();
      return;
    }
    autoPlayTimer = setInterval(nextSlide, 4500);
    if (btn) btn.textContent = 'Dừng tự chuyển';
  }

  let draftBatchBooks = [];

  function initDraftBatch() {
    draftBatchBooks = JSON.parse(JSON.stringify(books));
    while (draftBatchBooks.length < 5) {
      const num = draftBatchBooks.length + 1;
      draftBatchBooks.push({
        id: `sach-${num}`,
        title: '',
        author: '',
        url: '',
        themeColor: '#C85A32',
        message2011: 'Kính chúc thầy cô ngày 20/11 thật nhiều sức khỏe và niềm vui!',
        stages: splitSummaryIntoStages('', `Cuốn sách ${num}`, null)
      });
    }
  }

  function renderStudioView() {
    if (draftBatchBooks.length === 0) initDraftBatch();

    const baseUrlInput = document.getElementById('baseUrlInput');
    const qrTargetMode = document.getElementById('qrTargetMode');
    baseUrlInput.value = settings.baseUrl || defaultBaseUrl();
    qrTargetMode.value = settings.qrTargetMode || 'subpath';

    const batchRowsEl = document.getElementById('batchRows');
    batchRowsEl.innerHTML = draftBatchBooks
      .map((book, idx) => {
        const joinedSummary = (book.stages || []).map((s) => s.narrative).join('\n');
        const slug = book.id || slugify(book.title || `sach-${idx + 1}`);
        const routeHint = SUBPATH_SLUGS.has(slug) ? `/sach/${slug}/` : `?book=${slug}&solo=1`;
        return `
        <div class="batch-row" data-row-idx="${idx}">
          <div class="batch-row__head">
            <span>Đường link #${idx + 1} · Định tuyến trên 1 repo: <code>${escapeHtml(routeHint)}</code></span>
            ${draftBatchBooks.length > 1 ? `<button class="btn btn-secondary btn-sm" data-remove-row="${idx}" type="button">Xóa dòng</button>` : ''}
          </div>
          <div class="form-grid">
            <div class="field">
              <label>Tên cuốn sách</label>
              <input type="text" data-field="title" value="${escapeHtml(book.title)}" placeholder="Ví dụ: Bản sắc văn hóa Việt Nam" />
            </div>
            <div class="field">
              <label>Tác giả</label>
              <input type="text" data-field="author" value="${escapeHtml(book.author)}" placeholder="Tên tác giả" />
            </div>
            <div class="field">
              <label>Đường link trang sách gốc</label>
              <input type="url" data-field="url" value="${escapeHtml(book.url)}" placeholder="https://..." />
            </div>
          </div>
          <div class="field" style="margin-top:10px;">
            <label>Nội dung tóm tắt (mỗi dòng hoặc 3 câu sẽ tự động chia thành 3 chặng cuộn/vuốt)</label>
            <textarea rows="3" data-field="summary" placeholder="Nhập đoạn 1 (Mở đầu)...&#10;Đoạn 2 (Điểm nhấn)...&#10;Đoạn 3 (Thông điệp 20/11)...">${escapeHtml(joinedSummary)}</textarea>
          </div>
          <div class="form-grid" style="margin-top:10px;">
            ${[0, 1, 2]
              .map(
                (sIdx) => `
              <div class="field">
                <label>Ảnh minh họa Chặng ${sIdx + 1} (đã tạo sẵn hoặc tải ảnh mới)</label>
                <input type="file" accept="image/*" data-stage-file="${sIdx}" />
                <input type="text" data-stage-img="${sIdx}" value="${escapeHtml((book.stages[sIdx] && book.stages[sIdx].image) || '')}" placeholder="Đường dẫn ảnh chặng ${sIdx + 1}" />
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
      })
      .join('');

    batchRowsEl.querySelectorAll('.batch-row').forEach((rowEl) => {
      const idx = Number(rowEl.dataset.rowIdx);
      rowEl.querySelectorAll('[data-field]').forEach((input) => {
        input.addEventListener('input', () => {
          const f = input.dataset.field;
          if (f === 'summary') {
            draftBatchBooks[idx]._rawSummary = input.value;
          } else {
            draftBatchBooks[idx][f] = input.value;
            if (f === 'title' && input.value.trim() && !SUBPATH_SLUGS.has(draftBatchBooks[idx].id)) {
              draftBatchBooks[idx].id = slugify(input.value);
            }
          }
        });
      });

      rowEl.querySelectorAll('[data-stage-img]').forEach((input) => {
        input.addEventListener('input', () => {
          const sIdx = Number(input.dataset.stageImg);
          if (!draftBatchBooks[idx].stages[sIdx]) {
            draftBatchBooks[idx].stages[sIdx] = { label: `Chặng ${sIdx + 1}`, title: '', narrative: '', quote: '', takeaway: '' };
          }
          draftBatchBooks[idx].stages[sIdx].image = input.value.trim();
        });
      });

      rowEl.querySelectorAll('[data-stage-file]').forEach((fileInput) => {
        fileInput.addEventListener('change', () => {
          const file = fileInput.files && fileInput.files[0];
          if (!file) return;
          const sIdx = Number(fileInput.dataset.stageFile);
          const reader = new FileReader();
          reader.onload = () => {
            if (!draftBatchBooks[idx].stages[sIdx]) {
              draftBatchBooks[idx].stages[sIdx] = { label: `Chặng ${sIdx + 1}`, title: '', narrative: '', quote: '', takeaway: '' };
            }
            draftBatchBooks[idx].stages[sIdx].image = reader.result;
            const textInput = rowEl.querySelector(`[data-stage-img="${sIdx}"]`);
            if (textInput) textInput.value = '(Đã tải ảnh từ máy)';
          };
          reader.readAsDataURL(file);
        });
      });

      const removeBtn = rowEl.querySelector('[data-remove-row]');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          draftBatchBooks.splice(idx, 1);
          renderStudioView();
        });
      }
    });

    renderQrGallery();
  }

  function renderQrGallery() {
    const gallery = document.getElementById('qrGallery');
    gallery.innerHTML = books
      .map((book) => {
        const routeUrl = getBookRouteUrl(book, settings);
        const svg = window.QRCodeGenerator.toSVG(routeUrl, { size: 170 });
        const localSoloHref = getLocalSoloHref(book);
        return `
        <div class="qr-gallery-card">
          <div style="font-weight:700; font-family:var(--font-serif); font-size:1.05rem;">${escapeHtml(book.title)}</div>
          <div style="font-size:0.82rem; color:var(--ink-muted);">${escapeHtml(book.author)}</div>
          <div class="qr-gallery-card__svg">${svg}</div>
          <div class="qr-gallery-card__route">${escapeHtml(routeUrl)}</div>
          <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:6px;">
            <button class="btn btn-primary btn-sm" data-gallery-png="${escapeHtml(book.id)}" type="button">Tải PNG</button>
            <button class="btn btn-secondary btn-sm" data-gallery-svg="${escapeHtml(book.id)}" type="button">Tải SVG</button>
            <a class="btn btn-sage btn-sm" href="${escapeHtml(localSoloHref)}">Mở trang riêng</a>
          </div>
        </div>
      `;
      })
      .join('');

    gallery.querySelectorAll('[data-gallery-png]').forEach((btn) => {
      btn.addEventListener('click', () => downloadBookQR(btn.dataset.galleryPng, 'png'));
    });
    gallery.querySelectorAll('[data-gallery-svg]').forEach((btn) => {
      btn.addEventListener('click', () => downloadBookQR(btn.dataset.gallerySvg, 'svg'));
    });
  }

  function commitBatchBooks() {
    settings.baseUrl = document.getElementById('baseUrlInput').value.trim() || defaultBaseUrl();
    settings.qrTargetMode = document.getElementById('qrTargetMode').value;
    saveSettings(settings);

    const usedIds = new Set();
    const updated = draftBatchBooks
      .filter((b) => (b.title && b.title.trim()) || (b.url && b.url.trim()))
      .map((b, idx) => {
        const title = (b.title || `Cuốn sách ${idx + 1}`).trim();
        let id = slugify(b.id || title);
        while (usedIds.has(id)) id = `${id}-${idx + 1}`;
        usedIds.add(id);

        const rawSummary = b._rawSummary !== undefined ? b._rawSummary : (b.stages || []).map((s) => s.narrative).join('\n');
        const isUnchangedDefault =
          DEFAULT_BOOKS.some((d) => d.id === id) && b._rawSummary === undefined && b.stages && b.stages.length === 3;

        return {
          id,
          title,
          author: (b.author || 'Sưu tầm 20/11').trim(),
          url: (b.url || 'https://fr.scribd.com').trim(),
          themeColor: b.themeColor || '#C85A32',
          message2011: b.message2011 || 'Chúc mừng Ngày Nhà Giáo Việt Nam 20/11!',
          stages: isUnchangedDefault ? b.stages : splitSummaryIntoStages(rawSummary, title, b.stages)
        };
      });

    if (updated.length > 0) {
      books = updated;
      saveBooks(books);
      initDraftBatch();
      renderHero();
      renderQrGallery();
      alert(`Đã cập nhật ${books.length} cuốn sách và tạo bộ mã QR định tuyến riêng cho từng đường dẫn!`);
    }
  }

  function downloadBookQR(bookId, format) {
    const book = books.find((b) => b.id === bookId);
    if (!book) return;
    const routeUrl = getBookRouteUrl(book, settings);

    if (format === 'svg') {
      const svg = window.QRCodeGenerator.toSVG(routeUrl, { size: 500 });
      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      triggerDownload(URL.createObjectURL(blob), `qr-${book.id}.svg`);
    } else {
      const canvas = window.QRCodeGenerator.toCanvas(routeUrl, {
        size: 520,
        label: book.title
      });
      triggerDownload(canvas.toDataURL('image/png'), `qr-${book.id}.png`);
    }
  }

  function triggerDownload(href, filename) {
    const a = document.createElement('a');
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function copyBookRoute(bookId, btnEl) {
    const book = books.find((b) => b.id === bookId);
    if (!book) return;
    const url = getBookRouteUrl(book, settings);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        const orig = btnEl.textContent;
        btnEl.textContent = 'Đã chép!';
        setTimeout(() => (btnEl.textContent = orig), 1500);
      });
    }
  }

  function openPrintModal() {
    const modal = document.getElementById('printModal');
    const grid = document.getElementById('printCardsGrid');
    grid.innerHTML = books
      .map((book) => {
        const routeUrl = getBookRouteUrl(book, settings);
        const svg = window.QRCodeGenerator.toSVG(routeUrl, { size: 120 });
        const summary = book.stages.map((s) => s.title).join(' · ');
        return `
        <div class="print-bookmark">
          <div class="print-bookmark__top">
            <span>Tri Ân 20/11</span>
            <span>Văn Hóa Việt</span>
          </div>
          <h3 class="print-bookmark__title">${escapeHtml(book.title)}</h3>
          <div style="font-size:0.8rem; color:var(--ink-muted);">Tác giả: ${escapeHtml(book.author)}</div>
          <p class="print-bookmark__summary">${escapeHtml(summary)}</p>
          <div class="print-bookmark__qr">
            <div class="print-bookmark__qr-box">${svg}</div>
            <div style="font-size:0.78rem; color:var(--ink-secondary);">
              <strong>Quét mã QR</strong> để xem tóm tắt trực quan theo từng cảnh và mở tài liệu gốc.
            </div>
          </div>
        </div>
      `;
      })
      .join('');
    modal.classList.remove('hidden');
  }

  function closePrintModal() {
    document.getElementById('printModal').classList.add('hidden');
  }

  window.addEventListener(
    'scroll',
    () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
      readingProgressFill.style.width = `${pct}%`;
    },
    { passive: true }
  );

  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;
  const slideViewport = document.getElementById('slideViewport');
  slideViewport.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
      isSwiping = true;
      const card = document.getElementById('slideCard');
      if (card) card.classList.add('is-dragging');
    },
    { passive: true }
  );
  slideViewport.addEventListener(
    'touchmove',
    (e) => {
      if (!isSwiping) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        const card = document.getElementById('slideCard');
        if (card) {
          const clamped = Math.max(-140, Math.min(140, dx));
          card.style.transform = `translateX(${clamped}px) rotate(${(clamped * 0.015).toFixed(2)}deg)`;
          card.style.opacity = String(Math.max(0.65, 1 - Math.abs(clamped) / 420));
        }
      }
    },
    { passive: true }
  );
  slideViewport.addEventListener(
    'touchend',
    (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const card = document.getElementById('slideCard');
      if (card) {
        card.classList.remove('is-dragging');
        card.style.transform = '';
        card.style.opacity = '';
      }
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) nextSlide();
        else prevSlide();
      }
    },
    { passive: true }
  );

  document.addEventListener('keydown', (e) => {
    if (currentMode !== 'slide') return;
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  document.querySelectorAll('.mode-tab').forEach((btn) => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  });

  const jumpBtn = document.getElementById('jumpToStudioBtn');
  if (jumpBtn) jumpBtn.addEventListener('click', () => setMode('studio'));

  const printBtn = document.getElementById('openPrintModalBtn');
  if (printBtn) printBtn.addEventListener('click', openPrintModal);

  document.getElementById('studioPrintBtn').addEventListener('click', openPrintModal);
  document.getElementById('closePrintModalBtn').addEventListener('click', closePrintModal);
  document.getElementById('triggerBrowserPrintBtn').addEventListener('click', () => window.print());

  document.getElementById('slidePrevBtn').addEventListener('click', prevSlide);
  document.getElementById('slideNextBtn').addEventListener('click', nextSlide);
  document.getElementById('slideAutoPlayBtn').addEventListener('click', toggleAutoPlay);

  document.getElementById('addBatchRowBtn').addEventListener('click', () => {
    const idx = draftBatchBooks.length + 1;
    draftBatchBooks.push({
      id: `sach-${idx}`,
      title: '',
      author: '',
      url: '',
      themeColor: '#C85A32',
      message2011: 'Tri ân Ngày Nhà Giáo Việt Nam 20/11!',
      stages: splitSummaryIntoStages('', `Cuốn sách ${idx}`, null)
    });
    renderStudioView();
  });

  document.getElementById('saveBatchBooksBtn').addEventListener('click', commitBatchBooks);
  document.getElementById('resetDefaultBooksBtn').addEventListener('click', () => {
    books = JSON.parse(JSON.stringify(DEFAULT_BOOKS));
    saveBooks(books);
    initDraftBatch();
    renderHero();
    renderStudioView();
  });

  document.getElementById('exportJsonBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(books, null, 2)], { type: 'application/json;charset=utf-8' });
    triggerDownload(URL.createObjectURL(blob), 'books-config.json');
  });

  document.getElementById('baseUrlInput').addEventListener('change', () => {
    settings.baseUrl = document.getElementById('baseUrlInput').value.trim() || defaultBaseUrl();
    saveSettings(settings);
    renderQrGallery();
  });

  document.getElementById('qrTargetMode').addEventListener('change', () => {
    settings.qrTargetMode = document.getElementById('qrTargetMode').value;
    saveSettings(settings);
    renderQrGallery();
  });

  if (exitSoloBtn) {
    exitSoloBtn.addEventListener('click', () => {
      activeRoute = { bookId: null, solo: false };
      window.location.href = getRootPrefix();
    });
  }

  // Boot: on mobile QR scan, jump straight into trending Swipe Story view
  renderHero();
  if (activeRoute.solo && window.innerWidth <= 768) {
    setMode('slide');
  } else {
    renderScrollyView();
  }
})();
