import React from "react";

export default function Pipeline() {
  const stages = [
    { num: "1", name: "Acquire", kpi: "SEO · ADS · SOCIAL\nTRAFFIC · LEADS · CAC" },
    { num: "2", name: "Convert", kpi: "CRO · FUNNELS\nCVR · CPL · ROAS" },
    { num: "3", name: "Retain",  kpi: "CRM · LIFECYCLE\nCHURN · LTV" },
    { num: "4", name: "Expand",  kpi: "LOYALTY · UPSELL\nREPEAT · NRR" },
    { num: "5", name: "Scale",   kpi: "AI · AUTOMATION\nEFFICIENCY · GROWTH" },
  ];
  const aiNotes = [
    { kind: "ACQUIRE · AUTOMATION", txt: "Keyword-clustering & competitor-intel agents plan content at scale." },
    { kind: "CONVERT · WORKFLOW",   txt: "AI CRO insights & landing-page analysis surface funnel fixes." },
    { kind: "RETAIN · WORKFLOW",    txt: "Predictive segmentation & lead scoring drive lifecycle triggers." },
    { kind: "EXPAND · AUTOMATION",  txt: "Automated journeys & next-best-offer lift repeat revenue." },
    { kind: "SCALE · SCALING",      txt: "Multi-agent marketing ops run the engine autonomously." },
  ];

  return (
    <section id="pipeline" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow" data-reveal=""><span className="mono">Signature Pattern</span></div>
        <h2 className="section-title" data-reveal="">The <em>Revenue Growth</em> pipeline.</h2>
        <p className="section-intro" data-reveal="" data-d="1">
          A living funnel diagram — the model in motion. Energy flows down the connectors; each stage lifts on hover. And increasingly,{" "}
          <span className="serif italic" style={{ color: "var(--paper)" }}>AI runs through every step.</span>
        </p>

        <div className="ai-banner" data-reveal="" data-d="2">
          <span className="ai-star">✦</span>
          <span className="ai-lead">AI AUTOMATION LAYER</span>
          <span className="ai-sub">Agents accelerate automation, workflows & scaling at every stage.</span>
          <div className="ai-pills">
            {["AUTOMATION","WORKFLOWS","SCALING"].map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>

        <div className="pl2" data-reveal="" data-d="2">
          <div style={{ overflowX: "auto" }}>
            <div className="pipeline">
              {stages.map((s, i) => (
                <React.Fragment key={s.num}>
                  <div className="stage">
                    <span className="s-num">{s.num}</span>
                    <div className="s-name"><span className="dot"></span>{s.name}</div>
                    <div className="s-kpi" style={{ whiteSpace: "pre-line" }}>{s.kpi}</div>
                  </div>
                  {i < stages.length - 1 && <div className="connector"><div className="flow"></div></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="pl2-ai">
            {aiNotes.map((n, i) => (
              <React.Fragment key={n.kind}>
                <div className="ai-note">
                  <span className="ai-kind">{n.kind}</span>
                  <span className="ai-txt">{n.txt}</span>
                </div>
                {i < aiNotes.length - 1 && <div className="ai-gap"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
