import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CssNavbar, { useDarkMode } from "../components/CssNavbar";
import CssFooter from "../components/CssFooter";

/* ─── Data ──────────────────────────────────────────────────────── */
const SOCIALS = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@TECHINMYSTYLE",
    description:
      "Subscribe to our YouTube channel for in-depth CSS tutorials, full courses, and step-by-step guides on Flexbox, Grid, animations, and more.",
    href: "https://www.youtube.com/@TECHINMYSTYLE",
    icon: "bi bi-youtube",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.08)",
    border: "rgba(255,0,0,0.18)",
    cta: "Subscribe Now",
    badge: "Free Courses",
  },
  {
    key: "telegram",
    label: "Telegram",
    handle: "Tech_in_my_style_bot",
    description:
      "Join our Telegram community to get instant CSS updates, tips, cheat sheets, and connect with thousands of learners worldwide.",
    href: "https://t.me/Tech_in_my_style_bot",
    icon: "bi bi-telegram",
    color: "#0088CC",
    bg: "rgba(0,136,204,0.08)",
    border: "rgba(0,136,204,0.18)",
    cta: "Join Channel",
    badge: "Daily Updates",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: "TECH IN MY STYLE",
    description:
      "Follow our WhatsApp channel for quick CSS notes, property cheat sheets, and the latest learning resources delivered straight to your phone.",
    href: "https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d",
    icon: "bi bi-whatsapp",
    color: "#25D366",
    bg: "rgba(37,211,102,0.08)",
    border: "rgba(37,211,102,0.18)",
    cta: "Follow Channel",
    badge: "CSS Resources",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@techinmystyle",
    description:
      "Follow us on Instagram for bite-sized CSS tips, visual design guides, course announcements, and behind-the-scenes content.",
    href: "https://www.instagram.com/techinmystyle/?igsh=YXIxdWl2NGFmdXZk",
    icon: "bi bi-instagram",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.18)",
    cta: "Follow Us",
    badge: "Tips & Tricks",
  },
];

const FAQS = [
  {
    q: "Is everything on this platform free?",
    a: "Yes! CSS IN MY STYLE is 100% free. All courses, property references, interactive demos, and the playground are completely free with no signup required.",
  },
  {
    q: "What makes the 3 interactive demos special?",
    a: "The Flexbox, CSS Grid, and Animation demos let you change property values using visual controls and see the results live in real-time. The generated CSS code updates automatically so you can copy and use it instantly.",
  },
  {
    q: "How do I get notified of new course releases?",
    a: "Subscribe to our YouTube channel and join our Telegram channel to get instant notifications whenever new CSS courses or resources are published.",
  },
  {
    q: "Can I suggest a CSS topic or property?",
    a: "Absolutely. Reach out to us via Telegram or Instagram and we'll take your suggestion into consideration for future content additions.",
  },
  {
    q: "Are there any certifications available?",
    a: "We link to third-party certification platforms on our Resources page, including freeCodeCamp's Responsive Web Design and W3Schools CSS Certificate, where you can earn recognised credentials.",
  },
  {
    q: "What CSS version does this platform cover?",
    a: "We cover all modern CSS — CSS3 and beyond, including Flexbox, Grid, Custom Properties, animations, transforms, filters, and the latest features like container queries and cascade layers.",
  },
];

/* ─── FAQ Item ──────────────────────────────────────────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "var(--color-card)",
        border: `1px solid ${open ? "#264de4" : "var(--color-border)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: open
          ? "0 8px 28px rgba(38,77,228,0.18)"
          : "0 1px 4px rgba(0,0,0,0.06)",
        transition: "all 0.25s ease",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.2rem 1.5rem",
          background: open
            ? "linear-gradient(135deg, rgba(38,77,228,0.06), rgba(41,101,241,0.03))"
            : "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "0.97rem",
          fontWeight: 700,
          color: open ? "#264de4" : "var(--color-text)",
          textAlign: "left",
          transition: "background 0.2s ease, color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (!open) {
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(38,77,228,0.04), transparent)";
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            e.currentTarget.style.background = "none";
          }
        }}
      >
        <span>{q}</span>
        <i
          className="bi bi-chevron-down"
          style={{
            color: open ? "#264de4" : "var(--color-text-faint)",
            fontSize: "1rem",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease, color 0.2s ease",
          }}
          aria-hidden="true"
        />
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            padding: "0 1.5rem 1.3rem",
            fontSize: "0.9rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Social Card ───────────────────────────────────────────────── */
function SocialCard({ s, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "relative",
        background: "var(--color-card)",
        border: `1px solid ${hov ? s.color : "var(--color-border)"}`,
        borderRadius: "20px",
        padding: "2rem 1.75rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        textDecoration: "none",
        color: "var(--color-text)",
        boxShadow: hov
          ? `0 16px 48px ${s.color}28`
          : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-10px) scale(1.015)" : "translateY(0) scale(1)",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`${s.label} — ${s.handle}`}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: s.color,
          transform: hov ? "scaleX(1)" : "scaleX(0.55)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: "14px",
          background: hov ? s.color : s.bg,
          border: `1.5px solid ${hov ? "transparent" : s.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.65rem",
          color: hov ? "#fff" : s.color,
          flexShrink: 0,
          transition:
            "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hov ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0deg)",
        }}
        aria-hidden="true"
      >
        <i className={s.icon} />
      </div>

      {/* Badge */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          alignSelf: "flex-start",
          padding: "0.2rem 0.7rem",
          borderRadius: "9999px",
          background: `${s.color}18`,
          border: `1px solid ${s.color}30`,
          color: s.color,
          fontSize: "0.68rem",
          fontWeight: 800,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginTop: "0.1rem",
        }}
      >
        {s.badge}
      </span>

      {/* Name + handle */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "var(--color-text)",
          margin: "0.25rem 0 0",
          letterSpacing: "-0.02em",
        }}
      >
        {s.label}
      </h3>
      <p
        style={{
          fontSize: "0.82rem",
          fontWeight: 600,
          color: s.color,
          margin: 0,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {s.handle}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        {s.description}
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "1rem",
          borderTop: "1px solid var(--color-border-soft)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: hov ? "0.65rem" : "0.4rem",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: s.color,
            transition: "gap 0.18s ease",
          }}
        >
          {s.cta}
          <i className="bi bi-arrow-up-right" style={{ fontSize: "0.85rem" }} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Connect() {
  const { dark, toggle } = useDarkMode();
  const [heroIn, setHeroIn] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const P = "#264de4";

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >


      <main id="main-content">
        {/* ══════════ HERO ══════════ */}
        <section
          style={{
            position: "relative",
            background: "var(--color-bg)",
            padding: "6.5rem 2rem 5rem",
            overflow: "hidden",
            borderBottom: "1px solid var(--color-border-soft)",
            transition: "background 0.3s ease",
          }}
          aria-label="Connect page hero"
        >
          {/* Decorative blobs */}
          {[
            {
              w: 520,
              h: 520,
              top: -160,
              left: -140,
              c: "rgba(38,77,228,0.16)",
              dur: 11,
            },
            {
              w: 400,
              h: 400,
              bottom: -120,
              right: -100,
              c: "rgba(41,101,241,0.13)",
              dur: 14,
              rev: true,
            },
            {
              w: 260,
              h: 260,
              top: "50%",
              left: "48%",
              c: "rgba(66,161,208,0.07)",
              dur: 9,
              delay: 2,
            },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: b.w,
                height: b.h,
                top: b.top,
                left: b.left,
                bottom: b.bottom,
                right: b.right,
                borderRadius: "50%",
                filter: "blur(72px)",
                background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
                animation: `cnBlob ${b.dur}s ease-in-out infinite${b.rev ? " reverse" : ""}${b.delay ? ` ${b.delay}s` : ""}`,
                pointerEvents: "none",
                zIndex: 0,
              }}
              aria-hidden="true"
            />
          ))}

          <style>{`
            @keyframes cnBlob {
              0%,100%{transform:translate(0,0) scale(1);}
              33%{transform:translate(20px,-20px) scale(1.04);}
              66%{transform:translate(-14px,14px) scale(0.97);}
            }
            @keyframes cnImgFloat {
              0%,100%{transform:translateY(0);}
              50%{transform:translateY(-10px);}
            }
            @keyframes cnGlowPulse {
              0%,100%{transform:scale(1);opacity:0.7;}
              50%{transform:scale(1.15);opacity:1;}
            }
            @keyframes cnIconPulse {
              0%,100%{box-shadow:0 0 0 0 rgba(38,77,228,0.3);}
              50%{box-shadow:0 0 0 16px rgba(38,77,228,0);}
            }
            @keyframes cnCaret {
              0%,100%{opacity:1;}50%{opacity:0;}
            }
          `}</style>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "680px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "translateY(0)" : "translateY(26px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.38rem 1.1rem",
                background:
                  "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
                border: "1px solid rgba(38,77,228,0.15)",
                borderRadius: "9999px",
                color: P,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <i className="bi bi-people-fill" aria-hidden="true" />
              Join Our Community
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.12,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              Let&apos;s{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #264de4, #2965f1)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Connect!
              </span>
            </h1>

            {/* Logo image */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                animation: "cnImgFloat 5s ease-in-out infinite",
              }}
              aria-hidden="true"
            >
              <img
                src="/img/CSS-TECH.png"
                alt="TECH IN MY STYLE"
                style={{
                  width: 140,
                  height: 140,
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 24px rgba(38,77,228,0.30))",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 1,
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(38,77,228,0.20) 0%, transparent 70%)",
                  animation: "cnGlowPulse 3s ease-in-out infinite",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                maxWidth: "560px",
                margin: 0,
              }}
            >
              Ready to master modern CSS? Join our thriving community of
              learners — get daily tips, watch free courses, and stay updated
              with the latest web styling content from{" "}
              <strong style={{ color: P }}>TECH IN MY STYLE</strong>.
            </p>

            {/* Platform quick-links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.65rem",
                marginTop: "0.25rem",
              }}
              aria-label="Social platforms"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "9999px",
                    background: s.bg,
                    border: `1.5px solid ${s.border}`,
                    color: s.color,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition:
                      "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.06)";
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.background = s.bg;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.border;
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <i className={s.icon} aria-hidden="true" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SOCIAL CARDS ══════════ */}
        <section
          style={{
            padding: "5.5rem 2rem 6rem",
            background: "var(--color-bg-alt)",
            transition: "background 0.3s ease",
          }}
          aria-labelledby="socials-heading"
          id="socials"
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.35rem 1.1rem",
                  background:
                    "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
                  border: "1px solid rgba(38,77,228,0.15)",
                  borderRadius: "9999px",
                  color: P,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                <i className="bi bi-share-fill" aria-hidden="true" />
                Stay Connected
              </div>
              <h2
                id="socials-heading"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "var(--color-text)",
                  margin: "0 0 0.85rem",
                }}
              >
                Find Us On Social Media
              </h2>
              <p
                style={{
                  maxWidth: "620px",
                  margin: "0 auto",
                  color: "var(--color-text-muted)",
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              >
                Pick your favourite platform and join a community of passionate
                CSS learners. We post regularly on all channels.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {SOCIALS.map((s, i) => (
                <SocialCard key={s.key} s={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT SECTION ══════════ */}
        <section
          style={{
            padding: "5.5rem 2rem",
            background: "var(--color-bg)",
            transition: "background 0.3s ease",
          }}
          aria-labelledby="contact-heading"
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "28px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background:
                    "linear-gradient(90deg, #264de4, #2965f1, #42a1d0)",
                }}
                aria-hidden="true"
              />

              {/* Decorative rings */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: "52%",
                  width: 200,
                  height: 200,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                aria-hidden="true"
              >
                {[0, 25, 50].map((inset) => (
                  <div
                    key={inset}
                    style={{
                      position: "absolute",
                      inset,
                      borderRadius: "50%",
                      border: "1.5px solid var(--color-border)",
                    }}
                  />
                ))}
              </div>

              {/* Left: contact info */}
              <div
                style={{
                  padding: "3rem 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
                    border: "1.5px solid rgba(38,77,228,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: P,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <i className="bi bi-envelope-fill" />
                </div>
                <h2
                  id="contact-heading"
                  style={{
                    fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)",
                    fontWeight: 900,
                    color: "var(--color-text)",
                    letterSpacing: "-0.03em",
                    margin: 0,
                  }}
                >
                  Send Us an Email
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Have a question, feedback, or want to collaborate? Drop us an
                  email and we&apos;ll get back to you as soon as possible.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {[
                    {
                      key: "email",
                      icon: "bi bi-envelope-at-fill",
                      label: "Email",
                      value: "techinmystyle@gmail.com",
                      href: "mailto:techinmystyle@gmail.com",
                    },
                    {
                      key: "yt",
                      icon: "bi bi-youtube",
                      label: "YouTube",
                      value: "@TECHINMYSTYLE",
                      href: "https://www.youtube.com/@TECHINMYSTYLE",
                    },
                    {
                      key: "tg",
                      icon: "bi bi-telegram",
                      label: "Telegram",
                      value: "Tech_in_my_style_bot",
                      href: "https://t.me/Tech_in_my_style_bot",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.85rem",
                      }}
                    >
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: "8px",
                          background: "rgba(38,77,228,0.08)",
                          border: "1px solid rgba(38,77,228,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          color: P,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        <i className={item.icon} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "var(--color-text-faint)",
                          }}
                        >
                          {item.label}
                        </div>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("mailto") ? undefined : "_blank"
                          }
                          rel={
                            item.href.startsWith("mailto")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color: P,
                            textDecoration: "none",
                            transition: "opacity 0.15s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.opacity = "0.72")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.opacity = "1")
                          }
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CSS terminal */}
              <div
                style={{
                  background: "#0d1117",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                }}
                aria-label="Contact terminal"
              >
                {/* Terminal bar */}
                <div
                  style={{
                    background: "#161b22",
                    padding: "0.6rem 1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {[
                    "#ff5f57",
                    "#ffbd2e",
                    "#28ca41",
                  ].map((c) => (
                    <span
                      key={c}
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: c,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                  ))}
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "#8b949e",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <i
                      className="bi bi-terminal-fill"
                      style={{ color: P, fontSize: "0.8rem" }}
                      aria-hidden="true"
                    />
                    contact.css
                  </span>
                </div>

                {/* Terminal body */}
                <div
                  style={{
                    padding: "1.25rem 1.4rem",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.15rem",
                    overflowY: "auto",
                    flex: 1,
                  }}
                >
                  {[
                    { prompt: true, cmd: " /* CSS IN MY STYLE */" },
                    { out: "🎨 Connecting to TECH IN MY STYLE..." },
                    { out: "✅ Connection established!" },
                    { prompt: true, cmd: " .community {" },
                    { out: "  color: #264de4;" },
                    { out: "  display: flex;" },
                    { out: "  align-items: center;" },
                    { prompt: true, cmd: " }" },
                    { prompt: true, cmd: " reach_out --email" },
                    { out: "📧 techinmystyle@gmail.com" },
                    { prompt: true, cmd: " join --community" },
                    { out: "🚀 Welcome to CSS IN MY STYLE!", glow: true },
                    { cursor: true },
                  ].map((line, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.4rem",
                        color: line.prompt
                          ? "#98c379"
                          : line.glow
                            ? "#79b8ff"
                            : line.cursor
                              ? "#264de4"
                              : "#8b949e",
                        paddingLeft: line.out ? "1.2rem" : 0,
                      }}
                    >
                      {line.prompt && (
                        <span style={{ color: P, fontWeight: 700 }}>$</span>
                      )}
                      {line.cmd && <span>{line.cmd}</span>}
                      {line.out && <span>{line.out}</span>}
                      {line.cursor && (
                        <>
                          <span style={{ color: P, fontWeight: 700 }}>$</span>
                          <span
                            style={{
                              color: P,
                              animation: "cnCaret 1s step-end infinite",
                            }}
                            aria-hidden="true"
                          >
                            █
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ STATS STRIP ══════════ */}
        <section
          style={{
            background: "linear-gradient(135deg, #264de4, #2965f1)",
            padding: "3.5rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
          aria-label="Community statistics"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: "bi bi-braces",
                value: "100+",
                label: "CSS Properties",
                color: "#fff",
              },
              {
                icon: "bi bi-people-fill",
                value: "10K+",
                label: "Community Members",
                color: "#fff",
              },
              {
                icon: "bi bi-play-circle-fill",
                value: "3",
                label: "Live Demos",
                color: "#fff",
              },
              {
                icon: "bi bi-heart-fill",
                value: "100%",
                label: "Free Forever",
                color: "#fff",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{ textAlign: "center", color: "#fff", padding: "1rem" }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    margin: "0 auto 0.85rem",
                    backdropFilter: "blur(4px)",
                    transition:
                      "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1.15) rotate(-5deg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "")
                  }
                  aria-hidden="true"
                >
                  <i className={stat.icon} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.88,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section
          style={{
            padding: "5.5rem 2rem 6rem",
            background: "var(--color-bg-alt)",
            transition: "background 0.3s ease",
          }}
          aria-labelledby="faq-heading"
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.35rem 1.1rem",
                  background:
                    "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
                  border: "1px solid rgba(38,77,228,0.15)",
                  borderRadius: "9999px",
                  color: P,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                <i className="bi bi-question-circle-fill" aria-hidden="true" />
                FAQ
              </div>
              <h2
                id="faq-heading"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "var(--color-text)",
                  margin: "0 0 0.85rem",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  maxWidth: "620px",
                  margin: "0 auto",
                  color: "var(--color-text-muted)",
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              >
                Got questions? Here are answers to the most common things our
                CSS community asks.
              </p>
            </div>

            <div
              style={{
                maxWidth: "780px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {FAQS.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA BANNER ══════════ */}
        <section
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #264de4, #2965f1)",
            padding: "6rem 2rem",
            textAlign: "center",
            overflow: "hidden",
          }}
          aria-labelledby="cta-connect-heading"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
            aria-hidden="true"
          />
          {[
            { w: 320, h: 320, top: -100, left: -80, o: 0.12 },
            { w: 260, h: 260, bottom: -80, right: -60, o: 0.1 },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: b.w,
                height: b.h,
                top: b.top,
                left: b.left,
                bottom: b.bottom,
                right: b.right,
                borderRadius: "50%",
                filter: "blur(60px)",
                background: `rgba(255,255,255,${b.o})`,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />
          ))}

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.20)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "#fff",
                margin: "0 auto 1.5rem",
                backdropFilter: "blur(8px)",
                animation: "cnIconPulse 3s ease-in-out infinite",
              }}
              aria-hidden="true"
            >
              <i className="bi bi-rocket-takeoff-fill" />
            </div>
            <h2
              id="cta-connect-heading"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Start Learning CSS Today
            </h2>
            <p
              style={{
                maxWidth: "580px",
                margin: "0 auto 2.5rem",
                color: "rgba(255,255,255,0.88)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
              }}
            >
              Explore our free, comprehensive CSS reference and interactive
              playground. No account. No cost. Just beautiful styling.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/css"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "14px",
                  background: "#fff",
                  color: P,
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0f4ff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.12)";
                }}
              >
                <i className="bi bi-braces-asterisk" aria-hidden="true" />
                CSS Reference
              </Link>
              <Link
                to="/compiler"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "14px",
                  background: "transparent",
                  border: "2px solid rgba(255,255,255,0.75)",
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <i className="bi bi-terminal-fill" aria-hidden="true" />
                Try Playground
              </Link>
            </div>
          </div>
        </section>
      </main>



      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: 46,
          height: 46,
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #264de4, #2965f1)",
          color: "#fff",
          fontSize: "1.15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 900,
          boxShadow: "0 4px 16px rgba(38,77,228,0.30)",
          opacity: showBackTop ? 1 : 0,
          pointerEvents: showBackTop ? "auto" : "none",
          transform: showBackTop
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.85)",
          transition:
            "opacity 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-4px) scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 8px 22px rgba(38,77,228,0.40)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showBackTop
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.85)";
          e.currentTarget.style.boxShadow =
            "0 4px 16px rgba(38,77,228,0.30)";
        }}
      >
        <i className="bi bi-arrow-up" aria-hidden="true" />
      </button>
    </div>
  );
}
