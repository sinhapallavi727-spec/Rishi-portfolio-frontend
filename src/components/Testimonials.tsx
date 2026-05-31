const quotes = [
  { initial: "P", role: "Performance Marketing Lead", text: "Rishi possesses deep expertise in SEM and social. His ability to solve complex marketing challenges consistently delivers value." },
  { initial: "G", role: "Growth & Engagement",        text: "He combines analytical thinking with execution excellence. His understanding of growth & user engagement is exceptional." },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ paddingTop: 0, position: "relative", overflow: "hidden" }}>
      {/* [EXTRA] ambient glow — remove .glow-orb divs to disable */}
      <div className="glow-orb violet" style={{ width:500, height:500, top:"20%", left:"60%", animationDelay:"2s" }} />
      <div className="wrap">
        <div className="eyebrow" data-reveal=""><span className="mono">Recommendations</span></div>
        <h2 className="section-title" data-reveal="">What people <em>say</em>.</h2>
        <div className="grid g-2" style={{ marginTop: "44px" }}>
          {quotes.map((q, i) => (
            <figure key={q.role} className="card tilt quote" data-tilt="5" data-fly="pop" data-d={String(i + 1)}>
              <div className="tilt-sheen"></div>
              <div className="quote-mark">&ldquo;</div>
              <blockquote className="quote-text">{q.text}</blockquote>
              <figcaption className="quote-by">
                <span className="avatar">{q.initial}</span>
                <div>
                  <b>{q.role}</b>
                  <div className="mono" style={{ fontSize: ".66rem" }}>Recommendation</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
