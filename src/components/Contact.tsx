"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="contact-box">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "clamp(30px,5vw,60px)", alignItems: "center" }}>
            <div>
              <div className="eyebrow"><span className="mono">Get in touch</span></div>
              <h2 className="serif" style={{ fontSize: "var(--t-h1)", lineHeight: 0.98 }}>
                Let&apos;s build something <span className="italic lime">that grows</span>.
              </h2>
              <p className="section-intro" style={{ maxWidth: "42ch", marginTop: "20px" }}>
                Fractional growth leadership, consulting, or an AI marketing build — tell me what you&apos;re working on.
              </p>
              <div className="kicker-row" style={{ marginTop: "26px" }}>
                {["FRACTIONAL", "CONSULTING", "AI BUILDS"].map((b) => (
                  <span key={b} className="token-badge">{b}</span>
                ))}
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✦</div>
                <h3 className="serif" style={{ fontSize: "1.5rem", color: "var(--lime)" }}>Message sent!</h3>
                <p style={{ color: "var(--muted)", marginTop: "8px" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                style={{ display: "grid", gap: "16px" }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label>Company & website</label>
                  <input type="text" placeholder="Company · url" />
                </div>
                <div className="field">
                  <label>What can I help with?</label>
                  <textarea rows={3} placeholder="Your growth challenge"></textarea>
                </div>
                <button className="btn btn-primary btn-lg" type="submit" style={{ justifyContent: "center" }}>
                  Send message <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
