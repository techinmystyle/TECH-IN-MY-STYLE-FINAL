import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const LAST_UPDATED  = 'May 26, 2025';
const SITE_NAME     = 'Tech In My Style';
const CONTACT_EMAIL = 'techinmystyle@gmail.com';
const SITE_URL      = 'https://techinmystyle.com';

const sections = [
  { id: 'team',        label: 'About This Website' },
  { id: 'general',    label: 'General Disclaimer' },
  { id: 'educational',label: 'Educational Content' },
  { id: 'ads',        label: 'Advertising Disclaimer' },
  { id: 'accuracy',   label: 'Accuracy of Information' },
  { id: 'external',   label: 'External Links' },
  { id: 'contact',    label: 'Contact Us' },
];

export default function Disclaimer() {
  useEffect(() => {
    document.title = `Disclaimer — ${SITE_NAME}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">

      {/* ── Header ── */}
      <header className="legal-page__header">
        <Link to="/" className="legal-page__back">
          <i className="bi bi-arrow-left" aria-hidden="true" /> Back to Home
        </Link>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <span className="legal-page__badge">
            <i className="bi bi-exclamation-triangle-fill" aria-hidden="true" />
            Disclaimer
          </span>
        </div>

        <h1 className="legal-page__title">Disclaimer</h1>
        <p className="legal-page__subtitle">
          Important information about the nature of content on{' '}
          <strong>{SITE_NAME}</strong> and limitations of our liability.
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
              <li key={id}><a href={`#${id}`}>{label}</a></li>
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
            <strong>Tech In My Style</strong> is an original educational website built
            entirely from the ground up by a team of three passionate individuals. Every
            course, every feature, and every line of code is the result of genuine independent
            work. We have not violated any third-party policies or stolen any content or code.
          </p>

          <div className="legal-highlight">
            <strong>💡 Website Idea &amp; Vision:</strong> Tech In My Style was conceptualised
            by <strong>G. Rama Krishna Prasad</strong>, who formed the team and led the vision
            of building a free, high-quality technology education platform.
          </div>

          <p><strong>Team &amp; Course Contributions:</strong></p>
          <ul>
            <li>
              <strong>G. Rama Krishna Prasad</strong> — Founder, UI/UX Designer &amp; Full-Stack Developer.
              Responsible for the complete website design and user experience. Also created the
              HTML, CSS, JavaScript Basic, JavaScript Intermediate, and JavaScript Advanced courses.
            </li>
            <li>
              <strong>Syed Asadullah</strong> — Developer &amp; Course Creator.
              Created the Java, Python, and C Programming courses.
            </li>
            <li>
              <strong>Sk Rameez Basha</strong> — Lead Developer &amp; Major Contributor.
              Created the majority of courses on the platform: AI, Machine Learning, Deep Learning,
              NLP, Generative AI, Data Science, DSA, Database, Operating Systems, System Design,
              Full Stack Python, and Full Stack Java.
            </li>
          </ul>

          <p>
            This site is a testament to what a small, dedicated team can build. We are fully
            accountable for all content and code published here.
          </p>
        </section>

        {/* 2. General Disclaimer */}
        <section id="general" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">2</span>
            General Disclaimer
          </h2>
          <p>
            The information provided on <strong>{SITE_NAME}</strong> (
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a>)
            is for general educational and informational purposes only.
          </p>
          <p>
            While we strive to keep our content accurate and up-to-date, we make no
            representations or warranties of any kind — express or implied — about the
            completeness, accuracy, reliability, suitability, or availability of the
            information, products, services, or related graphics contained on the website.
          </p>
          <div className="legal-highlight">
            <strong>Use at Your Own Risk:</strong> Any reliance you place on information
            from this website is strictly at your own risk. {SITE_NAME} shall not be
            liable for any loss or damage arising from your use of this site.
          </div>
        </section>

        {/* 3. Educational Content */}
        <section id="educational" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">3</span>
            Educational Content Disclaimer
          </h2>
          <p>
            All courses, tutorials, and learning materials on <strong>{SITE_NAME}</strong>
            are provided for <strong>educational purposes only</strong>.
          </p>
          <ul>
            <li>
              <strong>No Guarantee of Employment:</strong> Completing our courses does not
              guarantee employment, promotion, or any specific career outcome.
            </li>
            <li>
              <strong>Not Professional Advice:</strong> Content on this site is not a
              substitute for professional software engineering, IT consulting, or career advice.
            </li>
            <li>
              <strong>Technology Changes:</strong> The technology and programming landscape
              evolves rapidly. Some content may become outdated. Always verify information
              against official documentation.
            </li>
            <li>
              <strong>Code Examples:</strong> Code samples are provided for learning purposes.
              They may not be production-ready and should be reviewed before use in real
              applications.
            </li>
            <li>
              <strong>Interview Questions:</strong> Interview questions and answers are
              based on common industry practices and may vary by company or role.
            </li>
          </ul>
        </section>

        {/* 4. Advertising Disclaimer */}
        <section id="ads" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">4</span>
            Advertising &amp; Third-Party Content Disclaimer
          </h2>
          <p>
            <strong>{SITE_NAME}</strong> participates in the <strong>Google AdSense</strong>{' '}
            advertising program. This means:
          </p>
          <ul>
            <li>
              <strong>We display ads:</strong> Google and its partners may display
              advertisements on our pages. These ads are selected automatically based
              on page content and user interests.
            </li>
            <li>
              <strong>We do not endorse advertisers:</strong> The appearance of an
              advertisement on our site does not constitute our endorsement of the
              advertiser's products, services, or views.
            </li>
            <li>
              <strong>We earn revenue from ads:</strong> We may receive compensation
              when you click on or view advertisements. This revenue helps us keep our
              courses free for all users.
            </li>
            <li>
              <strong>Ad content is not our responsibility:</strong> We are not responsible
              for the accuracy, legality, or content of external advertisements or the
              practices of advertisers.
            </li>
          </ul>
          <div className="legal-highlight">
            <strong>FTC Disclosure:</strong> In compliance with the Federal Trade Commission's
            guidelines concerning the use of endorsements and testimonials in advertising,
            we disclose that this website may receive compensation through advertising.
          </div>
        </section>

        {/* 5. Accuracy */}
        <section id="accuracy" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">5</span>
            Accuracy of Information
          </h2>
          <p>
            We make every reasonable effort to ensure that the content on{' '}
            <strong>{SITE_NAME}</strong> is accurate, complete, and current. However:
          </p>
          <ul>
            <li>Technology documentation and best practices change frequently</li>
            <li>Programming languages release new versions that may change syntax or behavior</li>
            <li>Interview questions and expected answers may vary by company culture and role</li>
            <li>Code examples are simplified for teaching purposes and may not cover all edge cases</li>
          </ul>
          <p>
            We strongly encourage users to refer to official documentation (MDN Web Docs,
            Python.org, Oracle Java Docs, etc.) for authoritative and up-to-date information.
          </p>
          <p>
            If you find any inaccuracy or outdated information, please report it to us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We appreciate your
            help in keeping our content accurate.
          </p>
        </section>

        {/* 6. External Links */}
        <section id="external" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">6</span>
            External Links Disclaimer
          </h2>
          <p>
            Our website may contain links to external websites, including YouTube videos,
            documentation sites, GitHub repositories, and other educational resources.
            These links are provided for your convenience and reference.
          </p>
          <p>
            <strong>{SITE_NAME}</strong> has no control over the content, privacy practices,
            or availability of external websites. We do not accept responsibility or liability
            for:
          </p>
          <ul>
            <li>The content or accuracy of externally linked websites</li>
            <li>Changes made to externally linked content after we reference it</li>
            <li>Any damages or losses arising from clicking on external links</li>
            <li>The privacy policies or practices of external websites</li>
          </ul>
          <p>
            The inclusion of any link does not necessarily imply a recommendation or
            endorsement of the linked website by {SITE_NAME}.
          </p>
        </section>

        {/* 7. Contact */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">7</span>
            Contact Us
          </h2>
          <p>
            If you have any questions about this Disclaimer or our content, please reach out:
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
