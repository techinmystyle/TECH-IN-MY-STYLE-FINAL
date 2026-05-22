import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { topicsData } from "../data/topicsData";

const topicColors = [
  "from-java-blue to-java-lightblue",
  "from-java-orange to-amber-400",
  "from-purple-600 to-java-blue",
  "from-green-500 to-java-blue",
  "from-java-lightblue to-cyan-500",
  "from-red-500 to-java-orange",
  "from-java-orange to-amber-400",
  "from-java-blue to-indigo-600",
];

const topicRingColors = [
  "ring-java-blue/40",
  "ring-java-orange/40",
  "ring-purple-500/40",
  "ring-green-500/40",
  "ring-cyan-500/40",
  "ring-red-500/40",
  "ring-amber-400/40",
  "ring-indigo-500/40",
];

const topicTextColors = [
  "text-java-blue dark:text-java-lightblue",
  "text-java-orange dark:text-amber-400",
  "text-purple-500 dark:text-purple-400",
  "text-green-600 dark:text-green-400",
  "text-cyan-600 dark:text-cyan-400",
  "text-red-500 dark:text-red-400",
  "text-amber-600 dark:text-amber-400",
  "text-indigo-600 dark:text-indigo-400",
];

const filters = ["All", "Beginner", "Intermediate", "Advanced"];

const filterMap = {
  Beginner: ["introduction", "java-basics"],
  Intermediate: ["oop", "packages", "exception-handling", "strings-enum"],
  Advanced: ["multi-threading", "collections"],
};

const levelColors = {
  Beginner:
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Intermediate:
    "bg-blue-100 dark:bg-blue-900/30 text-java-blue dark:text-java-lightblue",
  Advanced:
    "bg-orange-100 dark:bg-orange-900/30 text-java-orange dark:text-amber-400",
};

function getLevel(id) {
  if (filterMap.Beginner.includes(id)) return "Beginner";
  if (filterMap.Intermediate.includes(id)) return "Intermediate";
  if (filterMap.Advanced.includes(id)) return "Advanced";
  return null;
}

/* ── Accordion item ──────────────────────────────────────────── */
function TopicCard({ topic, colorIdx, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const level = getLevel(topic.id);

  return (
    <div
      id={`topic-${topic.id}`}
      className={`
        rounded-2xl border bg-white dark:bg-java-card-dark overflow-hidden
        shadow-sm transition-shadow duration-300
        ${
          isOpen
            ? `border-transparent ring-2 ${topicRingColors[colorIdx]}`
            : "border-gray-200 dark:border-java-border-dark hover:shadow-md dark:hover:shadow-java-blue/5"
        }
      `}
    >
      {/* ── Header button ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
          {/* Gradient number badge */}
          <div
            className={`
              w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex-shrink-0
              bg-gradient-to-br ${topicColors[colorIdx]}
              flex items-center justify-center
              text-white font-bold text-sm sm:text-base md:text-lg font-poppins shadow-md
              group-hover:scale-105 transition-transform duration-200
            `}
          >
            {topic.number}
          </div>

          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="java-topic-title font-poppins font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg leading-tight group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors break-words overflow-wrap-anywhere">
                {topic.title}
              </h2>
              {level && (
                <span
                  className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium font-poppins ${levelColors[level]} whitespace-nowrap`}
                >
                  {level}
                </span>
              )}
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-[11px] sm:text-xs md:text-sm mt-0.5 line-clamp-1 break-words overflow-wrap-anywhere">
              {topic.description}
              {" · "}
              <span className={`font-semibold ${topicTextColors[colorIdx]}`}>
                {topic.subtopics.length} subtopics
              </span>
            </p>
          </div>
        </div>

        <ChevronDownIcon
          className={`
            w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 ml-1 sm:ml-2 md:ml-3
            text-gray-400 group-hover:text-java-blue dark:group-hover:text-java-orange
            transition-transform duration-300
            ${isOpen ? "rotate-180 !text-java-blue dark:!text-java-orange" : ""}
          `}
        />
      </button>

      {/* ── Expandable body — uses style prop so Tailwind purge never drops it ── */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 4000}px`
            : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.45s ease, opacity 0.35s ease",
        }}
      >
        {/* Accent gradient line */}
        <div
          className={`h-0.5 bg-gradient-to-r ${topicColors[colorIdx]} mx-5`}
        />

        {/* Subtopics grid — each card is a Link */}
        <div className="p-3 sm:p-5 java-subtopic-grid">
          {topic.subtopics.map((sub, j) => (
            <Link
              key={j}
              to={`/java-course/topic/${topic.id}/${sub.slug}`}
              state={{ topicTitle: topic.title, subtopic: sub, colorIdx }}
              className="
                java-subtopic-card group/sub flex gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl
                bg-gray-50 dark:bg-java-darker
                border border-gray-100 dark:border-java-border-dark
                hover:border-java-blue/50 dark:hover:border-java-orange/50
                hover:bg-blue-50/60 dark:hover:bg-java-blue/5
                hover:shadow-md
                transition-all duration-200
                w-full max-w-full overflow-hidden
              "
            >
              {/* Sub-number dot */}
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className={`
                    w-5 h-5 sm:w-6 sm:h-6 rounded-full
                    bg-gradient-to-br ${topicColors[colorIdx]}
                    flex items-center justify-center
                    text-white text-[10px] sm:text-xs font-bold shadow-sm
                    group-hover/sub:scale-110 transition-transform duration-200
                  `}
                >
                  {j + 1}
                </div>
              </div>

              <div className="java-subtopic-card-body min-w-0 flex-1 overflow-hidden">
                <h4 className="java-subtopic-title font-medium text-gray-900 dark:text-white text-xs sm:text-sm font-poppins leading-tight mb-1 sm:mb-1.5 group-hover/sub:text-java-blue dark:group-hover/sub:text-java-orange transition-colors break-words overflow-wrap-anywhere">
                  {sub.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-1.5 sm:mb-2 break-words overflow-wrap-anywhere">
                  {sub.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-auto text-[10px] sm:text-xs font-semibold text-java-blue dark:text-java-orange opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200">
                  Learn now <ArrowRightIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Per-topic footer */}
        <div className="px-3 sm:px-5 pb-3 sm:pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 dark:border-java-border-dark pt-3 sm:pt-4 mt-1 gap-2 sm:gap-3">
          <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 break-words">
            {topic.subtopics.length} subtopics · Click any card to read the lesson
          </p>
          <Link
            to="/java-course/compiler"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-medium text-java-blue dark:text-java-orange hover:underline transition-colors shrink-0"
          >
            <CodeBracketIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            Practice in Compiler
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────── */
export default function Topics() {
  const [openTopics, setOpenTopics] = useState({ introduction: true });
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const totalSubtopics = useMemo(
    () => topicsData.reduce((a, t) => a + t.subtopics.length, 0),
    [],
  );

  const filteredTopics = useMemo(() => {
    let topics = topicsData;

    if (activeFilter !== "All") {
      topics = topics.filter((t) => filterMap[activeFilter]?.includes(t.id));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      topics = topics
        .map((topic) => ({
          ...topic,
          subtopics: topic.subtopics.filter(
            (s) =>
              s.title.toLowerCase().includes(q) ||
              s.desc.toLowerCase().includes(q),
          ),
        }))
        .filter(
          (topic) =>
            topic.title.toLowerCase().includes(q) ||
            topic.description.toLowerCase().includes(q) ||
            topic.subtopics.length > 0,
        );
    }

    return topics;
  }, [search, activeFilter]);

  const toggleTopic = (id) =>
    setOpenTopics((prev) => ({ ...prev, [id]: !prev[id] }));

  const openAll = () => {
    const all = {};
    filteredTopics.forEach((t) => {
      all[t.id] = true;
    });
    setOpenTopics(all);
  };

  const closeAll = () => setOpenTopics({});

  const scrollTo = (id) => {
    setOpenTopics((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      document
        .getElementById(`topic-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker">
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0074BD 1px,transparent 1px),linear-gradient(90deg,#0074BD 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-java-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-java-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center w-full box-border">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-sm font-medium mb-6">
            📚 Complete Curriculum
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
            Java Programming{" "}
            <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
              Topics
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Explore our comprehensive curriculum — from Java basics to advanced
            enterprise concepts. Click any topic to expand, then click a
            subtopic to read the full lesson.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { val: topicsData.length, label: "Topics" },
              { val: totalSubtopics, label: "Subtopics" },
              { val: "100%", label: "Free" },
              { val: "0 → Pro", label: "Path" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10 flex items-center gap-2"
              >
                <span className="text-white font-bold text-xl font-poppins">
                  {s.val}
                </span>
                <span className="text-white/60 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick-jump progress strip ─────────────────────────── */}
      <div className="sticky top-16 z-30 bg-white dark:bg-java-card-dark border-b border-gray-100 dark:border-java-border-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 overflow-x-auto w-full box-border">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 mr-2 shrink-0 uppercase tracking-wide">
              Jump to:
            </span>
            {topicsData.map((t, i) => (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                title={t.title}
                className={`
                  flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold font-poppins
                  bg-gradient-to-br ${topicColors[i % topicColors.length]}
                  text-white shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200
                `}
              >
                {t.number}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full box-border">
          {/* Search + filter row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics or subtopics…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full pl-12 pr-10 py-3.5 rounded-xl
                  border border-gray-200 dark:border-java-border-dark
                  bg-white dark:bg-java-card-dark
                  text-gray-900 dark:text-white placeholder-gray-400
                  focus:outline-none focus:border-java-blue dark:focus:border-java-orange
                  focus:ring-2 focus:ring-java-blue/20 dark:focus:ring-java-orange/20
                  transition-all text-sm font-roboto
                "
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl leading-none"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`
                    px-4 py-2.5 rounded-xl text-sm font-medium font-poppins transition-all duration-200
                    ${
                      activeFilter === f
                        ? "bg-java-blue text-white shadow-lg shadow-java-blue/30 scale-105"
                        : "bg-white dark:bg-java-card-dark text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-java-border-dark hover:border-java-blue dark:hover:border-java-orange hover:text-java-blue dark:hover:text-java-orange"
                    }
                  `}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Expand / Collapse controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-java-blue dark:text-java-orange">
                {filteredTopics.length}
              </span>{" "}
              {filteredTopics.length === 1 ? "topic" : "topics"}
              {search && (
                <span className="ml-1 italic text-gray-400">
                  for &ldquo;{search}&rdquo;
                </span>
              )}
            </p>
            <div className="flex items-center gap-3 text-sm font-medium">
              <button
                onClick={openAll}
                className="text-java-blue dark:text-java-orange hover:underline transition-colors"
              >
                Expand All
              </button>
              <span className="text-gray-300 dark:text-gray-600 select-none">
                |
              </span>
              <button
                onClick={closeAll}
                className="text-gray-500 hover:text-java-blue dark:hover:text-java-orange transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Empty state */}
          {filteredTopics.length === 0 && (
            <div className="text-center py-24">
              <div className="text-7xl mb-5">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-poppins">
                No topics found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try a different search term or reset the filter.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Accordion list */}
          <div className="space-y-5">
            {filteredTopics.map((topic, i) => {
              const colorIdx =
                topicsData.findIndex((t) => t.id === topic.id) %
                topicColors.length;
              return (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  colorIdx={colorIdx}
                  isOpen={!!openTopics[topic.id]}
                  onToggle={() => toggleTopic(topic.id)}
                />
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl relative overflow-hidden bg-gradient-to-br from-java-dark to-java-darker py-14 px-8 text-center">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle,#0074BD 1px,transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-java-orange/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-java-blue to-java-orange mb-5 shadow-lg">
                <CodeBracketIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                Want to Practice What You Learn?
              </h3>
              <p className="text-gray-300 mb-8 text-sm max-w-md mx-auto">
                Use our AI-powered Java compiler to run code examples from any
                topic — no setup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/java-course/compiler" className="btn-primary">
                  <CodeBracketIcon className="w-5 h-5" />
                  Open Java Compiler
                </Link>
                <Link to="/java-course" className="btn-outline">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
