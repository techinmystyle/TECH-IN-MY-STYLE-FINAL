import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const LAST_UPDATED = 'May 26, 2025';
const SITE_NAME    = 'Tech In My Style';
const CONTACT_EMAIL = 'techinmystyle@gmail.com';
const SITE_URL      = 'https://techinmystyle.com';

const sections = [
  { id: 'team',        label: 'About This Website' },
  { id: 'intro',       label: 'Introduction' },
  { id: 'collection', label: 'Information We Collect' },
  { id: 'usage',      label: 'How We Use Information' },
  { id: 'cookies',    label: 'Cookies & Local Storage' },
  { id: 'ads',        label: 'Google AdSense & Ads' },
  { id: 'third-party',label: 'Third-Party Services' },
  { id: 'children',   label: "Children's Privacy" },
  { id: 'rights',     label: 'Your Rights' },
  { id: 'security',   label: 'Data Security' },
  { id: 'changes',    label: 'Changes to This Policy' },
  { id: 'contact',    label: 'Contact Us' },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy — ${SITE_NAME}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">

      {/* ── Header ── */}
      <header className="legal-page__header">
        <Link to="/" className="legal-page__back">
          <i className="bi bi-arrow-left" aria-hidden="true" /> Back to Home
        </Link>

        <div className="legal-badge" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <span className="legal-page__badge">
            <i className="bi bi-shield-lock-fill" aria-hidden="true" />
            Privacy Policy
          </span>
        </div>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__subtitle">
          We are committed to protecting your privacy. This policy explains how{' '}
          <strong>{SITE_NAME}</strong> collects, uses, and safeguards your information.
        </p>
        <div className="legal-page__meta">
          <span className="legal-page__meta-item">
            <i className="bi bi-calendar3" aria-hidden="true" />
            Last Updated: {LAST_UPDATED}
          </span>
          <span className="legal-page__meta-item">
            <i className="bi bi-globe" aria-hidden="true" />
            {SITE_URL}
          </span>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="legal-page__content">

        {/* Table of Contents */}
        <nav className="legal-toc" aria-label="Table of contents">
          <p className="legal-toc__title">Contents</p>
          <ul className="legal-toc__list">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. About This Website & Our Team */}
        <section id="team" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">1</span>
            About This Website &amp; Our Team
          </h2>
          <p>
            <strong>Tech In My Style</strong> is an original educational website conceived,
            designed, and built entirely by a dedicated team of three members. Every line of
            code, every course, and every design element on this platform is our own authentic
            work — no code was copied or stolen, and no third-party policies have been violated.
          </p>

          <div className="legal-highlight">
            <strong>💡 Website Idea &amp; Vision:</strong> The concept and vision for Tech In My Style
            was created by <strong>G. Rama Krishna Prasad</strong>, who brought the team together
            with the goal of making technology education free and accessible to everyone.
          </div>

          <p><strong>Our Team:</strong></p>
          <ul>
            <li>
              <strong>G. Rama Krishna Prasad</strong> — Founder &amp; Full-Stack Developer / UI-UX Designer.
              Responsible for the complete website design, UI/UX, and created the following courses:
              HTML, CSS, JavaScript Basic, JavaScript Intermediate, and JavaScript Advanced.
            </li>
            <li>
              <strong>Syed Asadullah</strong> — Developer &amp; Course Creator.
              Responsible for the Java, Python, and C Programming courses.
            </li>
            <li>
              <strong>Sk Rameez Basha</strong> — Lead Developer &amp; Major Contributor.
              Responsible for all remaining courses on the platform including AI, Machine Learning,
              Deep Learning, NLP, Generative AI, Data Science, DSA, Database, Operating Systems,
              System Design, Full Stack Python, and Full Stack Java — making him the largest
              single contributor to the course library.
            </li>
          </ul>

          <p>
            This platform is a product of genuine hard work, passion, and collaboration. We take
            full ownership of all content and code present on this website. If you have any concerns
            about content originality, please contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>

        {/* 2. Introduction */}
        <section id="intro" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">2</span>
            Introduction
          </h2>
          <p>
            Welcome to <strong>{SITE_NAME}</strong> ("{SITE_URL}"). We provide free and
            premium technology education courses covering HTML, CSS, JavaScript, Python, Java,
            C, Artificial Intelligence, Machine Learning, Deep Learning, Natural Language
            Processing, Data Science, and more.
          </p>
          <p>
            This Privacy Policy applies to all users of our website and explains what
            information we collect, how we use it, and what choices you have. By using our
            website, you agree to the practices described in this policy.
          </p>
          <div className="legal-highlight">
            <strong>Summary:</strong> We collect minimal data necessary to run the platform.
            We do not sell your personal information to any third party.
          </div>
        </section>

        {/* 3. Information We Collect */}
        <section id="collection" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">3</span>
            Information We Collect
          </h2>
          <p>We collect the following types of information:</p>

          <p><strong>Account Information (provided by you):</strong></p>
          <ul>
            <li>Username and email address — used for account creation and login</li>
            <li>Password — stored securely using industry-standard hashing (bcrypt)</li>
          </ul>

          <p><strong>Automatically Collected Information:</strong></p>
          <ul>
            <li>Browser type, operating system, device type</li>
            <li>Pages visited, time spent on pages, referring URLs</li>
            <li>IP address (used for security and fraud prevention only)</li>
          </ul>

          <p><strong>Information Stored Locally (on your device):</strong></p>
          <ul>
            <li>Authentication token (stored in localStorage after login)</li>
            <li>Username, email, and userId stored in localStorage for session persistence</li>
            <li>Course progress and preferences stored in localStorage</li>
          </ul>

          <p>
            We do <strong>not</strong> collect payment information, government IDs, or any
            sensitive personal data beyond what is listed above.
          </p>
        </section>

        {/* 4. How We Use Information */}
        <section id="usage" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">4</span>
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Create and maintain your user account</li>
            <li>Provide access to course content and learning materials</li>
            <li>Send password reset emails when requested</li>
            <li>Improve course content and website functionality</li>
            <li>Ensure platform security and prevent fraudulent access</li>
            <li>Display personalized content based on courses you've viewed</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We will <strong>never</strong> sell, rent, or trade your personal information
            to third-party marketers or advertisers.
          </p>
        </section>

        {/* 5. Cookies & Local Storage */}
        <section id="cookies" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">5</span>
            Cookies &amp; Local Storage
          </h2>
          <p>
            Our website uses <strong>browser localStorage</strong> (not traditional cookies)
            to maintain your login session. This data remains on your device and is not
            transmitted to our servers except during authentication requests.
          </p>
          <p>
            Third-party services we use (such as Google AdSense) may place cookies on your
            device. These cookies are governed by the respective third party's privacy policies.
          </p>
          <p><strong>Types of cookies that may be present:</strong></p>
          <ul>
            <li><strong>Essential:</strong> Required for basic site functionality and authentication</li>
            <li><strong>Analytics:</strong> Used by Google to understand site traffic (anonymized)</li>
            <li><strong>Advertising:</strong> Used by Google AdSense to serve relevant ads</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may
            affect your ability to log in or use certain features of our site.
          </p>
        </section>

        {/* 6. Google AdSense */}
        <section id="ads" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">6</span>
            Google AdSense &amp; Advertising
          </h2>
          <p>
            <strong>{SITE_NAME}</strong> uses <strong>Google AdSense</strong> to display
            advertisements. Google AdSense is an advertising service provided by Google LLC.
            This service uses cookies and similar tracking technologies to serve ads based on
            your prior visits to our website and other websites on the Internet.
          </p>
          <p>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.</p>
          <ul>
            <li>Google may use the DoubleClick cookie to serve ads across the web</li>
            <li>Ads shown may be personalized based on your browsing history</li>
            <li>You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
            </li>
            <li>You can also opt out via the{' '}
              <a href="https://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative opt-out page
              </a>
            </li>
          </ul>
          <div className="legal-highlight">
            <strong>Note:</strong> We do not control the content of advertisements served by
            Google AdSense. For more information on how Google uses data, visit{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Google's Privacy &amp; Terms
            </a>.
          </div>
        </section>

        {/* 7. Third-Party Services */}
        <section id="third-party" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">7</span>
            Third-Party Services
          </h2>
          <p>Our website integrates the following third-party services:</p>
          <ul>
            <li>
              <strong>Google Fonts</strong> — Used for typography. Google may collect usage data.
              See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>.
            </li>
            <li>
              <strong>YouTube (Embedded Videos)</strong> — Course resources may link to YouTube videos.
              YouTube has its own privacy policy.
            </li>
            <li>
              <strong>Telegram Bot</strong> — If you interact with our Telegram bot, Telegram's
              privacy policy applies.
            </li>
            <li>
              <strong>Bootstrap Icons / Font Awesome</strong> — Icon libraries loaded from CDN.
            </li>
          </ul>
          <p>
            We are not responsible for the privacy practices of these third-party services.
            We encourage you to read their privacy policies.
          </p>
        </section>

        {/* 8. Children's Privacy */}
        <section id="children" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">8</span>
            Children's Privacy
          </h2>
          <p>
            Our service is intended for users who are at least <strong>13 years of age</strong>.
            We do not knowingly collect personal information from children under 13. If you are
            a parent or guardian and believe your child has provided us with personal information,
            please contact us immediately at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            If we discover that we have collected personal information from a child under 13
            without parental consent, we will delete that information promptly.
          </p>
        </section>

        {/* 9. Your Rights */}
        <section id="rights" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">9</span>
            Your Rights
          </h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> You can request a copy of the data we hold about you</li>
            <li><strong>Correction:</strong> You can update your account information at any time</li>
            <li><strong>Deletion:</strong> You can request that we delete your account and associated data</li>
            <li><strong>Opt-out:</strong> You can opt out of personalized advertising through Google settings</li>
            <li><strong>Data Portability:</strong> You can request your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            We will respond to your request within <strong>30 days</strong>.
          </p>
        </section>

        {/* 10. Security */}
        <section id="security" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">10</span>
            Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your information:
          </p>
          <ul>
            <li>Passwords are hashed using bcrypt — we never store plain-text passwords</li>
            <li>Authentication uses JWT (JSON Web Tokens) with expiration</li>
            <li>HTTPS encryption for all data transmission</li>
            <li>MongoDB Atlas with access controls and IP whitelisting</li>
          </ul>
          <p>
            While we take all reasonable precautions, no method of transmission over the
            Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        {/* 11. Changes */}
        <section id="changes" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">11</span>
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or for legal, operational, or regulatory reasons. We will notify you
            of significant changes by updating the "Last Updated" date at the top of this page.
          </p>
          <p>
            Your continued use of our website after any changes constitutes your acceptance
            of the updated Privacy Policy. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* 12. Contact */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">12</span>
            Contact Us
          </h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy
            or how we handle your data, please contact us:
          </p>
          <div className="legal-contact-box">
            <p><strong>Tech In My Style</strong></p>
            <p>📧 Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <p>📍 Location: Andhra Pradesh, India</p>
            <p>🌐 Website: <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a></p>
            <p>📱 Telegram: <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer">Tech_in_my_style_bot</a></p>
          </div>
        </section>

      </main>

      {/* ── Footer bar ── */}
      <div className="legal-page__footer-bar">
        <p>© {new Date().getFullYear()} Tech In My Style. All rights reserved.</p>
        <nav className="legal-page__footer-links" aria-label="Legal navigation">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">●</span>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <span aria-hidden="true">●</span>
          <Link to="/disclaimer">Disclaimer</Link>
          <span aria-hidden="true">●</span>
          <Link to="/">Home</Link>
        </nav>
      </div>

    </div>
  );
}
