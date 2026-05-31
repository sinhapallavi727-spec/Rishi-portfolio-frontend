export default function Footer() {
  const links = [
    {
      label: "WhatsApp",
      icon: "💬",
      href: "https://wa.me/918544357887",
      glow: "37,211,102",   /* WhatsApp green */
    },
    {
      label: "Email",
      icon: "✉",
      href: "mailto:rishisinha727@gmail.com",
      glow: "255,106,77",   /* coral */
    },
    {
      label: "LinkedIn",
      icon: "in",
      href: "https://www.linkedin.com/in/rishi-kr-sinha",
      glow: "154,139,255",  /* violet */
    },
  ];

  return (
    <footer style={{ padding: "0 0 clamp(40px,6vw,80px)" }}>
      <div className="wrap">
        {/* Contact link strip */}
        <div className="footer-contact-grid">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-card"
              style={{ "--glow": l.glow } as React.CSSProperties}
            >
              <span className="footer-link-icon">{l.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div className="footer-link-label">{l.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", borderTop: "1px solid var(--hairline)", paddingTop: "30px" }}>
          <div className="brand">
            <span className="brand-mark"></span>
            Rishi Sinha — Head of Marketing · AI Strategist
          </div>
          <p className="mono" style={{ fontSize: ".66rem" }}>© 2026 · Built with purpose</p>
        </div>
      </div>
    </footer>
  );
}
