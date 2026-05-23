import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getTopicById, categories } from "../data/genaiTopics";
import topics from "../data/genaiTopics";
import GenAiSidebar from "../components/GenAiSidebar";
import GenAiCodeBlock from "../components/GenAiCodeBlock";
import GenAiAccordion from "../components/GenAiAccordion";
import GenAiMCQ from "../components/GenAiMCQ";

const tabs = [
  { id: "overview",        label: "Overview"        },
  { id: "code",            label: "Code"            },
  { id: "apps",            label: "Real World"      },
  { id: "interview",       label: "Interview"       },
  { id: "mcq",             label: "MCQ"             },
  { id: "text-resources",  label: "Text Resources"  },
  { id: "video-resources", label: "Video Resources" },
];

export default function TopicPage() {
  const { topicId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [codeLang,  setCodeLang]  = useState("js");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const topic = getTopicById(topicId);

  if (!topic) return (
    <div className="min-h-screen flex items-center justify-center pt-20" style={{ background: "#04040a" }}>
      <div className="text-center">
        <p className="font-display text-6xl font-light mb-6" style={{ color: "rgba(124,58,237,0.2)" }}>◇</p>
        <h2 className="font-display text-3xl font-light text-rr-ivory mb-3">Topic not found</h2>
        <p className="text-rr-stone font-light mb-8">This topic doesn't exist yet.</p>
        <Link to="/genai-course" className="btn-rr-outline">Browse All Topics</Link>
      </div>
    </div>
  );

  const idx  = topics.findIndex(t => t.id === topicId);
  const prev = topics[idx - 1];
  const next = topics[idx + 1];

  const grouped = categories
    .map(cat => ({ ...cat, topics: topics.filter(t => t.category === cat.id) }))
    .filter(c => c.topics.length > 0);

  return (
    <div style={{ background: "#04040a", minHeight: "100vh" }}>
      <div className="container-rr pt-28 pb-20">
        <div className="flex gap-12">
          <GenAiSidebar />

          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase mb-8"
              style={{ color: "rgba(124,58,237,0.35)" }}>
              <Link to="/genai-course" className="transition-colors hover:text-rr-gold">Gen AI</Link>
              <span>—</span>
              <span className="text-rr-gold">{topic.title}</span>
            </div>

            {/* Mobile Topic Selector */}
            <div className="block lg:hidden mb-8 relative z-20">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(124,58,237,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#f1f5f9",
                }}
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-bars-staggered text-xs" style={{ color: "#a78bfa" }} />
                  <span className="text-xs tracking-wider uppercase font-light">Table of Contents</span>
                  <span className="text-xs" style={{ color: "rgba(124,58,237,0.5)" }}>|</span>
                  <span className="text-xs text-rr-gold font-medium truncate max-w-[150px] sm:max-w-[300px]">
                    {topic.title}
                  </span>
                </div>
                <motion.i
                  className="fas fa-chevron-down text-xs"
                  style={{ color: "#a78bfa" }}
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 p-4 rounded-xl max-h-[60vh] overflow-y-auto scrollbar-hide z-50"
                    style={{
                      background: "#080812",
                      border: "1px solid rgba(124,58,237,0.25)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(124,58,237,0.15)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div className="space-y-4">
                      {grouped.map(cat => (
                        <div key={cat.id} className="border-b border-[rgba(124,58,237,0.08)] pb-3 last:border-0 last:pb-0">
                          <p className="text-[10px] tracking-widest uppercase mb-2 px-1 font-bold"
                            style={{ color: "rgba(124,58,237,0.5)" }}>
                            {cat.label}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {cat.topics.map(t => {
                              const active = topicId === t.id;
                              return (
                                <Link
                                  key={t.id}
                                  to={`/genai-course/${t.id}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-2 py-1.5 px-2 text-xs font-light rounded transition-colors duration-150"
                                  style={{
                                    color: active ? "#a78bfa" : "#475569",
                                    background: active ? "rgba(124,58,237,0.08)" : "transparent",
                                  }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: active ? "#a78bfa" : "rgba(124,58,237,0.15)" }} />
                                  {t.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }} className="mb-12">
              <div className="flex flex-wrap gap-3 mb-4">
                {topic.tags.map(tag => (
                  <span key={tag} className="badge-rr text-xs">{tag}</span>
                ))}
                <span className="text-xs tracking-wider uppercase" style={{ color: "rgba(124,58,237,0.35)" }}>
                  {topic.readTime} read
                </span>
              </div>
              <h1 className="font-display font-light text-rr-ivory mb-4"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.1 }}>
                {topic.title}
              </h1>
              <p className="text-rr-stone font-light text-lg leading-relaxed max-w-2xl">{topic.description}</p>
              <div className="gold-line mt-8" />
            </motion.div>

            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide mb-10"
              style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`tab-rr ${activeTab === tab.id ? "active" : ""}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}>

              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-12">
                  {/* Intuition */}
                  <div className="p-8 rounded-2xl" style={{ border: "1px solid rgba(124,58,237,0.18)", background: "rgba(124,58,237,0.03)" }}>
                    <div className="ornament mb-6"><span>Intuition</span></div>
                    <p className="text-rr-ivory font-light text-base leading-relaxed mb-6">{topic.thinking.intuition}</p>
                    <div className="pl-6" style={{ borderLeft: "2px solid rgba(124,58,237,0.3)" }}>
                      <p className="text-xs tracking-widest uppercase mb-2 text-rr-gold-dim">Analogy</p>
                      <p className="text-rr-stone font-light italic leading-relaxed">"{topic.thinking.analogy}"</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="font-display text-2xl font-light text-rr-ivory mb-4">What is it?</h2>
                    <p className="text-rr-stone font-light leading-relaxed text-base">{topic.description_full}</p>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h2 className="font-display text-2xl font-light text-rr-ivory mb-6">Key Points</h2>
                    <div className="space-y-0" style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}>
                      {topic.bullets.map((b, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="flex items-start gap-4 py-4 transition-colors duration-200 group rounded-lg px-2"
                          style={{ borderBottom: "1px solid rgba(124,58,237,0.12)" }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.03)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                          <span className="font-display text-lg font-light mt-0.5 flex-shrink-0"
                            style={{ color: "rgba(124,58,237,0.3)", minWidth: "1.5rem" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-rr-stone font-light text-sm leading-relaxed">{b}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CODE */}
              {activeTab === "code" && (
                <div className="space-y-6">
                  <div className="flex gap-2">
                    {[{ id: "js", label: "JavaScript", icon: "fab fa-js" }, { id: "python", label: "Python", icon: "fab fa-python" }]
                      .filter(l => l.id === "js" || topic.codeExample.python)
                      .map(l => (
                        <button key={l.id} onClick={() => setCodeLang(l.id)}
                          className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 rounded-lg"
                          style={codeLang === l.id
                            ? { border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", background: "rgba(124,58,237,0.08)" }
                            : { border: "1px solid rgba(124,58,237,0.15)", color: "#475569" }}>
                          <i className={l.icon} /> {l.label}
                        </button>
                      ))}
                  </div>
                  <GenAiCodeBlock
                    code={codeLang === "js" ? topic.codeExample.js : topic.codeExample.python}
                    language={codeLang === "js" ? "javascript" : "python"}
                    title={codeLang === "js" ? "JavaScript (Node.js)" : "Python"}
                  />
                  <div className="flex gap-4 p-5 rounded-xl" style={{ border: "1px solid rgba(124,58,237,0.15)", background: "rgba(124,58,237,0.03)" }}>
                    <i className="fas fa-shield-halved text-rr-gold text-sm flex-shrink-0 mt-0.5" />
                    <p className="text-rr-stone text-sm font-light">
                      Always store API keys in environment variables.
                      Use <code className="font-mono text-xs text-rr-gold">process.env.OPENAI_API_KEY</code> in Node.js
                      or <code className="font-mono text-xs text-rr-gold">os.environ</code> in Python.
                    </p>
                  </div>
                </div>
              )}

              {/* REAL WORLD */}
              {activeTab === "apps" && (
                <div>
                  <h2 className="font-display text-2xl font-light text-rr-ivory mb-8">Real-World Applications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
                    style={{ background: "rgba(124,58,237,0.12)" }}>
                    {topic.realWorldApps.map((app, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className="p-6 transition-colors duration-200"
                        style={{ background: "#04040a" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#080812"}
                        onMouseLeave={e => e.currentTarget.style.background = "#04040a"}>
                        <div className="text-2xl mb-3">{app.icon}</div>
                        <h3 className="font-display text-lg font-light text-rr-ivory mb-2">{app.title}</h3>
                        <p className="text-rr-stone text-sm font-light">{app.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERVIEW */}
              {activeTab === "interview" && (
                <div>
                  <h2 className="font-display text-2xl font-light text-rr-ivory mb-8">Interview Questions</h2>
                  <GenAiAccordion items={topic.interviewQuestions} />
                </div>
              )}

              {/* MCQ */}
              {activeTab === "mcq" && (
                <div>
                  <h2 className="font-display text-2xl font-light text-rr-ivory mb-8">Test Your Knowledge</h2>
                  <GenAiMCQ questions={topic.mcqs} />
                </div>
              )}

              {/* TEXT RESOURCES */}
              {activeTab === "text-resources" && (
                <div className="space-y-10">
                  {[
                    { key: "docs",    label: "Documentation", icon: "fas fa-file-lines",    color: "#67e8f9" },
                    { key: "blogs",   label: "Articles",      icon: "fas fa-pen-to-square", color: "#34d399" },
                  ].map(({ key, label, icon, color }) =>
                    topic.resources?.[key]?.length > 0 && (
                      <div key={key}>
                        <div className="flex items-center gap-4 mb-5">
                          <i className={`${icon} text-sm`} style={{ color }} />
                          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(124,58,237,0.45)" }}>{label}</span>
                          <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.12)" }} />
                        </div>
                        <div className="space-y-0" style={{ borderTop: "1px solid rgba(124,58,237,0.08)" }}>
                          {topic.resources[key].map((r, i) => (
                            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-4 py-4 transition-colors duration-200 group rounded-lg px-2"
                              style={{ borderBottom: "1px solid rgba(124,58,237,0.08)" }}
                              onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.03)"}
                              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                              <span className="diamond-sm flex-shrink-0" style={{ background: color + "60" }} />
                              <span className="text-sm font-light flex-1 transition-colors duration-200"
                                style={{ color: "#94a3b8" }}
                                onMouseEnter={e => e.currentTarget.style.color = "#f1f5f9"}
                                onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
                                {r.title}
                              </span>
                              <i className="fas fa-arrow-up-right-from-square text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: "rgba(124,58,237,0.45)" }} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* VIDEO RESOURCES */}
              {activeTab === "video-resources" && (
                <div className="space-y-10">
                  {[
                    { key: "youtube", label: "Video Tutorials", icon: "fab fa-youtube",       color: "#f87171" },
                  ].map(({ key, label, icon, color }) =>
                    topic.resources?.[key]?.length > 0 && (
                      <div key={key}>
                        <div className="flex items-center gap-4 mb-5">
                          <i className={`${icon} text-sm`} style={{ color }} />
                          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(124,58,237,0.45)" }}>{label}</span>
                          <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.12)" }} />
                        </div>
                        <div className="space-y-0" style={{ borderTop: "1px solid rgba(124,58,237,0.08)" }}>
                          {topic.resources[key].map((r, i) => (
                            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-4 py-4 transition-colors duration-200 group rounded-lg px-2"
                              style={{ borderBottom: "1px solid rgba(124,58,237,0.08)" }}
                              onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.03)"}
                              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                              <span className="diamond-sm flex-shrink-0" style={{ background: color + "60" }} />
                              <span className="text-sm font-light flex-1 transition-colors duration-200"
                                style={{ color: "#94a3b8" }}
                                onMouseEnter={e => e.currentTarget.style.color = "#f1f5f9"}
                                onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
                                {r.title}
                              </span>
                              <i className="fas fa-arrow-up-right-from-square text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: "rgba(124,58,237,0.45)" }} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </motion.div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-16 pt-8"
              style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}>
              {prev ? (
                <Link to={`/genai-course/${prev.id}`}
                  className="flex items-center gap-3 text-sm font-light transition-colors duration-200 max-w-xs group"
                  style={{ color: "#475569" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                  <i className="fas fa-arrow-left text-xs" />
                  <span className="truncate">{prev.title}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/genai-course/${next.id}`}
                  className="flex items-center gap-3 text-sm font-light transition-colors duration-200 max-w-xs group"
                  style={{ color: "#475569" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                  <span className="truncate">{next.title}</span>
                  <i className="fas fa-arrow-right text-xs" />
                </Link>
              ) : <div />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
