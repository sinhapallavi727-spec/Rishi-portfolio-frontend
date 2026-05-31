const posts = [
  { no: "01", title: "Why marketing teams should run like connected systems, not silos", tags: ["Growth", "Playbook"] },
  { no: "02", title: "Building AI agents that actually do marketing work",               tags: ["AI", "Automation"] },
  { no: "03", title: "SEO in the age of GEO & AI search — what changes, what doesn't",  tags: ["SEO", "GEO"] },
  { no: "04", title: "The retention playbook: lifecycle, lead scoring & CRM automation", tags: ["CRM", "Retention"] },
];

export default function Writing() {
  return (
    <section id="writing" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow"><span className="mono">Writing & Thought Leadership</span></div>
        <h2 className="section-title">Ideas I&apos;m <em>exploring</em>.</h2>
        <div style={{ marginTop: "40px" }}>
          {posts.map((p) => (
            <a key={p.no} className="post" href="#" data-fly={p.no === "01" || p.no === "03" ? "left" : "right"} data-d={p.no === "02" ? "1" : p.no === "03" ? "2" : p.no === "04" ? "3" : "0"}>
              <span className="p-no">{p.no}</span>
              <div className="p-mid">
                <div className="p-title">{p.title}</div>
                <div className="p-meta">
                  {p.tags.map((t) => <b key={t}>{t}</b>)}
                </div>
              </div>
              <div className="p-go">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
