const projects = [
  { ix: "A/01", title: "SEO Prompt Generator",         desc: "Automated SEO workflows & content-generation prompt systems." },
  { ix: "A/02", title: "Blog Brief Generator",          desc: "An AI-powered content briefing engine for editorial teams." },
  { ix: "A/03", title: "Keyword Clustering Engine",     desc: "Automated topical-authority planning at scale." },
  { ix: "A/04", title: "AI Marketing Planner",          desc: "Growth-strategy generation from goals & constraints." },
  { ix: "A/05", title: "Multi-Agent Marketing Systems", desc: "Autonomous marketing operations & automation workflows." },
];

export default function AILab() {
  return (
    <section id="lab" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow" data-reveal=""><span className="mono">AI Innovation Lab</span></div>
        <h2 className="section-title" data-reveal="">What I&apos;m <em>currently building</em>.</h2>
        <p className="section-intro" data-reveal="" data-d="1">
          Marketing agents, automation systems & growth tooling — live experiments in AI-powered marketing.
        </p>
        <div className="grid g-3" style={{ marginTop: "44px" }}>
          {projects.map((p, i) => (
            <div key={p.ix} className="card tilt project" data-tilt="6" data-reveal="" data-d={String(i % 3 + 1)}>
              <div className="tilt-sheen"></div>
              <span className="p-status">BUILDING</span>
              <span className="p-ix">{p.ix}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
          <a className="card tilt project magnetic" data-tilt="6" data-mag="0.15" href="#contact" data-reveal="" data-d="3"
            style={{ background: "linear-gradient(160deg,#1c2410,var(--ink-3))", justifyContent: "flex-start" }}>
            <div className="tilt-sheen"></div>
            <span className="p-ix lime">↗</span>
            <h4 className="lime">Collaborate on an AI build</h4>
            <p style={{ color: "var(--paper)", opacity: 0.8 }}>Have an automation idea? Let&apos;s prototype it.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
