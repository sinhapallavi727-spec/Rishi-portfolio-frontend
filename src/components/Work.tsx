import Image from "next/image";

const cases = [
  {
    tag: "Enterprise SEO",
    title: "Indexing at scale, rankings that compound",
    desc: "Technical fixes, internal-linking automation & content flow across an 8 lakh+ catalogue.",
    chips: [{ val: "+70%", label: "organic traffic" }, { val: "34→55", label: "domain authority" }],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imgAlt: "SEO analytics dashboard",
    ph: "lime",
  },
  {
    tag: "Performance Marketing",
    title: "Tighter spend, better efficiency",
    desc: "CPA/CPL control across casino, crypto & betting clients on a $1M/mo budget.",
    chips: [{ val: "−25%", label: "CPL" }, { val: "−18%", label: "CPA" }],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    imgAlt: "Performance marketing growth chart",
    ph: "coral",
  },
  {
    tag: "CRM & Retention",
    title: "Lifecycle automation that retains",
    desc: "CleverTap onboarding & lifecycle journeys (email, WhatsApp, push).",
    chips: [{ val: "+150%", label: "CRM uplift" }, { val: "+40%", label: "repeat purchase" }],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imgAlt: "CRM retention dashboard",
    ph: "",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="eyebrow" data-reveal=""><span className="mono">Selected Work</span></div>
        <h2 className="section-title" data-reveal="">Projects that <em>moved the needle</em>.</h2>
        <p className="section-intro" data-reveal="" data-d="1">A few signature results from across my roles.</p>
        <div className="grid g-3" style={{ marginTop: "44px" }}>
          {cases.map((c, i) => (
            <article key={c.title} className="card tilt case" data-tilt="6" data-fly="flip" data-d={String(i + 1)} style={{ padding: 0 }}>
              <div className="tilt-sheen"></div>
              <div className="case-media">
                {/* Unsplash image */}
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  fill
                  sizes="(max-width:900px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  unoptimized
                />
                {/* Gradient overlay so text is readable */}
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,rgba(13,14,17,0.28),rgba(13,14,17,0.55))" }} />
                <div className="case-overlay"><span>VIEW CASE →</span></div>
              </div>
              <div className="case-body">
                <span className="mono">{c.tag}</span>
                <h3 className="case-title">{c.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>{c.desc}</p>
                <div className="case-foot">
                  {c.chips.map((ch) => (
                    <span key={ch.label} className="result-chip">
                      <b>{ch.val}</b><span>{ch.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
