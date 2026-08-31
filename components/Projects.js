"use client";

import { useState } from "react";
import { projects, categories } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">My Projects</span>
          <h2 className="section-title">Beberapa hasil kerja saya</h2>
        </div>

        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className="filter-chip"
              data-active={filter === cat.key}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
