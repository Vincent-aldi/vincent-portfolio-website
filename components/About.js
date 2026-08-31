const STATS = [
  { value: "3", label: "Bidang keahlian" },
  { value: "8+", label: "Proyek dikerjakan" },
  { value: "D3", label: "Latar pendidikan" },
  { value: "Hands-on", label: "Berbasis proyek" },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">About Me</span>
          <h2 className="section-title" style={{ marginTop: 10 }}>
            Menggabungkan data, desain, dan teknologi untuk membangun solusi
            digital.
          </h2>
          <p className="about-text">
            Saya adalah mahasiswa D3 Teknik Informatika yang mengembangkan
            kemampuan melalui berbagai proyek nyata di bidang Data Analytics,
            UI/UX Design, dan Frontend Development. Mulai dari mengolah dan
            menganalisis data, merancang alur serta antarmuka di Figma, hingga
            mengimplementasikan desain menjadi website yang responsif.
          </p>
          <p className="about-text">
            Bagi saya, setiap proyek adalah kesempatan untuk memahami masalah,
            menemukan solusi, dan mengubahnya menjadi sesuatu yang dapat
            digunakan. Saya senang memadukan analisis, kreativitas, dan
            teknologi dalam proses pengembangan produk digital.
          </p>
          <a
            href="#projects"
            className="btn btn-ghost"
            style={{ marginTop: 24 }}
          >
            Lihat Proyek Saya
          </a>
        </div>

        <div className="stat-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
