export const projects = [
  {
    slug: "sales-performance-analysis",
    category: "data",
    title: "Sales Performance & Business Trend Analysis",
    description:
      "Analisis data transaksi historis untuk memahami performa penjualan, tren bisnis, profitabilitas, dan KPI utama.",
    tools: ["Python", "Pandas", "Matplotlib", "Google Colab"],
    image: "",
    links: {
      github:
        "https://github.com/Vincent-aldi/sales-performance-business-analysis",
      colab: "",
    },
    overview:
      "Sales Performance & Business Trend Analysis merupakan proyek analisis data untuk mengevaluasi performa penjualan, profitabilitas, dan tren bisnis berdasarkan data transaksi historis periode Maret 2020–Maret 2025. Analisis dilakukan menggunakan Python mulai dari data cleaning, exploratory data analysis (EDA), sales analysis, customer analysis, hingga penyusunan rekomendasi bisnis berbasis data. Hasil analisis divisualisasikan dalam bentuk grafik dan dashboard.",
    problem:
      "Perusahaan memiliki data transaksi yang besar namun belum dimanfaatkan secara optimal untuk mendukung pengambilan keputusan bisnis.",
    objective:
      "Menganalisis performa penjualan perusahaan, Mengidentifikasi tren penjualan, dan Memberikan rekomendasi strategi bisnis.",
    dataset:
      "Untuk dataset yang digunakan dalam project ini adalah dataset superstore_sales.csv, yang berisi data transaksi historis periode Maret 2020–Maret 2025 ",
    process: [
      "Data Collection",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "KPI Analysis",
      "Data Visualization",
      "Business Insights",
      "Recommendations",
    ],
    findings: [
      "Revenue menunjukkan tren pertumbuhan #1",
      "Sebagian kecil produk memberikan kontribusi revenue terbesar #2",
      "Margin profit berbeda pada setiap kategori #3",
      "Terdapat wilayah dengan potensi pertumbuhan tinggi #4",
      "Segmentasi pelanggan membantu menentukan strategi pemasaran #5",
    ],
    recommendations: [
      "Fokus pada produk dengan profit tinggi #1",
      "Evaluasi harga produk bermargin rendah #2",
      "Tingkatkan pemasaran pada wilayah potensial #3",
      "Membangun program loyalitas pelanggan #4",
      "Optimalkan strategi berdasarkan tren musiman #5",
    ],
    lessons:
      "Mempelajari pengolahan data transaksi, exploratory data analysis, analisis KPI, dan identifikasi tren penjualan untuk menghasilkan insight yang mendukung pengambilan keputusan bisnis suatu perusahaan.",
  },
  {
    slug: "youtube-phone-price-analysis",
    category: "data",
    title: "YouTube Phone Price Analysis",
    description:
      "Analisis komentar YouTube terkait smartphone untuk memahami sentimen pengguna dan mengidentifikasi insight yang berkaitan dengan harga serta preferensi konsumen.",
    tools: [
      "Python",
      "YouTube Data API",
      "Text Preprocessing",
      "Lexicon-based Sentiment Analysis",
    ],
    image: "",
    links: {
      github: "https://github.com/Vincent-aldi/youtube-phone-price-analysis",
      colab: "",
    },
    overview:
      "Studi kasus analisis data komentar YouTube dari video review dan unboxing smartphone untuk memahami respons pengguna terhadap produk dan harga.",
    problem:
      "Komentar pengguna pada video review smartphone mengandung berbagai opini mengenai harga, spesifikasi, dan pengalaman terhadap produk. Analisis dilakukan untuk mengidentifikasi pola sentimen dan respons konsumen dari data teks tersebut.",
    objective:
      "Mengumpulkan dan menganalisis komentar YouTube untuk mengidentifikasi sentimen pengguna serta memperoleh insight mengenai persepsi konsumen terhadap smartphone dan harganya.",
    dataset:
      "Data dikumpulkan menggunakan YouTube Data API v3 dari komentar pada video review dan unboxing smartphone. Data kemudian dibersihkan dan diproses untuk menghilangkan elemen yang tidak relevan sebelum dilakukan analisis sentimen.",
    process: [
      "Data Collection (YouTube API)",
      "Text Preprocessing",
      "Sentiment Analysis",
      "Data Analysis",
      "Business Interpretation",
    ],
    findings: [
      "Komentar YouTube dapat digunakan sebagai sumber data untuk memahami respons dan opini konsumen terhadap produk smartphone.",
      "Analisis sentimen membantu mengelompokkan komentar berdasarkan respons positif, negatif, dan netral.",
      "Pembahasan mengenai harga menjadi salah satu aspek yang dapat diamati dalam respons pengguna terhadap smartphone.",
    ],
    recommendations: [
      "Menggabungkan data komentar dengan data harga dan spesifikasi smartphone untuk menghasilkan analisis yang lebih komprehensif.",
      "Menggunakan dataset yang lebih besar dan beragam untuk meningkatkan representasi opini konsumen.",
      "Mengembangkan analisis berdasarkan topik atau aspek tertentu seperti harga, kamera, performa, dan baterai.",
    ],
    lessons:
      "Mempelajari proses pengumpulan data menggunakan API, pembersihan dan text preprocessing, sentiment analysis berbasis lexicon, serta bagaimana mengubah data teks menjadi insight yang dapat digunakan untuk memahami respons konsumen.",
  },

  {
    slug: "heart-disease-risk-prediction",
    category: "data",
    title: "Heart Disease Risk Prediction",
    description:
      "Proyek machine learning menggunakan Logistic Regression untuk menganalisis faktor yang berkaitan dengan risiko penyakit jantung.",
    tools: ["Python", "Pandas", "Scikit-learn", "Google Colab"],
    image: "",
    links: {
      github: "https://github.com/Vincent-aldi/heart-disease-risk-prediction",
      colab: "",
    },
    overview:
      "Studi kasus machine learning untuk mempelajari hubungan antara beberapa faktor kesehatan dengan kemungkinan terjadinya penyakit jantung menggunakan Logistic Regression.",
    problem:
      "Data kesehatan memiliki berbagai faktor yang dapat digunakan untuk mempelajari pola yang berkaitan dengan penyakit jantung. Proyek ini mengeksplorasi bagaimana faktor-faktor tersebut dapat digunakan sebagai input dalam model klasifikasi.",
    objective:
      "Membangun model Logistic Regression untuk memprediksi klasifikasi risiko berdasarkan fitur yang tersedia serta mengevaluasi performa model menggunakan metrik klasifikasi.",
    dataset:
      "Dataset berisi sejumlah variabel kesehatan yang berkaitan dengan kondisi dan faktor risiko penyakit jantung. Data digunakan untuk melakukan exploratory analysis, preprocessing, pemilihan fitur, dan pemodelan klasifikasi.",
    process: [
      "Data Preprocessing",
      "Exploratory Analysis",
      "Feature Analysis",
      "Logistic Regression",
      "Model Evaluation",
    ],
    findings: [
      "Beberapa fitur kesehatan menunjukkan hubungan dengan klasifikasi penyakit jantung dalam dataset.",
      "Logistic Regression dapat digunakan sebagai baseline model untuk permasalahan klasifikasi biner.",
      "Evaluasi model menggunakan metrik klasifikasi membantu memahami kemampuan model dalam membedakan setiap kelas.",
    ],
    recommendations: [
      "Menguji model dengan algoritma machine learning lain untuk membandingkan performa.",
      "Melakukan feature selection dan hyperparameter tuning untuk mengoptimalkan model.",
      "Menggunakan dataset yang lebih beragam dan melakukan validasi lebih lanjut sebelum menarik kesimpulan yang lebih luas.",
    ],
    lessons:
      "Mempelajari proses data preprocessing, exploratory data analysis, feature analysis, penerapan Logistic Regression, serta evaluasi model menggunakan metrik klasifikasi.",
  },

  {
    slug: "logshop-marketplace",
    category: "uiux",
    title: "LOGSHOP — Marketplace UI/UX Design",
    description:
      "Desain antarmuka marketplace di Figma dengan fokus pada navigasi yang jelas dan pengalaman e-commerce modern.",
    tools: ["Figma"],
    image: "/images/uiux/logshop.jpg",
    links: {
      figma: "https://www.figma.com/community/file/1675896508169218686",
    },
    overview:
      "Studi kasus desain end-to-end untuk platform marketplace dengan fokus pada pengalaman pengguna saat menjelajahi, mencari, dan membeli produk.",
    problem:
      "Pengguna membutuhkan pengalaman berbelanja yang sederhana dan terstruktur agar dapat menemukan produk, melihat informasi produk, dan melakukan pembelian dengan mudah.",
    objective:
      "Merancang antarmuka marketplace yang intuitif dengan navigasi yang jelas, informasi produk yang mudah dipahami, serta alur pembelian yang sederhana.",
    dataset:
      "Tidak berlaku — proses desain didasarkan pada analisis kebutuhan pengguna, referensi desain marketplace, dan penerapan prinsip dasar UI/UX.",
    process: ["User Flow", "Wireframing", "UI Design", "Prototyping"],
    findings: [
      "Navigasi yang sederhana membantu pengguna menemukan produk dengan lebih mudah.",
      "Informasi produk perlu disusun secara jelas agar pengguna dapat memahami produk sebelum melakukan pembelian.",
      "Konsistensi komponen UI membantu menciptakan pengalaman pengguna yang lebih terstruktur.",
    ],
    recommendations: [
      "Melakukan usability testing dengan pengguna secara langsung.",
      "Mengembangkan fitur filter dan pencarian produk yang lebih lengkap.",
      "Mengoptimalkan desain untuk berbagai ukuran perangkat.",
    ],
    lessons:
      "Mempelajari bagaimana menyusun user flow, membuat wireframe, mengembangkan visual interface, serta menjaga konsistensi desain dalam sebuah proyek marketplace.",
  },

  {
    slug: "magasa-design",
    category: "uiux",
    title: "MAGASA — Desain UI/UX Website Magang Mahasiswa",
    description:
      "Desain UI/UX website yang membantu mahasiswa menemukan dan memperoleh informasi mengenai kesempatan magang secara lebih mudah.",
    tools: ["Figma"],
    image: "/images/uiux/magasa.jpg",
    links: {
      figma: "https://www.figma.com/community/file/1675898059733131906",
    },
    overview:
      "Studi kasus desain website platform magang mahasiswa yang berfokus pada kemudahan menemukan informasi dan kesempatan magang.",
    problem:
      "Mahasiswa membutuhkan platform yang dapat menyajikan informasi kesempatan magang secara terstruktur sehingga proses mencari dan memahami lowongan menjadi lebih mudah.",
    objective:
      "Merancang website dengan navigasi yang intuitif dan tampilan informasi magang yang jelas agar mahasiswa dapat menemukan peluang magang secara lebih efisien.",
    dataset:
      "Tidak berlaku — desain dibuat berdasarkan identifikasi kebutuhan pengguna dan referensi dari beberapa platform pencarian kerja atau magang.",
    process: ["User Flow", "Wireframing", "UI Design", "Prototyping"],
    findings: [
      "Informasi lowongan perlu ditampilkan secara ringkas dan terstruktur.",
      "Navigasi yang jelas membantu pengguna berpindah antarhalaman dengan lebih mudah.",
      "Visual hierarchy penting untuk membantu pengguna menemukan informasi utama dengan cepat.",
    ],
    recommendations: [
      "Melakukan usability testing kepada mahasiswa sebagai target pengguna.",
      "Menambahkan fitur pencarian dan filter berdasarkan bidang, lokasi, dan jenis magang.",
      "Mengembangkan responsive design untuk perangkat mobile.",
    ],
    lessons:
      "Mempelajari proses perancangan UI/UX dari identifikasi kebutuhan pengguna hingga pembuatan prototype serta memahami pentingnya struktur informasi dan visual hierarchy.",
  },

  {
    slug: "uiux-competition",
    category: "uiux",
    title: "UI/UX Competition",
    description:
      "Karya desain UI/UX yang dibuat sebagai bagian dari kompetisi, menunjukkan kemampuan mengembangkan konsep dan mengomunikasikan ide desain.",
    tools: ["Figma"],
    image: "/images/uiux/competition.jpg",
    links: {
      figma: "https://www.figma.com/community/file/1675889348922281571",
    },
    overview:
      "Proyek desain UI/UX yang dikembangkan untuk kompetisi dengan fokus pada penyelesaian masalah melalui konsep dan solusi desain digital.",
    problem:
      "Pengguna membutuhkan solusi digital yang dapat menyajikan informasi dan fitur utama secara sederhana, jelas, dan mudah digunakan.",
    objective:
      "Mengembangkan konsep UI/UX yang mampu menjawab kebutuhan pengguna melalui alur yang intuitif dan tampilan antarmuka yang menarik.",
    dataset:
      "Tidak berlaku — proses desain didasarkan pada brief kompetisi, analisis kebutuhan pengguna, serta referensi dan praktik desain UI/UX.",
    process: [
      "Problem Identification",
      "User Flow",
      "Wireframing",
      "UI Design",
      "Prototyping",
    ],
    findings: [
      "Struktur informasi yang jelas membantu pengguna memahami fungsi utama aplikasi.",
      "Pemilihan layout dan komponen UI yang konsisten meningkatkan usability.",
      "Konsep desain perlu mempertimbangkan kebutuhan pengguna sekaligus tujuan dari produk.",
    ],
    recommendations: [
      "Melakukan usability testing untuk memperoleh feedback dari target pengguna.",
      "Mengembangkan prototype dengan interaksi yang lebih lengkap.",
      "Melakukan iterasi desain berdasarkan hasil pengujian pengguna.",
    ],
    lessons:
      "Mempelajari cara mengembangkan solusi desain dalam batasan waktu kompetisi, menyusun konsep berdasarkan masalah pengguna, serta mengomunikasikan ide melalui prototype UI/UX.",
  },
  {
    slug: "magasa",
    category: "frontend",
    title: "MAGASA — Website Magang Mahasiswa",
    description:
      "Website informasi magang mahasiswa yang dirancang untuk membantu pengguna menemukan informasi dan mendukung aktivitas magang.",
    tools: ["HTML", "CSS", "JavaScript", "Next.js"],
    image: "",
    links: {
      github: "https://github.com/Vincent-aldi/Magasa",
      live: "https://magasa.vercel.app/",
    },
    overview:
      "Proyek pengembangan website informasi magang mahasiswa dengan fokus pada penyajian informasi yang terstruktur, navigasi yang mudah digunakan, dan tampilan yang responsif.",
    problem:
      "Mahasiswa membutuhkan akses informasi magang yang lebih terstruktur agar dapat memperoleh informasi mengenai kegiatan dan kebutuhan magang dengan lebih mudah.",
    objective:
      "Mengembangkan website yang dapat menyajikan informasi magang secara jelas dengan navigasi yang sederhana, tampilan responsif, dan pengalaman pengguna yang nyaman.",
    process: [
      "Perencanaan",
      "Component-based Development",
      "Responsive Interface",
      "Testing",
    ],
    findings: [
      "Penggunaan komponen yang terstruktur membantu proses pengembangan menjadi lebih terorganisir.",
      "Responsive design penting agar website dapat digunakan dengan baik pada berbagai ukuran perangkat.",
      "Testing membantu menemukan masalah pada fungsi dan tampilan website sebelum digunakan.",
    ],
    recommendations: [
      "Menambahkan fitur pencarian dan filter informasi magang.",
      "Mengembangkan sistem autentikasi untuk mahasiswa dan pihak penyedia magang.",
      "Meningkatkan pengujian dengan melibatkan pengguna secara langsung.",
    ],
    lessons:
      "Mempelajari proses pengembangan website menggunakan Next.js, penerapan component-based development, pembuatan responsive interface, serta pentingnya testing untuk memastikan fungsionalitas website berjalan dengan baik.",
  },

  {
    slug: "logshop",
    category: "frontend",
    title: "LOGSHOP — Marketplace Website",
    description:
      "Website marketplace yang dikembangkan dengan fokus pada tampilan produk, navigasi, dan pengalaman berbelanja yang sederhana.",
    tools: ["HTML", "CSS", "JavaScript", "Next.js"],
    image: "",
    links: {
      github: "https://github.com/Vincent-aldi/LOGSHOP",
      live: "https://logshop.vercel.app/",
    },
    overview:
      "Proyek pengembangan website marketplace berdasarkan rancangan UI/UX LOGSHOP dengan fokus pada implementasi antarmuka dan pengalaman pengguna dalam menjelajahi produk.",
    problem:
      "Pengguna membutuhkan website marketplace dengan struktur halaman dan navigasi yang jelas agar dapat menemukan serta melihat produk dengan mudah.",
    objective:
      "Mengimplementasikan desain UI/UX LOGSHOP menjadi website yang responsif dengan struktur komponen yang terorganisir dan navigasi yang mudah digunakan.",
    process: [
      "Perencanaan",
      "UI Implementation",
      "Component-based Development",
      "Responsive Interface",
      "Testing",
    ],
    findings: [
      "Pemecahan interface menjadi beberapa komponen membuat kode lebih mudah dikelola.",
      "Struktur navigasi yang jelas membantu pengguna berpindah antarbagian website.",
      "Responsive layout diperlukan agar tampilan marketplace tetap nyaman digunakan pada berbagai perangkat.",
    ],
    recommendations: [
      "Menambahkan fitur keranjang dan proses checkout.",
      "Mengembangkan fitur pencarian, filter, dan sorting produk.",
      "Menambahkan integrasi backend untuk mengelola data produk dan transaksi.",
    ],
    lessons:
      "Mempelajari proses mengubah rancangan UI/UX menjadi website yang dapat digunakan, membangun komponen yang reusable menggunakan Next.js, serta menerapkan responsive design pada website marketplace.",
  },

  {
    slug: "sistem-akademik",
    category: "frontend",
    title: "Sistem Akademik",
    description:
      "Proyek sistem akademik berbasis web yang berfokus pada fungsionalitas dan perbaikan antarmuka.",
    tools: ["HTML", "CSS", "JavaScript", "Next.js"],
    image: "",
    links: {
      github: "https://github.com/Vincent-aldi/Sistem-Akademik",
      live: "",
    },
    overview:
      "Proyek pengembangan dan refactoring sistem akademik berbasis web dengan fokus pada struktur kode, fungsionalitas sistem, dan perbaikan antarmuka.",
    problem:
      "Sistem akademik membutuhkan struktur aplikasi yang lebih terorganisir serta antarmuka yang dapat membantu pengguna mengakses informasi akademik dengan lebih mudah.",
    objective:
      "Mengembangkan dan memperbaiki sistem akademik dengan menerapkan struktur kode yang lebih terorganisir serta meningkatkan usability dan tampilan antarmuka.",
    process: [
      "Analisis Sistem",
      "Refactoring",
      "Component-based Development",
      "UI Improvement",
      "Testing",
    ],
    findings: [
      "Struktur kode yang lebih terorganisir mempermudah proses pengembangan dan pemeliharaan aplikasi.",
      "Pemisahan komponen membantu mengurangi duplikasi kode.",
      "Testing diperlukan untuk memastikan perubahan pada sistem tidak mengganggu fungsi yang sudah berjalan.",
    ],
    recommendations: [
      "Mengembangkan sistem autentikasi dan role management.",
      "Menambahkan backend dan database untuk pengelolaan data akademik secara real-time.",
      "Meningkatkan responsive design untuk penggunaan pada perangkat mobile.",
    ],
    lessons:
      "Mempelajari proses refactoring aplikasi web, penerapan konsep component-based development, serta pentingnya menjaga struktur kode dan melakukan testing selama proses pengembangan.",
  },
];

export const categories = [
  { key: "all", label: "Semua" },
  { key: "data", label: "Data Analyst" },
  { key: "uiux", label: "UI/UX" },
  { key: "frontend", label: "Frontend" },
];

export const categoryMeta = {
  data: { label: "Data Analytics", color: "var(--c-data)" },
  uiux: { label: "UI/UX Design", color: "var(--c-uiux)" },
  frontend: { label: "Frontend Dev", color: "var(--c-frontend)" },
};

export const skills = {
  data: [
    { name: "Python", level: 85 },
    { name: "Microsoft Excel", level: 70 },
    { name: "Pandas", level: 85 },
    { name: "Matplotlib", level: 80 },
    { name: "Data Cleaning & EDA", level: 85 },
    { name: "Sentiment Analysis", level: 75 },
  ],
  uiux: [
    { name: "Figma", level: 85 },
    { name: "Wireframing", level: 85 },
    { name: "UI Design", level: 80 },
    { name: "Prototyping", level: 80 },
    { name: "User Flow", level: 80 },
  ],
  frontend: [
    { name: "JavaScript", level: 85 },
    { name: "Next.js / React", level: 80 },
    { name: "HTML & CSS", level: 90 },
    { name: "Git & GitHub", level: 80 },
    { name: "Responsive Design", level: 85 },
  ],
};
