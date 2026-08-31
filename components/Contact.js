import { Mail, Github, Linkedin, Figma, Instagram } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "v.aldinugraha13@gmail.com",
    href: "mailto:v.aldinugraha13@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "www.instagram.com/vincent_vick1",
    href: "https://www.instagram.com/vincent_vick1/",
    external: true,
  },
  {
    icon: Github,
    label: "github.com/Vincent-aldi",
    href: "https://github.com/Vincent-aldi",
    external: true,
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/vincentius-aldi-nugraha",
    href: "https://linkedin.com/in/vincentius-aldi-nugraha",
    external: true,
  },
  {
    icon: Figma,
    label: "figma.com/@vincentnug",
    href: "https://figma.com/@vincentnug",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">My Contacts</span>
          <h2 className="section-title" style={{ marginTop: 10 }}>
            Punya ide, proyek, atau peluang yang menarik?
          </h2>
          <p className="about-text" style={{ marginTop: 16 }}>
            Saya senang berdiskusi tentang data, desain, dan pengembangan web.
            Saat ini saya terbuka untuk kesempatan magang, pekerjaan
            entry-level, maupun kolaborasi yang memungkinkan saya untuk terus
            belajar dan memberikan kontribusi.
          </p>

          <div className="contact-links" style={{ marginTop: 28 }}>
            {LINKS.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="availability-card">
          <span className="eyebrow">Status</span>
          <h3 style={{ fontSize: 22, marginTop: 12 }}>Open to Opportunities</h3>
          <p className="about-text" style={{ marginTop: 12 }}>
            Mencari kesempatan di bidang Data Analyst, UI/UX Designer, dan
            Frontend Developer. Terbuka untuk posisi magang maupun entry-level,
            baik remote maupun on-site.
          </p>
        </div>
      </div>
    </section>
  );
}
