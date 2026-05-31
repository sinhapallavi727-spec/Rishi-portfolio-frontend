"use client";
import { useEffect, useRef } from "react";

const faces = [
  { cls: "f-front",  fx: false, num: "01 / ACQUIRE", name: "Acquire",  meta: "SEO · Ads · Social"  },
  { cls: "f-right",  fx: true,  num: "02 / CONVERT", name: "Convert",  meta: "CRO · Funnels"       },
  { cls: "f-back",   fx: false, num: "03 / RETAIN",  name: "Retain",   meta: "CRM · Lifecycle"     },
  { cls: "f-left",   fx: true,  num: "04 / SCALE",   name: "Scale",    meta: "AI · Automation"     },
  { cls: "f-top",    fx: false, num: "∞ / SYSTEM",   name: "Revenue",  meta: "Connected growth"    },
  { cls: "f-bottom", fx: false, num: "DATA / GA4",   name: "Measured", meta: "Attribution"         },
];

export default function GrowthCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rotX = -22, rotY = 0, dragging = false, lx = 0, ly = 0, vX = 0, vY = 0;
    const apply = () => { cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`; };

    const down = (e: MouseEvent | TouchEvent) => {
      dragging = true; cube.classList.add("dragging"); cube.classList.remove("spin");
      const p = "touches" in e ? e.touches[0] : e; lx = p.clientX; ly = p.clientY;
    };
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const p = "touches" in e ? e.touches[0] : e;
      vY = (p.clientX - lx) * 0.4; vX = -(p.clientY - ly) * 0.4;
      rotY += vY; rotX += vX;
      lx = p.clientX; ly = p.clientY; apply();
      if ("cancelable" in e && e.cancelable) e.preventDefault();
    };
    const inertia = () => {
      vX *= 0.94; vY *= 0.94;
      rotX += vX; rotY += vY; apply();
      if (Math.abs(vX) > 0.05 || Math.abs(vY) > 0.05) requestAnimationFrame(inertia);
      else if (!reduce) { cube.classList.add("spin"); cube.style.transform = ""; }
    };
    const up = () => { if (!dragging) return; dragging = false; cube.classList.remove("dragging"); inertia(); };

    cube.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    cube.addEventListener("touchstart", down, { passive: true });
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
    if (!reduce) cube.classList.add("spin");

    return () => {
      cube.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      cube.removeEventListener("touchstart", down);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cube-grid">
          <div>
            <div className="eyebrow" data-reveal=""><span className="mono">My Operating Model</span></div>
            <h2 className="section-title" data-reveal="">Growth as one <em>connected</em> system.</h2>
            <p className="section-intro" data-reveal="" data-d="1">
              Every role plugged into the same engine — acquisition, conversion, retention &amp; scale as faces of
              one connected model, measured end to end.{" "}
              <span className="serif italic" style={{ color: "var(--paper)" }}>Drag the cube to explore it.</span>
            </p>
            <div className="kicker-row" style={{ marginTop: "28px" }} data-reveal="" data-d="2">
              {["ACQUIRE","CONVERT","RETAIN","SCALE"].map((b) => <span key={b} className="token-badge">{b}</span>)}
            </div>
          </div>

          <div className="stage3d" data-parallax="-16" style={{ minHeight: "420px" }}>
            <div className="cube" ref={cubeRef} id="cube">
              <div className="cube-floor"></div>
              {faces.map((f) => (
                <div key={f.cls} className={`face ${f.cls}${f.fx ? " fx" : ""}`}>
                  <span className="f-num">{f.num}</span>
                  <div>
                    <div className="f-name serif">{f.name}</div>
                    <div className="f-meta">{f.meta}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mono" style={{ position: "absolute", bottom: "-6px", textAlign: "center", width: "100%", fontSize: ".62rem" }}>↻ drag to rotate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
