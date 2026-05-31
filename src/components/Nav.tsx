"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <a className="brand" href="#top" onClick={close}>
          <svg className="brand-mark" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="bm-g" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#C9F24D"/>
                <stop offset="48%"  stopColor="#FF6A4D"/>
                <stop offset="100%" stopColor="#9A8BFF"/>
              </linearGradient>
            </defs>
            <rect width="36" height="36" rx="10" fill="url(#bm-g)"/>
            <text x="18" y="25" textAnchor="middle" fontSize="15" fontWeight="700"
              fontFamily="Georgia, serif" fontStyle="italic"
              fill="white" opacity="0.95" letterSpacing="-0.5">RS</text>
          </svg>
          <span className="brand-name" aria-label="Rishi Sinha">
            {"Rishi".split("").map((ch, i) => (
              <span key={i} className="bn-char" style={{ animationDelay: `${0.05 + i * 0.11}s` }}>{ch}</span>
            ))}
            <span className="bn-char bn-space" style={{ animationDelay: "0.6s" }}>&nbsp;</span>
            {"Sinha".split("").map((ch, i) => (
              <span key={i} className="bn-char bn-last" style={{ animationDelay: `${0.71 + i * 0.11}s` }}>{ch}</span>
            ))}
          </span>
        </a>

        {/* Desktop links + mobile drawer */}
        <div className={`nav-links${open ? " nav-open" : ""}`}>
          <a href="#about"      onClick={close}>About</a>
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#work"       onClick={close}>Work</a>
          <a href="#lab"        onClick={close}>AI Lab</a>
          <a href="#writing"    onClick={close}>Writing</a>
          <a className="btn btn-primary magnetic" data-mag="0.3" href="#contact" onClick={close}>
            Get in touch <span className="arrow">→</span>
          </a>
        </div>

        {/* Hamburger button — visible only on mobile */}
        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Backdrop */}
      {open && (
        <div className="nav-backdrop" onClick={close} aria-hidden="true" />
      )}
    </>
  );
}
