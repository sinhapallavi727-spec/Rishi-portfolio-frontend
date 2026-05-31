export default function KineticTrain() {
  const rows = [
    { words: ["SEO", "Performance", "CRM", "AI Agents", "Automation", "Workflows"], cls: "accent" },
    { words: ["Growth", "Revenue", "Retention", "Lifecycle", "Analytics", "Strategy"], cls: "outline" },
    { words: ["Acquire", "Convert", "Retain", "Expand", "Scale", "Compound"], cls: "" },
  ];

  return (
    <section className="ktrain" aria-label="Expertise in motion" style={{ position: "relative" }}>
      <div className="kt-cap">WHAT I DO · IN MOTION</div>
      <div className="ktrain-rows">
        {rows.map((r, ri) => (
          <div key={ri} className={`ktrain-row${r.cls ? " " + r.cls : ""}`}>
            <div className="kt-group">
              {r.words.map((w) => <span key={w} className="kt">{w}</span>)}
            </div>
            <div className="kt-group" aria-hidden="true">
              {r.words.map((w) => <span key={w + "-2"} className="kt">{w}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
