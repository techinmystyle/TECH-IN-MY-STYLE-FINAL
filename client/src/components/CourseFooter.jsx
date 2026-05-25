import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSE_CATEGORIES } from '../shared/courseLinks';
import './CourseFooter.css';

/* ── Shared social links ── */
const SOCIAL_LINKS = [
  { key: 'telegram',  label: 'Telegram',  href: 'https://t.me/Tech_in_my_style_bot',                     icon: 'bi bi-telegram',  cls: 'cf-social-link--telegram'  },
  { key: 'whatsapp',  label: 'WhatsApp',  href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d', icon: 'bi bi-whatsapp',  cls: 'cf-social-link--whatsapp'  },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tech_in_my_style',             icon: 'bi bi-instagram', cls: 'cf-social-link--instagram' },
  { key: 'youtube',   label: 'YouTube',   href: 'https://www.youtube.com/@TECHINMYSTYLE',                 icon: 'bi bi-youtube',   cls: 'cf-social-link--youtube'   },
];

/* ── Shared contact items ── */
const CONTACT_ITEMS = [
  {
    key: 'email',
    icon: 'bi bi-envelope-fill',
    label: 'Email us',
    value: 'techinmystyle@gmail.com',
    href: 'mailto:techinmystyle@gmail.com',
  },
  {
    key: 'youtube',
    icon: 'bi bi-youtube',
    label: 'YouTube',
    value: '@TECHINMYSTYLE',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
  },
  {
    key: 'instagram',
    icon: 'bi bi-instagram',
    label: 'Instagram',
    value: '@techinmystyle',
    href: 'https://www.instagram.com/tech_in_my_style',
  },
  {
    key: 'telegram',
    icon: 'bi bi-telegram',
    label: 'Telegram',
    value: 'Tech_in_my_style_bot',
    href: 'https://t.me/Tech_in_my_style_bot',
  },
];

/**
 * CourseFooter — Universal footer matching HtmlFooter's exact visual style.
 *
 * Props:
 *  courseName   {string}  e.g. "HTML IN MY STYLE"
 *  courseRoute  {string}  e.g. "/html-course"
 *  tagline      {string}  short description of this course
 *  logoImg      {string}  path to course logo e.g. "/img/HTML.png"
 *  color        {string}  primary brand hex e.g. "#e44d26"
 *  color2       {string}  secondary hex for gradient (defaults to color)
 *  colorRgb     {string}  rgb values only e.g. "227,79,38"
 *  quickLinks   {Array}   [{label, to}] course-specific nav links
 */
export default function CourseFooter({
  courseName,
  courseRoute,
  tagline,
  logoImg,
  color = '#6366f1',
  color2,
  colorRgb = '99,102,241',
  quickLinks = [],
}) {
  const year = new Date().getFullYear();
  const [showBackTop, setShowBackTop] = useState(false);

  const gradColor2 = color2 || color;

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });



  return (
    <footer
      className="cf-footer"
      role="contentinfo"
      style={{
        '--cf-color':  color,
        '--cf-color2': gradColor2,
        '--cf-rgb':    colorRgb,
      }}
    >
      {/* ════════════════════════════════════
          MAIN BODY — 4-column grid
          Brand | Quick Links | Contact | All Courses
          ════════════════════════════════════ */}
      <div className="cf-body">

        {/* ── Column 1: Brand ── */}
        <div className="cf-brand">
          <Link to={courseRoute} className="cf-logo" aria-label={`${courseName} — Home`}>
            {logoImg && (
              <img src={logoImg} alt={courseName} className="cf-logo-img" />
            )}
            <div className="cf-logo-texts">
              <span className="cf-logo-name">{courseName}</span>
              <span className="cf-logo-sub">by Tech In My Style</span>
            </div>
          </Link>

          <div className="cf-brand-divider" aria-hidden="true" />

          <p className="cf-tagline">
            {tagline} Powered by{' '}
            <strong>TECH IN MY STYLE</strong>.
          </p>

          <div className="cf-social" role="list" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ key, label, href, icon, cls }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`cf-social-link ${cls}`}
                aria-label={label}
                title={label}
                role="listitem"
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Column 2: Quick Links (course-specific) ── */}
        <div className="cf-col">
          <h3 className="cf-col-heading">Quick Links</h3>
          <ul className="cf-links" role="list">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="cf-link">
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contact ── */}
        <div className="cf-col">
          <h3 className="cf-col-heading">Contact</h3>
          <ul className="cf-contact-list" role="list">
            {CONTACT_ITEMS.map(({ key, icon, label, value, href }) => (
              <li key={key} className="cf-contact-item">
                <span className="cf-contact-icon" aria-hidden="true">
                  <i className={icon} />
                </span>
                <div className="cf-contact-text">
                  <span className="cf-contact-label">{label}</span>
                  <a
                    href={href}
                    className="cf-contact-link cf-contact-value"
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: All Courses — categorized grid ── */}
        <div className="cf-col cf-col--courses">
          <h3 className="cf-col-heading">All Courses</h3>
          <div className="cf-all-courses-grid">
            {COURSE_CATEGORIES.map(({ category, courses }) => (
              <div key={category} className="cf-course-cat">
                <div className="cf-course-cat-heading">{category}</div>
                <ul className="cf-links" role="list">
                  {courses.map(({ label, href }) => (
                    <li key={href}>
                      <Link to={href} className="cf-link">
                        <i className="bi bi-chevron-right" aria-hidden="true" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ════════════════════════════════════
          BOTTOM BAR
          ════════════════════════════════════ */}
      <div className="cf-bottom">

        <p className="cf-bottom-left">
          <i className="bi bi-c-circle cf-copyright" aria-hidden="true" />
          {year}&nbsp;
          <strong>{courseName}</strong>
          &nbsp;·&nbsp;All rights reserved&nbsp;
          <i className="bi bi-heart-fill cf-heart" aria-hidden="true" />
        </p>

        <div className="cf-bottom-right">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/privacy-policy" className="cf-bottom-link">Privacy Policy</Link>
            <span className="cf-bottom-sep" aria-hidden="true">●</span>
            <Link to="/terms-and-conditions" className="cf-bottom-link">Terms of Use</Link>
            <span className="cf-bottom-sep" aria-hidden="true">●</span>
            <Link to="/disclaimer" className="cf-bottom-link">Disclaimer</Link>
          </span>

          <button
            className="cf-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            type="button"
            style={{
              opacity: showBackTop ? 1 : 0.45,
              pointerEvents: showBackTop ? 'auto' : 'none',
              transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <i className="bi bi-arrow-up" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════
          POWERED BY ROW
          ════════════════════════════════════ */}
      <div className="cf-powered">
        <i className="bi bi-lightning-charge-fill cf-thunder" aria-hidden="true" />
        Powered by&nbsp;
        <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer">
          TECH IN MY STYLE
        </a>
        &nbsp;·&nbsp;Made with&nbsp;
        <i className="bi bi-heart-fill cf-heart" aria-hidden="true" />
        &nbsp;for learners everywhere
      </div>

    </footer>
  );
}
