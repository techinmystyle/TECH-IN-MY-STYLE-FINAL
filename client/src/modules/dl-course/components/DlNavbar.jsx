import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DlNavbar.css';

/* ─── Nav links ─────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',          to: '/dl-course',        icon: 'bi bi-house-door-fill',  pageKey: 'home'   },
  { label: 'Topics',        to: '/dl-course/topics', icon: 'bi bi-grid-3x3-gap-fill', pageKey: 'topics' },
];

const BACK_LINK = {
  label: '← Courses',
  to: '/courses',
  icon: 'bi bi-arrow-left-circle-fill',
};

/* ─── Active page key ───────────────────────────────────────────────────── */
function getPageKey(pathname) {
  if (pathname === '/dl-course' || pathname === '/dl-course/') return 'home';
  if (pathname.startsWith('/dl-course/topics')) return 'topics';
  return '';
}

/* ─── DL Navbar ─────────────────────────────────────────────────────────── */
export default function DlNavbar() {
  const location    = useLocation();
  const activeKey   = getPageKey(location.pathname);

  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const drawerRef    = useRef(null);
  const hamburgerRef = useRef(null);

  /* ── Scroll: progress + shadow ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Escape closes drawer ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* ── Focus first item when drawer opens ── */
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const el = drawerRef.current.querySelector('a[href], button:not([disabled])');
      el?.focus();
    }
  }, [menuOpen]);

  const closeMenu  = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <>
      {/* ── Skip link ── */}
      <a href="#main-content" className="dl-navbar__skip">Skip to content</a>

      {/* ── Main navbar ── */}
      <header
        className={`dl-navbar${scrolled ? ' dl-navbar--scrolled' : ''}`}
        role="banner"
      >
        {/* Scroll progress bar */}
        <div
          className="dl-navbar__progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <div className="dl-navbar__inner">

          {/* ── Logo ── */}
          <Link
            to="/dl-course"
            className="dl-navbar__logo"
            aria-label="Deep Learning In My Style — Home"
            onClick={closeMenu}
          >
            <span className="dl-navbar__logo-deep">Deep</span>
            <span className="dl-navbar__logo-learning">Learning</span>
            <span className="dl-navbar__logo-suffix"> In My Style</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation">
            <ul className="dl-navbar__nav" role="list">
              {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`dl-navbar__nav-link${activeKey === pageKey ? ' active' : ''}`}
                    aria-current={activeKey === pageKey ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to={BACK_LINK.to} className="dl-navbar__nav-link dl-navbar__back-link">
                  <i className={BACK_LINK.icon} aria-hidden="true" />
                  <span>{BACK_LINK.label}</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Right controls ── */}
          <div className="dl-navbar__controls">
            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              className={`dl-navbar__hamburger${menuOpen ? ' dl-navbar__hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="dl-mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              type="button"
            >
              <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`dl-navbar__overlay${menuOpen ? ' dl-navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        id="dl-mobile-menu"
        ref={drawerRef}
        className={`dl-navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className="dl-navbar__mobile-header">
          <Link
            to="/dl-course"
            className="dl-navbar__logo dl-navbar__logo--mobile"
            onClick={closeMenu}
            aria-label="Deep Learning In My Style — Home"
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="dl-navbar__logo-deep">Deep</span>
            <span className="dl-navbar__logo-learning">Learning</span>
          </Link>
          <button
            className="dl-navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="dl-navbar__mobile-nav" aria-label="Mobile navigation links">
          <ul role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activeKey === pageKey;
              return (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`dl-navbar__mobile-link${isActive ? ' dl-navbar__mobile-link--active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                    {isActive && (
                      <i className="bi bi-check-circle-fill dl-navbar__active-check" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to={BACK_LINK.to}
                className="dl-navbar__mobile-link dl-navbar__mobile-back"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <i className={BACK_LINK.icon} aria-hidden="true" />
                <span>{BACK_LINK.label}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="dl-navbar__mobile-socials">
          <p className="dl-navbar__mobile-socials-label">Follow Us</p>
          <div className="dl-navbar__mobile-socials-row">
            <a
              href="https://www.instagram.com/techinmystyle"
              target="_blank"
              rel="noopener noreferrer"
              className="dl-navbar__social-btn dl-navbar__social-btn--instagram"
              aria-label="Instagram — Tech In My Style"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              className="dl-navbar__social-btn dl-navbar__social-btn--youtube"
              aria-label="YouTube — TECH IN MY STYLE"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="dl-navbar__social-btn dl-navbar__social-btn--telegram"
              aria-label="Telegram — Tech In My Style Bot"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
