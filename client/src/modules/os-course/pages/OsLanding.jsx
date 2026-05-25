import { useNavigate } from 'react-router-dom';
import OsFooter from '../components/OsFooter';
import PopularCourses from '../../../components/PopularCourses';

const features = [
  { code: 'PROC', title: 'Process Management', desc: 'Scheduling, PCBs, context switching, IPC' },
  { code: 'SYNC', title: 'Threads & Concurrency', desc: 'Mutexes, semaphores, deadlocks, race conditions' },
  { code: 'MEM', title: 'Memory Management', desc: 'Paging, virtual memory, TLB, page replacement' },
  { code: 'FS', title: 'File Systems', desc: 'Inodes, allocation methods, journaling, VFS' },
  { code: 'I/O', title: 'I/O Systems', desc: 'DMA, disk scheduling, RAID, buffering' },
  { code: 'SEC', title: 'Security', desc: 'Access control, authentication, CIA triad' },
];

const stats = [
  { value: '10', label: 'Modules' },
  { value: '50+', label: 'Code Examples' },
  { value: '30+', label: 'Quiz Questions' },
  { value: '5', label: 'Visual Labs' },
];

export default function OsLanding() {
  const navigate = useNavigate();

  return (
    <main className="os-landing">
      <nav className="os-landing-nav">
        <div className="os-landing-brand">
          <span className="os-landing-logo">OS</span>
          <span>Kernel <strong>Lab</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="os-secondary-btn" onClick={() => navigate('/courses')}>
            ← Courses
          </button>
          <button className="os-primary-btn" onClick={() => navigate('/os-course/overview')}>
            Start Learning
          </button>
        </div>
      </nav>

      <section className="os-hero">
        <div className="os-hero-copy">
          <span className="os-hero-badge">
            <span />
            Interactive Operating Systems Course
          </span>
          <h1>
            Master <span>Operating Systems</span> with visual labs.
          </h1>
          <p>
            Learn kernel concepts, processes, memory, file systems, security, and real-world OS internals with
            visualizations, code examples, quizzes, and interview-ready explanations.
          </p>
          <div className="os-hero-actions">
            <button className="os-primary-btn" onClick={() => navigate('/os-course/overview')}>
              Explore Course
            </button>
            <button className="os-secondary-btn" onClick={() => navigate('/os-course/introduction')}>
              Start Module 1
            </button>
          </div>
        </div>

        <div className="os-hero-terminal" aria-label="Operating system boot terminal preview">
          <div className="os-terminal-top">
            <span />
            <span />
            <span />
            <strong>kernel.boot</strong>
          </div>
          <div className="os-terminal-body">
            <p><em>$</em> load kernel modules</p>
            <p><strong>[OK]</strong> scheduler initialized</p>
            <p><strong>[OK]</strong> memory manager online</p>
            <p><strong>[OK]</strong> file system mounted</p>
            <p><strong>[RUN]</strong> user space ready</p>
          </div>
        </div>
      </section>

      <section className="os-stats-grid" aria-label="Course statistics">
        {stats.map((s) => (
          <div key={s.label} className="os-stat-card">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="os-feature-section">
        <div className="os-section-heading">
          <span>What you will learn</span>
          <h2>Every core OS concept, redesigned for clarity.</h2>
        </div>
        <div className="os-feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="os-feature-card">
              <span>{feature.code}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="os-final-cta" style={{ marginBottom: 0 }}>
        <div>
          <span>Ready to go deep?</span>
          <h2>Build real OS intuition, not just notes.</h2>
          <p>Code examples in C, Python and Java. Quizzes. Visualizations. Interview prep.</p>
          <button className="os-primary-btn" onClick={() => navigate('/os-course/overview')}>
            Enter the Course
          </button>
        </div>
      </section>

      <PopularCourses />

      <OsFooter />
    </main>
  );
}
