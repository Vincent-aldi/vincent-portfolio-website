import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Figma } from "lucide-react";
import { projects, categoryMeta } from "../../../data/projects";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vincentius`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const meta = categoryMeta[project.category];
  const links = project.links || {};

  return (
    <>
      <Navbar />
      <main className="wrap case-hero" style={{ paddingBottom: 96 }}>
        <Link href="/#projects" className="case-back">
          <ArrowLeft size={16} /> Kembali ke proyek
        </Link>

        <span className="eyebrow" style={{ marginTop: 28, color: meta.color }}>
          {meta.label}
        </span>
        <h1 className="section-title" style={{ marginTop: 10, maxWidth: "24ch" }}>
          {project.title}
        </h1>
        <p className="about-text" style={{ maxWidth: "60ch" }}>
          {project.description}
        </p>

        <div className="case-meta">
          <span>Tools: {project.tools?.join(", ")}</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {links.github && (
            <a href={links.github} className="btn btn-ghost">
              <Github size={16} /> GitHub
            </a>
          )}
          {links.figma && (
            <a href={links.figma} className="btn btn-ghost">
              <Figma size={16} /> Figma
            </a>
          )}
          {links.live && (
            <a href={links.live} className="btn btn-ghost">
              <ExternalLink size={16} /> Live Site
            </a>
          )}
          {links.colab && (
            <a href={links.colab} className="btn btn-ghost">
              <ExternalLink size={16} /> Google Colab
            </a>
          )}
        </div>

        <div className="project-thumb" style={{ marginTop: 40, aspectRatio: "16/8" }}>
          <span style={{ fontSize: 13, fontFamily: "var(--font-mono)" }}>
            gambar / screenshot proyek
          </span>
        </div>

        {project.overview && (
          <div className="case-section">
            <h3>Ringkasan</h3>
            <p>{project.overview}</p>
          </div>
        )}

        {project.problem && (
          <div className="case-section">
            <h3>Masalah</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {project.objective && (
          <div className="case-section">
            <h3>Tujuan</h3>
            <p>{project.objective}</p>
          </div>
        )}

        {project.dataset && (
          <div className="case-section">
            <h3>Dataset</h3>
            <p>{project.dataset}</p>
          </div>
        )}

        {project.process?.length > 0 && (
          <div className="case-section">
            <h3>Proses</h3>
            <div className="case-process">
              {project.process.map((step, i) => (
                <span className="case-process-step" key={step}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.findings?.length > 0 && (
          <div className="case-section">
            <h3>Temuan Kunci</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {project.findings.map((f) => (
                <li key={f} style={{ color: "var(--text-dim)" }}>
                  — {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.recommendations?.length > 0 && (
          <div className="case-section">
            <h3>Rekomendasi</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              {project.recommendations.map((r) => (
                <li key={r} style={{ color: "var(--text-dim)" }}>
                  — {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.lessons && (
          <div className="case-section">
            <h3>Pelajaran</h3>
            <p>{project.lessons}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
