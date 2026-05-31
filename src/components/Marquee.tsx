export default function Marquee() {
  const pills = ["SEO", "Performance Marketing", "CRM & Retention", "AI Automation", "Analytics", "Content Strategy", "Revenue Ops", "B2C & Ecommerce", "D2C Growth", "Paid Media"];
  return (
    <div className="marquee" style={{ padding: "18px 0", borderBlock: "1px solid var(--hairline)" }}>
      <div className="marquee-track">
        {pills.map((p) => <span key={p} className="pill">{p}</span>)}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {pills.map((p) => <span key={p + "-2"} className="pill">{p}</span>)}
      </div>
    </div>
  );
}
