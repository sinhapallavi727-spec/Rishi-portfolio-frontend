"use client";
import { useState, useRef, useEffect } from "react";

const roles = [
  {
    mark: "TV", role: "Head of Marketing", company: "Toolsvilla", desc: "B2B industrial-tools marketplace",
    when: "SEP 2025 — DEC 2025", top: "+40% YoY REVENUE",
    about: "Indian B2B e-commerce marketplace for machinery, tools & industrial supplies for SMBs. Owned the company-wide growth & marketing P&L.",
    points: [
      "Drove <b>40% YoY revenue growth</b> while improving marketing ROI through cost & channel optimization.",
      "Built the <b>Annual Operating Plan (AOP)</b> & quarterly roadmaps; led VC and board-level reviews on funnel and unit-economics metrics.",
      "Scaled <b>customer acquisition by 60%</b> across paid, organic, SEO, marketplaces & influencer channels.",
      "Improved <b>repeat-purchase rate by 40%</b> via CRM journeys (email, WhatsApp, push) & lifecycle marketing.",
      "Introduced dynamic landing pages & CRO frameworks to lift conversion and reduce CAC; defined team KPIs & OKRs.",
    ],
    chips: [{ val: "40%", label: "YoY revenue growth" }, { val: "60%", label: "acquisition lift" }, { val: "40%", label: "repeat-purchase rate" }],
  },
  {
    mark: "IB", role: "AVP — Marketing", company: "Industry Buying", desc: "owned by MonotaRO (Japan)",
    when: "DEC 2022 — AUG 2025", top: "+200% B2B CUSTOMERS",
    about: "India's largest marketplace for industrial goods, MRO products, tools & equipment — entirely owned by Japan's MonotaRO. Managed ₹1 Cr/month on Google Ads across an 8 lakh+ product catalogue.",
    points: [
      "Increased <b>organic traffic by 70%</b> at MonotaRO and 40% at Industrybuying after major technical & core-update fixes.",
      "Onboarded <b>CleverTap</b>, lifting overall CRM by <b>150%</b> and cutting retention cost by 55%.",
      "Grew <b>B2B customers by 200%</b> across overall marketing channels.",
      "Built SEO processes & flows; automated internal-linking, content flow (Hex.ai), dynamic pages, HTML validation, crawling & tree-shaking.",
      "Authored BRDs for SEO roadmap, SEM feed automation & GA4 across 10+ features; collaborated with 10+ PMs; led a team of 10–16.",
    ],
    chips: [{ val: "200%", label: "B2B customer growth" }, { val: "70%", label: "organic traffic lift" }, { val: "150%", label: "CRM uplift" }],
  },
  {
    mark: "HC", role: "Engagement Manager — Digital", company: "Home Credit", desc: "consumer finance",
    when: "JUN 2022 — NOV 2022", top: "₹1.5 CR/MO MEDIA",
    about: "Integrated CleverTap & SAS RTDM; owned SEO and the end-to-end product for Credit Cards, Loans & Wallet.",
    points: [
      "Drove engagement & app installs, uninstall retention, product enhancement, traffic, PNL & revenue.",
      "Managed <b>₹1.5 Cr/month</b> on Google Ads and initiated the GTM for credit-card onboarding.",
      "Built technical & on-page SEO for loan products, EMIs & credit cards; owned the complete E2E customer journey.",
      "Defined OKRs & contact policies across SEO, SEM, Email, push, SMS & tele-sales; formulated BRDs for SEO & CRM.",
    ],
    chips: [{ val: "₹1.5Cr", label: "monthly media" }, { val: "9", label: "team led" }, { val: "3", label: "product baskets" }],
  },
  {
    mark: "IX", role: "Marketing Manager — Digital", company: "Inovamax (Tabella)", desc: "iGaming agency, Prague",
    when: "JAN 2021 — JUN 2022", top: "$1M/MO GOOGLE ADS",
    about: "Prague-based gaming digital agency with 35+ clients across casinos, crypto & blockchain betting. Led a team of 23 specialists, analysts & executives.",
    points: [
      "Managed a monthly budget of <b>$1M on Google Ads</b> plus affiliations across casino, crypto & betting clients.",
      "Controlled CPA & CPL — <b>reduced CPL by 25%</b> and <b>CPA by 18%</b>.",
      "Optimized the customer journey & contact policy, improving <b>M1 retention by 25%</b> and M6 by 15%.",
      "Improved <b>FTD count by 50%</b> in Q4 and acquisition traffic by 125%; launched AU & SA campaigns.",
      "Built crypto community (Telegram, Twitter, webinars), ICO buzz & airdrops; optimized SEO with dynamic/blog pages, SSR & CDNs.",
    ],
    chips: [{ val: "−25%", label: "CPL reduced" }, { val: "−18%", label: "CPA reduced" }, { val: "+125%", label: "acquisition traffic" }],
  },
  {
    mark: "FA", role: "Sr. SEM / SEO Analyst", company: "FlowerAura · Bakingo", desc: "gifting & cloud-kitchen",
    when: "MAR 2018 — DEC 2020", top: "10× SEO TRAFFIC",
    about: "FlowerAura is a leading gifting e-commerce portal (2M+ monthly users); Bakingo is a premium cloud-kitchen brand. ₹15 Cr budget, a team of 16, and 2000+ campaigns.",
    points: [
      "Owned SEO, SEM & CRM across both brands; grew <b>SEO traffic 10×</b> (FlowerAura) and 7× (Bakingo).",
      "Introduced Shopping & DSA campaigns with a <b>5× order</b> improvement.",
      "Revamped on/off-page SEO — <b>−40% bounce rate</b>, +50% session duration, domain authority <b>34 → 55</b>.",
      "Launched Quotes & Wishes pages (organic traffic ~+100%); implemented ASO & app-campaign strategies.",
      "Managed multilingual & multinational SEO across geographies.",
    ],
    chips: [{ val: "10×", label: "SEO traffic" }, { val: "5×", label: "order volume" }, { val: "16", label: "team managed" }],
  },
  {
    mark: "11", role: "Marketing Executive / Analyst", company: "11 Monk Tech", desc: "digital agency",
    when: "JAN 2016 — FEB 2018", top: "30+ PROJECTS",
    about: "Digital agency serving clients across gifting, e-commerce, edtech, cosmetics, gaming & real-estate.",
    points: [
      "Led SEO & SEM for <b>30+ projects</b> across e-commerce, BFSI, healthcare & more.",
      "Ran SEM reporting, keyword evaluation & daily bid management on Google Ads.",
      "Built off-page SEO, backlinks, audits, blog strategies & programmatic SEO.",
      "Led <b>ORM</b>, increasing positive results by <b>80%</b> within a quarter.",
      "Automated reporting with advanced Excel (pivots, macros, lookups) & Google Sheet add-ons.",
    ],
    chips: [{ val: "30+", label: "projects led" }, { val: "80%", label: "ORM positivity" }, { val: "6+", label: "industries" }],
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number>(0);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    bodyRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = open === i ? el.scrollHeight + "px" : "";
    });
  }, [open]);

  return (
    <section id="experience" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow"><span className="mono">Experience</span></div>
        <h2 className="section-title">A decade <em>compounding</em> growth.</h2>
        <p className="section-intro">
          Six roles, one through-line: building revenue systems across B2B commerce, fintech & iGaming.{" "}
          <span className="mono" style={{ fontSize: ".7rem", color: "var(--faint)" }}>CLICK ANY ROLE TO EXPAND.</span>
        </p>

        <div id="xp" className="xtimeline" style={{ maxWidth: "920px" }}>
          <div className="xt-line"><div className="xt-fill"></div></div>

          {roles.map((r, i) => (
            <article key={r.mark} className={`xt-item${open === i ? " open" : ""}`}>
              <span className="xt-dot"></span>
              <button className="xt-head" type="button" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="xt-mark">{r.mark}</span>
                <span className="xt-meta">
                  <span className="xt-role">{r.role}</span>
                  <span className="xt-co">
                    <b>{r.company}</b> · {r.desc}{" "}
                    <span className="xt-when">{r.when}</span>
                  </span>
                </span>
                <span className="xt-top">{r.top}</span>
                <span className="xt-toggle">+</span>
              </button>
              <div className="xt-body" ref={(el) => { bodyRefs.current[i] = el; }}>
                <div className="xt-inner">
                  <p className="xt-desc">{r.about}</p>
                  <ul className="xt-points">
                    {r.points.map((pt, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: pt }} />
                    ))}
                  </ul>
                  <div className="xt-metrics">
                    {r.chips.map((c) => (
                      <div key={c.label} className="xt-chip">
                        <b>{c.val}</b>
                        <span>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
