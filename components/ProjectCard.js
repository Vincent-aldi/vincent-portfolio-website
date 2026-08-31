"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Figma, ExternalLink } from "lucide-react";
import { categoryMeta } from "../data/projects";

function getPrimaryLink(project) {
  const links = project.links || {};
  if (links.github) return { href: links.github, kind: "github", label: "Lihat di GitHub", Icon: Github };
  if (links.figma) return { href: links.figma, kind: "figma", label: "Lihat di Figma", Icon: Figma };
  if (links.live) return { href: links.live, kind: "live", label: "Kunjungi Situs", Icon: ExternalLink };
  if (links.colab) return { href: links.colab, kind: "colab", label: "Buka di Colab", Icon: ExternalLink };
  return null;
}

function getGithubOgImage(githubUrl) {
  try {
    const { pathname } = new URL(githubUrl);
    const repoPath = pathname.replace(/^\/+|\/+$/g, "");
    if (!repoPath) return null;
    return `https://opengraph.githubassets.com/1/${repoPath}`;
  } catch {
    return null;
  }
}

export default function ProjectCard({ project }) {
  const [broken, setBroken] = useState({});
  const meta = categoryMeta[project.category];
  const primary = getPrimaryLink(project);
  const ogImage = project.links?.github ? getGithubOgImage(project.links.github) : null;

  const candidates = [project.image, ogImage].filter(Boolean);
  const src = candidates.find((c) => !broken[c]);

  const thumb = (
    <div className="project-thumb">
      <span className="project-thumb-tag" style={{ color: meta.color }}>
        {meta.label}
      </span>
      {src ? (
        <img
          src={src}
          alt={`Gambar proyek ${project.title}`}
          className="project-thumb-img"
          loading="lazy"
          onError={() => setBroken((b) => ({ ...b, [src]: true }))}
        />
      ) : (
        <span style={{ fontSize: 12, fontFamily: "var(--font-mono)" }}>
          gambar proyek
        </span>
      )}
    </div>
  );

  const body = (
    <div className="project-body">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tools">
        {project.tools.slice(0, 4).map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
      <span className="project-link">
        {primary ? (
          <>
            <primary.Icon size={14} /> {primary.label}
          </>
        ) : (
          <>
            Lihat detail <ArrowUpRight size={14} />
          </>
        )}
      </span>
    </div>
  );

  if (primary) {
    return (
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        {thumb}
        {body}
      </a>
    );
  }

  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      {thumb}
      {body}
    </Link>
  );
}
