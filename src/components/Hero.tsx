import Image from "next/image";

export default function Hero() {
  return (
    <header id="top" className="section" style={{ paddingTop: "clamp(140px,18vh,220px)", overflow: "hidden", position: "relative" }}>
      {/* [EXTRA] hero ambient blobs — remove .hero-blob divs to disable */}
      <div className="hero-blob" style={{ width:600, height:600, top:"-10%", left:"30%", background:"radial-gradient(circle,rgba(201,242,77,0.09),transparent 70%)" }} />
      <div className="hero-blob" style={{ width:400, height:400, top:"20%", right:"-5%", background:"radial-gradient(circle,rgba(255,106,77,0.07),transparent 70%)", animationDelay:"4s" }} />
      <div className="wrap">
        <div className="hero-grid">
          {/* LEFT — text */}
          <div>
            <div className="eyebrow" data-reveal="">
              <span className="mono">Hi, I&apos;m Rishi Sinha</span>
            </div>
            <h1
              className="serif"
              style={{ fontSize: "clamp(2.5rem,5.8vw,5.2rem)", lineHeight: 1.0, letterSpacing: "-0.03em", paddingBottom: "0.12em" }}
              data-reveal="" data-d="1"
            >
              Head of Marketing,<br />
              <em className="italic lime">AI Strategist</em><br />
              &amp; Consultant.
            </h1>
            <p className="section-intro" style={{ maxWidth: "52ch", marginTop: "3.4rem" }} data-reveal="" data-d="2">
              I help businesses grow revenue through{" "}
              <span className="serif italic" style={{ color: "var(--paper)" }}>SEO, performance marketing, CRM &amp; AI automation</span>
              {" "}— turning fragmented channels into one connected, data-driven growth engine.
            </p>
            <div className="now-strip" style={{ marginTop: "24px" }} data-reveal="" data-d="3">
              <span className="nowdot"></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>
                EX-HEAD OF MARKETING · B2C · D2C · ECOMMERCE
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "32px" }} data-reveal="" data-d="4">
              <a className="btn btn-primary btn-lg magnetic" data-mag="0.35" href="#work">
                View my work <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost btn-lg magnetic" data-mag="0.25" href="#contact">
                Work with me
              </a>
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div className="portrait-wrap" data-parallax="-16" style={{ minHeight: "420px" }}>
            <div className="portrait-ring"></div>
            {/* [MORE EXTRA] second counter-rotating ring — remove this div to disable */}
            <div className="portrait-ring-2" aria-hidden="true"></div>
            <div className="portrait">
              <Image src="/rishi-portrait.png" alt="Rishi Sinha" width={400} height={400} priority style={{ width: "108%", height: "108%", objectFit: "cover", transform: "translate(-3.7%,-3.7%)" }} />
            </div>
            <div className="float-chip fc-1" data-parallax="-32"><span className="lime">●</span> 10+ yrs in growth</div>
            <div className="float-chip fc-2" data-parallax="-42"><span style={{color:"var(--lime)",fontFamily:"var(--serif)",fontSize:"1.1rem"}}>Fwd</span> AI Marketing Developer</div>
            <div className="float-chip fc-3" data-parallax="-24"><b style={{color:"var(--coral)",fontFamily:"var(--serif)"}}>SEM</b> · <b style={{color:"var(--coral)",fontFamily:"var(--serif)"}}>SEO</b> · <b style={{color:"var(--coral)",fontFamily:"var(--serif)"}}>CRM</b></div>
          </div>
        </div>
      </div>
    </header>
  );
}
