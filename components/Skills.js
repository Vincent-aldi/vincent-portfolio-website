"use client";

import { useState } from "react";
import { skills, categoryMeta } from "../data/projects";

const TABS = ["data", "uiux", "frontend"];

export default function Skills() {
  const [active, setActive] = useState("data");

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Teknologi yang saya kuasai</h2>
        </div>

        <div className="skills-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className="skills-tab"
              data-active={active === tab}
              onClick={() => setActive(tab)}
            >
              {categoryMeta[tab].label}
            </button>
          ))}
        </div>

        <div className="skills-list">
          {skills[active].map((skill) => (
            <div key={skill.name}>
              <div className="skill-row-top">
                <span>{skill.name}</span>
                <span style={{ color: "var(--text-dim)" }}>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{
                    "--fill": `${skill.level}%`,
                    "--bar-color": categoryMeta[active].color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
