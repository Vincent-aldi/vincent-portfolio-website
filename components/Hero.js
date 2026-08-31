import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import profilePhoto from "../public/images/profile/vincentius.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <span className="hero-badge">Portofolio Personal</span>

        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Halo, saya <span className="grad">Vincentius Aldi Nugraha</span>.
              <br />
              Mengolah data, Merancang Design, Membangun Website.
            </h1>

            <p className="hero-sub">
              Mahasiswa Teknik Informatika dengan minat pada Data Analytics,
              UI/UX Design, dan Frontend Development. Memiliki pengalaman
              mengerjakan proyek analisis data, perancangan antarmuka, dan
              pengembangan website.
            </p>

            <div className="hero-roles">
              <span className="role-chip frontend">Frontend Development</span>
              <span className="role-chip uiux">UI/UX Design</span>
              <span className="role-chip data">Data Analyst</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Lihat Proyek <ArrowUpRight size={16} />
              </a>
              <a
                href="/cv/Vincentius-CV.pdf"
                className="btn btn-ghost"
                download
              >
                Unduh CV <Download size={16} />
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <span className="hero-blob" aria-hidden="true" />
            <span className="hero-dots" aria-hidden="true" />

            <div className="hero-photo">
              <Image
                src={profilePhoto}
                alt="Foto Vincentius Aldi Nugraha"
                placeholder="blur"
                sizes="(max-width: 900px) 80vw, 420px"
                priority
              />
            </div>

            <div className="hero-code-card">
              <div className="hero-code-card-head">
                <span className="hero-code-dot" />
                <span>kode.js</span>
              </div>
              <pre>
                <code>
                  <span className="tok-kw">const</span> mhs = {"{"}
                  {"\n  "}
                  <span className="tok-key">nama</span>:{" "}
                  <span className="tok-str">&quot;Vincent&quot;</span>,
                  {"\n  "}
                  <span className="tok-key">minat</span>: [
                  <span className="tok-str">&quot;Data&quot;</span>,{" "}
                  <span className="tok-str">&quot;UI/UX&quot;</span>,{" "}
                  <span className="tok-str">&quot;Frontend&quot;</span>]{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
