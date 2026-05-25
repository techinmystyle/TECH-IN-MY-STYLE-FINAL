import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const LAST_UPDATED  = 'May 26, 2025';
const SITE_NAME     = 'Tech In My Style';
const CONTACT_EMAIL = 'techinmystyle@gmail.com';
const SITE_URL      = 'https://techinmystyle.com';

const sections = [
  { id: 'team',         label: 'About This Website' },
  { id: 'acceptance',   label: 'Acceptance of Terms' },
  { id: 'description',  label: 'Service Description' },
  { id: 'accounts',     label: 'User Accounts' },
  { id: 'conduct',      label: 'Acceptable Use' },
  { id: 'content',      label: 'Content & Copyright' },
  { id: 'ads',          label: 'Advertising' },
  { id: 'disclaimer',   label: 'Disclaimer of Warranties' },
  { id: 'liability',    label: 'Limitation of Liability' },
  { id: 'termination',  label: 'Termination' },
  { id: 'governing',    label: 'Governing Law' },
  { id: 'changes',      label: 'Changes to Terms' },
  { id: 'contact',      label: 'Contact Us' },
];

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = `Terms & Conditions — ${SITE_NAME}`;
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
            <i className="bi bi-file-earmark-text-fill" aria-hidden="true" />
            Terms &amp; Conditions
          </span>
        </div>

        <h1 className="legal-page__title">Terms &amp; Conditions</h1>
        <p className="legal-page__subtitle">
          Please read these terms carefully before using <strong>{SITE_NAME}</strong>.
          By accessing our platform, you agree to be bound by these terms.
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
            <strong>Tech In My Style</strong> is an original, independently developed educational
            platform. The entire platform — including all course content, source code, UI design,
            and architecture — was created from scratch by a team of three dedicated members.
            No content has been stolen, plagiarised, or built in violation of any third-party policies.
          </p>

          <div className="legal-highlight">
            <strong>💡 Website Idea &amp; Vision:</strong> The concept for Tech In My Style was
            born from the vision of <strong>G. Rama Krishna Prasad</strong>, who founded the project
            with the mission of delivering free, quality tech education to students everywhere.
          </div>

          <p><strong>Our Team &amp; Contributions:</strong></p>
          <ul>
            <li>
              <strong>G. Rama Krishna Prasad</strong> — Founder, UI/UX Designer &amp; Full-Stack Developer.
              Designed and developed the entire website interface. Created courses: HTML, CSS,
              JavaScript Basic, JavaScript Intermediate, and JavaScript Advanced.
            </li>
            <li>
              <strong>Syed Asadullah</strong> — Developer &amp; Course Creator.
              Created the Java, Python, and C Programming courses.
            </li>
            <li>
              <strong>Sk Rameez Basha</strong> — Lead Developer &amp; Largest Contributor.
              Created all remaining courses: AI, Machine Learning, Deep Learning, NLP, Generative AI,
              Data Science, DSA, Database, Operating Systems, System Design, Full Stack Python,
              and Full Stack Java — the single largest contributor to the course library.
            </li>
          </ul>

          <p>
            All work on this platform is original and proprietary. We are proud of what we have
            built and stand behind the authenticity of every course and feature on this site.
          </p>
        </section>

        {/* 2. Acceptance */}
        <section id="acceptance" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">2</span>
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using <strong>{SITE_NAME}</strong> ("the Site", "we", "us", "our"),
            located at <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a>,
            you agree to be bound by these Terms and Conditions and our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>, incorporated herein by reference.
          </p>
          <p>
            If you do not agree to these terms, please do not use our website. These terms
            constitute a legally binding agreement between you and {SITE_NAME}.
          </p>
          <div className="legal-highlight">
            <strong>Effective Date:</strong> These Terms apply from {LAST_UPDATED} and supersede
            all prior agreements between you and {SITE_NAME}.
          </div>
        </section>

        {/* 3. Service Description */}
        <section id="description" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">3</span>
            Service Description
          </h2>
          <p>
            <strong>{SITE_NAME}</strong> is an educational platform providing technology
            and programming courses. Our services include:
          </p>
          <ul>
            <li>Free access to course content including HTML, CSS, JavaScript, Python, Java, C, and more</li>
            <li>AI, Machine Learning, Deep Learning, NLP, and Data Science courses</li>
            <li>System Design, DSA, Database, and Operating Systems courses</li>
            <li>Full Stack development courses</li>
            <li>Interactive code examples, interview questions, and MCQ practice</li>
            <li>Community features including leaderboard and feedback system</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of our services
            at any time without prior notice.
          </p>
        </section>

        {/* 4. User Accounts */}
        <section id="accounts" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">4</span>
            User Accounts
          </h2>
          <p>
            To access certain features of the platform, you must create an account. By
            creating an account, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain the security of your password and account credentials</li>
            <li>Immediately notify us of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Be at least 13 years of age to create an account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms
            or that we determine, in our sole discretion, are being used inappropriately.
          </p>
        </section>

        {/* 5. Acceptable Use */}
        <section id="conduct" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">5</span>
            Acceptable Use
          </h2>
          <p>When using our platform, you agree <strong>NOT</strong> to:</p>
          <ul>
            <li>Attempt to gain unauthorized access to any portion of the site or its systems</li>
            <li>Use the site to distribute malware, spam, or any harmful content</li>
            <li>Scrape, copy, or reproduce course content for commercial purposes</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Engage in any activity that disrupts or interferes with the site's operation</li>
            <li>Use automated tools (bots, scrapers) to access content without permission</li>
            <li>Share your account credentials with others</li>
            <li>Post or transmit any content that is unlawful, harmful, or offensive</li>
          </ul>
          <p>
            Violation of these terms may result in immediate termination of your account
            without notice.
          </p>
        </section>

        {/* 6. Content & Copyright */}
        <section id="content" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">6</span>
            Content &amp; Intellectual Property
          </h2>
          <p>
            All content on <strong>{SITE_NAME}</strong> — including but not limited to text,
            graphics, code examples, course materials, logos, and design — is the intellectual
            property of {SITE_NAME} or its content suppliers and is protected by applicable
            copyright, trademark, and other intellectual property laws.
          </p>
          <p>You are granted a limited, non-exclusive, non-transferable license to:</p>
          <ul>
            <li>Access and view course content for your personal, non-commercial educational use</li>
            <li>Copy code examples for personal learning and practice projects</li>
          </ul>
          <p>You may <strong>not</strong>:</p>
          <ul>
            <li>Reproduce, distribute, or republish course content on other platforms</li>
            <li>Use our content for commercial purposes without prior written consent</li>
            <li>Remove or alter any copyright notices or proprietary markings</li>
            <li>Create derivative works based on our content for redistribution</li>
          </ul>
          <p>
            For permissions beyond this license, please contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>

        {/* 7. Advertising */}
        <section id="ads" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">7</span>
            Advertising
          </h2>
          <p>
            <strong>{SITE_NAME}</strong> may display advertisements served by{' '}
            <strong>Google AdSense</strong> and other advertising networks. By using our site,
            you acknowledge:
          </p>
          <ul>
            <li>Third-party advertisers may place cookies on your device to serve relevant ads</li>
            <li>We do not control the content of third-party advertisements</li>
            <li>Clicking on advertisements may take you to third-party websites governed by their own terms</li>
            <li>We are not responsible for any products, services, or content advertised by third parties</li>
          </ul>
          <p>
            Revenue from advertising helps us keep our courses free. We appreciate your
            understanding. You can opt out of personalized ads via{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>
        </section>

        {/* 8. Disclaimer of Warranties */}
        <section id="disclaimer" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">8</span>
            Disclaimer of Warranties
          </h2>
          <p>
            THE SITE AND ITS CONTENT ARE PROVIDED ON AN <strong>"AS IS"</strong> AND{' '}
            <strong>"AS AVAILABLE"</strong> BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Warranties that the site will be uninterrupted, error-free, or secure</li>
            <li>Warranties regarding the accuracy or completeness of course content</li>
            <li>Warranties that the site is free from viruses or other harmful components</li>
          </ul>
          <p>
            Course content is provided for educational purposes only. We do not guarantee
            employment, certification, or any specific outcome from completing our courses.
          </p>
        </section>

        {/* 9. Limitation of Liability */}
        <section id="liability" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">9</span>
            Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, <strong>{SITE_NAME.toUpperCase()}</strong>{' '}
            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Loss of profits, revenue, or data</li>
            <li>Costs of substitute services</li>
            <li>Any damages resulting from your use of or inability to use the site</li>
            <li>Unauthorized access to or alteration of your data</li>
          </ul>
          <p>
            Our total liability to you for any claims arising from your use of the site
            shall not exceed the amount you have paid us in the past 12 months (if any).
          </p>
        </section>

        {/* 10. Termination */}
        <section id="termination" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">10</span>
            Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your account and access to the site
            at our sole discretion, without notice, for conduct that we believe:
          </p>
          <ul>
            <li>Violates these Terms and Conditions</li>
            <li>Is harmful to other users, third parties, or the site's integrity</li>
            <li>Is fraudulent or abusive</li>
          </ul>
          <p>
            You may terminate your account at any time by contacting us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Upon termination,
            your right to use the site ceases immediately.
          </p>
        </section>

        {/* 11. Governing Law */}
        <section id="governing" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">11</span>
            Governing Law
          </h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with
            the laws of <strong>India</strong>, specifically applicable laws of{' '}
            <strong>Andhra Pradesh</strong>, without regard to its conflict of law provisions.
          </p>
          <p>
            Any disputes arising from these terms or your use of the site shall be subject
            to the exclusive jurisdiction of the courts in Andhra Pradesh, India.
          </p>
        </section>

        {/* 12. Changes */}
        <section id="changes" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">12</span>
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. We will
            notify users of significant changes by updating the "Last Updated" date at the
            top of this page.
          </p>
          <p>
            Your continued use of the site after any changes constitutes your acceptance
            of the revised Terms. If you do not agree with the changes, you must stop using
            the site.
          </p>
        </section>

        {/* 13. Contact */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section__heading">
            <span className="legal-section__num">13</span>
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
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
