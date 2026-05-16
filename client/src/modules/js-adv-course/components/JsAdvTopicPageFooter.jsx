import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllTopics } from "../data/JsAdvTopicsData";
import "../styles/JsAdvTopicPageFooter.css";

/* ─────────────────────────────────────────────────────────────────────────────
   JsAdvTopicPageFooter
   JsAdvFooter bar rendered at the bottom of every individual topic detail page.
   • Prev / Next topic arrows  (derived from the flattened topics list)
   • Course progress bar
   • Back to all topics link
   • Social icons
   • Copyright

   Uses getAllTopics() from JsAdvTopicsData which returns items shaped as:
   { id, title, description, difficulty, time, moduleId, moduleTitle, moduleColor, moduleIcon }
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvTopicPageFooter() {
  const { topic: topicId } = useParams();
  const navigate = useNavigate();
  const allTopics = getAllTopics();

  /* ── Find position in the ordered topic list ── */
  const idx = allTopics.findIndex((t) => t.id === topicId);
  const prev = idx > 0 ? allTopics[idx - 1] : null;
  const next = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

  const progressPct =
    idx !== -1 ? Math.round(((idx + 1) / allTopics.length) * 100) : 0;

  /* ════════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════════ */
  return (
    <footer className="tpf-footer">
      {/* ── Top separator accent line ── */}
      <div className="tpf-accent-line" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
          PREV / NEXT NAVIGATION
      ════════════════════════════════════════════════════════════ */}
      <nav className="tpf-nav" aria-label="Topic page navigation">
        {/* Previous topic */}
        {prev ? (
          <button
            className="tpf-btn tpf-btn--prev"
            onClick={() => navigate(`/js-adv-course/topics/${prev.id}`)}
            aria-label={`Previous topic: ${prev.title}`}
            type="button"
          >
            <i className="bi bi-arrow-left tpf-btn-icon" aria-hidden="true" />
            <span className="tpf-btn-content">
              <span className="tpf-btn-dir">Previous</span>
              <span className="tpf-btn-title">{prev.title}</span>
              {/* moduleTitle comes from getAllTopics() in the existing JsAdvTopicsData */}
              <span className="tpf-btn-cat">{prev.moduleTitle}</span>
            </span>
          </button>
        ) : (
          <div className="tpf-btn-placeholder" aria-hidden="true" />
        )}

        {/* Next topic */}
        {next ? (
          <button
            className="tpf-btn tpf-btn--next"
            onClick={() => navigate(`/js-adv-course/topics/${next.id}`)}
            aria-label={`Next topic: ${next.title}`}
            type="button"
          >
            <span className="tpf-btn-content tpf-btn-content--right">
              <span className="tpf-btn-dir">Next</span>
              <span className="tpf-btn-title">{next.title}</span>
              <span className="tpf-btn-cat">{next.moduleTitle}</span>
            </span>
            <i className="bi bi-arrow-right tpf-btn-icon" aria-hidden="true" />
          </button>
        ) : (
          <div className="tpf-btn-placeholder" aria-hidden="true" />
        )}
      </nav>

      {/* ════════════════════════════════════════════════════════════
          COURSE PROGRESS
      ════════════════════════════════════════════════════════════ */}
      {idx !== -1 && (
        <div
          className="tpf-progress-wrap"
          aria-label={`Course progress: topic ${idx + 1} of ${allTopics.length}`}
        >
          <div
            className="tpf-progress-bar"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="tpf-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="tpf-progress-text">
            <i className="bi bi-check2-circle" aria-hidden="true" />
            Topic {idx + 1} of {allTopics.length}
            &nbsp;&middot;&nbsp;
            {progressPct}% complete
          </span>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          BACK TO ALL TOPICS
      ════════════════════════════════════════════════════════════ */}
      <div className="tpf-back-wrap">
        <Link to="/js-adv-course/topics" className="tpf-back-link">
          <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
          <span>Back to All JsAdvTopics</span>
        </Link>
      </div>

      {/* ════════════════════════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════════════════════════ */}
      <div className="tpf-divider" role="separator" />

      {/* ════════════════════════════════════════════════════════════
          SOCIAL ICONS
      ════════════════════════════════════════════════════════════ */}
      <div
        className="tpf-social"
        role="list"
        aria-label="Follow us on social media"
      >
        <a
          href="https://t.me/Tech_in_my_style_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="tpf-social-link tpf-social-link--telegram"
          aria-label="Follow on Telegram"
          role="listitem"
        >
          <i className="bi bi-telegram" aria-hidden="true" />
        </a>

        <a
          href="https://www.instagram.com/techinmystyle"
          target="_blank"
          rel="noopener noreferrer"
          className="tpf-social-link tpf-social-link--instagram"
          aria-label="Follow on Instagram"
          role="listitem"
        >
          <i className="bi bi-instagram" aria-hidden="true" />
        </a>

        <a
          href="https://www.youtube.com/@TECHINMYSTYLE"
          target="_blank"
          rel="noopener noreferrer"
          className="tpf-social-link tpf-social-link--youtube"
          aria-label="Subscribe on YouTube"
          role="listitem"
        >
          <i className="bi bi-youtube" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/techinmystyle"
          target="_blank"
          rel="noopener noreferrer"
          className="tpf-social-link tpf-social-link--github"
          aria-label="View on GitHub"
          role="listitem"
        >
          <i className="bi bi-github" aria-hidden="true" />
        </a>
      </div>

      {/* ════════════════════════════════════════════════════════════
          COPYRIGHT
      ════════════════════════════════════════════════════════════ */}
      <p className="tpf-copyright">
        <i className="bi bi-c-circle" aria-hidden="true" />
        {new Date().getFullYear()}&nbsp;
        <span className="tpf-copyright-brand">
          JavaScript Advanced In My Style
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
