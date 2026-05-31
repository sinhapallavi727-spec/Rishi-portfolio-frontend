"use client";

const stats = [
  { label: "Experience",     sub: "Years across growth & marketing",  num: 10,  suffix: "+", color: "var(--muted)" },
  { label: "Latest role",    sub: "YoY revenue growth at Toolsvilla", num: 40,  suffix: "%", color: "var(--lime)" },
  { label: "Industry Buying",sub: "B2B customer growth",              num: 200, suffix: "%", color: "var(--coral)" },
  { label: "Organic",        sub: "Organic traffic lift (MonotaRO)",  num: 70,  suffix: "%", color: "var(--violet)" },
];

export default function Stats() {
  return (
    <section className="section" style={{ paddingBlock: "clamp(60px,9vh,110px)" }}>
      <div className="wrap">
        <div className="grid g-4">
          {stats.map((s, i) => (
            <div key={s.label} className="card tilt stat stat-3d" data-tilt="7" data-fly="pop" data-d={String(i)}>
              <div className="tilt-sheen"></div>
              <div className="stat-top">
                <span className="mono">{s.label}</span>
                <span style={{ color: s.color }}>↑</span>
              </div>
              <div className="stat-num">
                <span data-count={s.num}>0</span>
                <span className="suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
