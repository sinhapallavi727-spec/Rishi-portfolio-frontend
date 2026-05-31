export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        {/* [EXTRA] spark divider — remove hr.spark-line to disable */}
        <hr className="spark-line" style={{ marginBottom: "clamp(30px,4vw,60px)" }} />
        <div className="about-grid">
          <div>
            <div className="eyebrow" data-fly="left"><span className="mono">About</span></div>
            <h2 className="section-title" data-fly="left" data-d="1">Marketing isn&apos;t about channels. It&apos;s a <em>system</em>.</h2>
            <p className="section-intro" data-reveal="" data-d="1" style={{ maxWidth: "42ch" }}>
              Most teams operate in silos — SEO here, paid there, CRM somewhere else. I connect them into one engine that acquires, converts, retains, and scales.
            </p>
            <div className="signature" data-reveal="" data-d="2">— Rishi</div>
          </div>
          <div data-fly="right" data-d="1">
            <p style={{ fontSize: "var(--t-lead)", lineHeight: 1.65 }}>
              I&apos;m a growth-marketing leader with <span className="lime">10+ years</span> building scalable acquisition &amp; retention systems across <span className="lime">B2C, D2C &amp; Ecommerce</span>. Most recently <b>Head of Marketing at Toolsvilla</b> and <b>AVP — Marketing at Industry Buying</b>, owned by Japan&apos;s <span className="lime">MonotaRO</span>.
            </p>
            <p style={{ marginTop: "18px", color: "var(--muted)", lineHeight: 1.65 }}>
              Today I work at the intersection of{" "}
              <span className="serif italic" style={{ color: "var(--paper)" }}>marketing, revenue, systems &amp; AI</span>
              {" "}— designing automation, multi-agent workflows, and data-driven growth infrastructure for B2B, D2C, and SaaS businesses.
            </p>
            <div className="tags" style={{ marginTop: "26px" }}>
              {[
                { label: "Growth Strategy", cls: "" },
                { label: "B2C & D2C", cls: "" },
                { label: "Enterprise SEO", cls: " coral" },
                { label: "Ecommerce", cls: " coral" },
                { label: "AI Agents", cls: " violet" },
                { label: "CRM & Lifecycle", cls: "" },
                { label: "Performance Marketing", cls: " coral" },
                { label: "Marketing Automation", cls: " violet" },
                { label: "GA4 · GTM · Looker", cls: "" },
              ].map((t) => <span key={t.label} className={`tag${t.cls}`}>{t.label}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
