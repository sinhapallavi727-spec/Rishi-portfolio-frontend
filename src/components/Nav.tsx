export default function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <svg className="brand-mark" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="bm-g" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#C9F24D"/>
              <stop offset="48%"  stopColor="#FF6A4D"/>
              <stop offset="100%" stopColor="#9A8BFF"/>
            </linearGradient>
          </defs>
          <rect width="36" height="36" rx="10" fill="url(#bm-g)"/>
          <text x="18" y="25" textAnchor="middle" fontSize="15" fontWeight="700"
            fontFamily="Georgia, serif" fontStyle="italic"
            fill="white" opacity="0.95" letterSpacing="-0.5">RS</text>
        </svg>
        <span className="brand-name" aria-label="Rishi Sinha">
          {"Rishi".split("").map((ch, i) => (
            <span key={i} className="bn-char" style={{ animationDelay: `${0.05 + i * 0.11}s` }}>{ch}</span>
          ))}
          <span className="bn-char bn-space" style={{ animationDelay: "0.6s" }}>&nbsp;</span>
          {"Sinha".split("").map((ch, i) => (
            <span key={i} className="bn-char bn-last" style={{ animationDelay: `${0.71 + i * 0.11}s` }}>{ch}</span>
          ))}
        </span>
      </a>
      <div className="nav-links">
        <a href="#about" className="hide-sm">About</a>
        <a href="#experience" className="hide-sm">Experience</a>
        <a href="#work" className="hide-sm">Work</a>
        <a href="#lab" className="hide-sm">AI Lab</a>
        <a href="#writing" className="hide-sm">Writing</a>
        <a className="btn btn-primary magnetic" data-mag="0.3" href="#contact">
          Get in touch <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
