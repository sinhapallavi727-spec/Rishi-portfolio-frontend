"use client";
import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* ── CUSTOM CURSOR ── */
    function initCursor() {
      if (!fine) return;
      document.body.classList.add("has-cursor");
      const dot = document.createElement("div"); dot.className = "cursor-dot";
      const ring = document.createElement("div"); ring.className = "cursor-ring";
      document.body.append(dot, ring);
      let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
      addEventListener("mousemove", (e) => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      });
      (function loop() {
        rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      })();
      document.querySelectorAll<HTMLElement>("a,button,.magnetic,.tilt,[data-hot]").forEach((el) => {
        el.addEventListener("mouseenter", () => ring.classList.add("hot"));
        el.addEventListener("mouseleave", () => ring.classList.remove("hot"));
      });
    }

    /* ── MAGNETIC ── */
    function initMagnetic() {
      if (!fine || reduce) return;
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
        const strength = parseFloat(el.dataset.mag || "0.4");
        el.addEventListener("mousemove", (e) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; });
      });
    }

    /* ── TILT CARDS ── */
    function initTilt() {
      if (!fine || reduce) return;
      document.querySelectorAll<HTMLElement>(".tilt").forEach((card) => {
        const max = parseFloat(card.dataset.tilt || "9");
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          const rx = (0.5 - py) * max * 2;
          const ry = (px - 0.5) * max * 2;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          card.style.setProperty("--mx", px * 100 + "%");
          card.style.setProperty("--my", py * 100 + "%");
        });
        card.addEventListener("mouseleave", () => { card.style.transform = ""; });
      });
    }

    /* ── SCROLL REVEAL (data-reveal + data-fly) ── */
    function initReveal() {
      const sel = "[data-reveal], [data-fly]";
      const els = Array.from(document.querySelectorAll<HTMLElement>(sel));
      if (reduce) { els.forEach((e) => e.classList.add("in")); return; }
      let pending = els.slice();
      function check() {
        const vh = innerHeight || document.documentElement.clientHeight;
        pending = pending.filter((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.88 && r.bottom > 0) { el.classList.add("in"); return false; }
          return true;
        });
        if (!pending.length) {
          removeEventListener("scroll", check);
          removeEventListener("resize", check);
        }
      }
      addEventListener("scroll", check, { passive: true });
      addEventListener("resize", check, { passive: true });
      check();
      requestAnimationFrame(() => { check(); requestAnimationFrame(check); });
    }

    /* ── NAV SCROLLED ── */
    function initNav() {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      const onScroll = () => nav.classList.toggle("scrolled", scrollY > 24);
      onScroll();
      addEventListener("scroll", onScroll, { passive: true });
    }

    /* ── HERO PARALLAX ── */
    function initParallax() {
      if (!fine || reduce) return;
      const layers = document.querySelectorAll<HTMLElement>("[data-parallax]");
      if (!layers.length) return;
      addEventListener("mousemove", (e) => {
        const dx = e.clientX / innerWidth - 0.5;
        const dy = e.clientY / innerHeight - 0.5;
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.parallax || "0");
          l.style.transform = `translate(${dx * d}px,${dy * d}px)`;
        });
      });
    }

    /* ── COUNT-UP ── */
    function initCounters() {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
      if (reduce) { els.forEach((e) => { e.textContent = e.dataset.count || ""; }); return; }
      let pending = els.slice();
      function check() {
        const vh = innerHeight || document.documentElement.clientHeight;
        pending = pending.filter((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.85 && r.bottom > 0) {
            const target = parseFloat(el.dataset.count || "0");
            const dec = parseInt(el.dataset.dec || "0", 10);
            const dur = 1500; const start = performance.now();
            (function tick(now: number) {
              const p = Math.min((now - start) / dur, 1);
              const v = target * (1 - Math.pow(1 - p, 3));
              el.textContent = v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = target.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
            })(performance.now());
            return false;
          }
          return true;
        });
        if (!pending.length) { removeEventListener("scroll", check); removeEventListener("resize", check); }
      }
      addEventListener("scroll", check, { passive: true });
      addEventListener("resize", check, { passive: true });
      check(); requestAnimationFrame(check);
    }

    /* ── KINETIC TRAIN (scroll-velocity) ── */
    function initKineticTrain() {
      const rows = Array.from(document.querySelectorAll<HTMLElement>(".ktrain-row"));
      if (!rows.length || reduce) return;
      let vel = 0, lastY = scrollY;
      addEventListener("scroll", () => { const y = scrollY; vel += (y - lastY); lastY = y; }, { passive: true });
      const state = rows.map((row, i) => ({
        row, o: 0, dir: i % 2 === 0 ? -1 : 1, base: 0.5 + i * 0.18, w: row.scrollWidth / 2 || 1,
      }));
      function measure() { state.forEach((s) => { const w = s.row.scrollWidth / 2; if (w > 0) s.w = w; }); }
      setTimeout(measure, 500); addEventListener("resize", measure, { passive: true });
      function frame() {
        vel *= 0.9;
        const boost = Math.min(Math.abs(vel), 70) * 0.45;
        state.forEach((s) => {
          s.o += s.base + boost;
          const m = s.o % s.w;
          const x = s.dir < 0 ? -m : (m - s.w);
          s.row.style.transform = `translate3d(${x}px,0,0)`;
        });
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    /* ── TIMELINE SCROLL-FILL ── */
    function initTimelineFill() {
      const root = document.getElementById("xp");
      if (!root) return;
      const fill = root.querySelector<HTMLElement>(".xt-fill");
      function onScroll() {
        if (!fill || !root) return;
        const r = root.getBoundingClientRect();
        const vh = innerHeight || document.documentElement.clientHeight;
        const total = r.height || 1;
        const progressed = Math.min(Math.max(vh * 0.45 - r.top, 0), total);
        fill.style.height = (progressed / total * 100) + "%";
      }
      addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* ════════════════════════════════════════════════════════
       [MORE EXTRA] — Advanced Motion, 3-D & Visual FX
       To remove: delete from here to the closing comment,
       then remove their BOOT calls below.
       ════════════════════════════════════════════════════════ */

    /* ── [MORE EXTRA] SCROLL PROGRESS BAR ── */
    function initScrollProgress() {
      const bar = document.createElement("div");
      bar.className = "scroll-progress";
      document.body.prepend(bar);
      function update() {
        const total = document.documentElement.scrollHeight - innerHeight;
        bar.style.width = total > 0 ? (scrollY / total * 100) + "%" : "0%";
      }
      addEventListener("scroll", update, { passive: true });
      update();
    }


    /* ── [MORE EXTRA] CURSOR SPARKLE TRAIL ── */
    function initCursorSparkles() {
      if (!fine || reduce) return;
      let last = 0;
      addEventListener("mousemove", (e) => {
        const now = Date.now(); if (now - last < 75) return; last = now;
        const s = document.createElement("div"); s.className = "cspark";
        const sz = 3 + Math.random() * 5;
        const dx = (Math.random() - 0.5) * 34; const dy = -(10 + Math.random() * 26);
        const col = Math.random() > 0.5 ? "201,242,77" : Math.random() > 0.5 ? "255,106,77" : "154,139,255";
        s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:${sz}px;height:${sz}px;background:rgb(${col});--dx:${dx}px;--dy:${dy}px`;
        document.body.appendChild(s); setTimeout(() => s.remove(), 700);
      });
    }

    /* ── [MORE EXTRA] CLICK RIPPLE WAVE ── */
    function initRipple() {
      addEventListener("click", (e) => {
        const r = document.createElement("div"); r.className = "ripple-wave";
        r.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`;
        document.body.appendChild(r); setTimeout(() => r.remove(), 700);
      });
    }

    /* ── [MORE EXTRA] TEXT SCRAMBLE ON HOVER ── */
    function initTextScramble() {
      if (reduce) return;
      const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
      document.querySelectorAll<HTMLElement>(".section-title").forEach((el) => {
        const orig = el.innerText;
        let rafId = 0;
        el.addEventListener("mouseenter", () => {
          cancelAnimationFrame(rafId);
          let frame = 0; const total = 18;
          const run = () => {
            el.innerText = orig.split("").map((c, i) => {
              if (c === " " || c === "\n" || c === "'" || c === "." || c === ",") return c;
              return i / orig.length < frame / total ? c : glyphs[Math.floor(Math.random() * glyphs.length)];
            }).join("");
            if (frame < total) { frame++; rafId = requestAnimationFrame(run); }
            else el.innerText = orig;
          };
          run();
        });
        el.addEventListener("mouseleave", () => { cancelAnimationFrame(rafId); el.innerText = orig; });
      });
    }

    /* ── [MORE EXTRA] MOUSE-FOLLOW SPOTLIGHT ── */
    function initSpotlight() {
      if (!fine || reduce) return;
      document.querySelectorAll<HTMLElement>(".section").forEach((sec) => {
        const ov = document.createElement("div"); ov.className = "spotlight-overlay";
        if (getComputedStyle(sec).position === "static") sec.style.position = "relative";
        sec.prepend(ov);
        sec.addEventListener("mousemove", (e) => {
          const r = sec.getBoundingClientRect();
          ov.style.setProperty("--sx", ((e.clientX - r.left) / r.width * 100) + "%");
          ov.style.setProperty("--sy", ((e.clientY - r.top) / r.height * 100) + "%");
        });
      });
    }

    /* ── [MORE EXTRA] AURORA GRADIENT SHIFT ON SCROLL ── */
    function initAurora() {
      if (reduce) return;
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".section"));
      addEventListener("scroll", () => {
        const vh = innerHeight;
        sections.forEach((sec) => {
          const r = sec.getBoundingClientRect();
          const prog = Math.max(0, Math.min(1, 1 - r.top / vh));
          sec.style.setProperty("--ax", (20 + prog * 60) + "%");
          sec.style.setProperty("--ay", (20 + prog * 60) + "%");
        });
      }, { passive: true });
    }

    /* ── [MORE EXTRA] 3-D HERO HEADLINE DEPTH ── */
    function initHeroDepth() {
      if (!fine || reduce) return;
      const h1 = document.querySelector<HTMLElement>(".hero-grid h1");
      if (!h1) return;
      h1.classList.add("hero-depth");
    }

    /* ══════════════════ END [MORE EXTRA] ══════════════════ */

    /* ── BOOT ── */
    initCursor();
    initMagnetic();
    initTilt();
    initReveal();
    initNav();
    initParallax();
    initCounters();
    initKineticTrain();
    initTimelineFill();
    /* [MORE EXTRA] boot — remove these 7 lines to disable */
    initScrollProgress();
    initCursorSparkles();
    initRipple();
    initTextScramble();
    initSpotlight();
    initAurora();
    initHeroDepth();
  }, []);

  return null;
}
