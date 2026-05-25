// Shared course links used across all footer components

// Flat list (kept for backward-compat)
export const ALL_COURSES = [
  { label: 'HTML IN MY STYLE',              href: '/html-course' },
  { label: 'CSS IN MY STYLE',               href: '/css-course' },
  { label: 'JavaScript Basic',              href: '/js-basic-course' },
  { label: 'JavaScript Int',                href: '/js-int-course' },
  { label: 'JavaScript Adv',                href: '/js-adv-course' },
  { label: 'C IN MY STYLE',                 href: '/c-course' },
  { label: 'Java IN MY STYLE',              href: '/java-course' },
  { label: 'Python IN MY STYLE',            href: '/python-course' },
  { label: 'AI IN MY STYLE',                href: '/ai-course' },
  { label: 'Machine Learning',              href: '/ml-course' },
  { label: 'Deep Learning',                 href: '/dl-course' },
  { label: 'NLP IN MY STYLE',               href: '/nlp-course' },
  { label: 'Gen AI IN MY STYLE',            href: '/genai-course' },
  { label: 'Data Science',                  href: '/dsc-course' },
  { label: 'DSA IN MY STYLE',               href: '/dsa-course' },
  { label: 'Database IN MY STYLE',          href: '/database-course' },
  { label: 'OS IN MY STYLE',                href: '/os-course' },
  { label: 'System Design',                 href: '/system-design-course' },
  { label: 'Full Stack Python',             href: '/fullstack-python-course' },
  { label: 'Full Stack Java',               href: '/fullstack-java-platform-course' },
];

// Categorized list for footer rendering
export const COURSE_CATEGORIES = [
  {
    category: 'Web Development',
    courses: [
      { label: 'HTML',            href: '/html-course' },
      { label: 'CSS',             href: '/css-course' },
      { label: 'JS Basic',        href: '/js-basic-course' },
      { label: 'JS Intermediate', href: '/js-int-course' },
      { label: 'JS Advanced',     href: '/js-adv-course' },
    ],
  },
  {
    category: 'Programming',
    courses: [
      { label: 'C',      href: '/c-course' },
      { label: 'Java',   href: '/java-course' },
      { label: 'Python', href: '/python-course' },
    ],
  },
  {
    category: 'AI / ML',
    courses: [
      { label: 'AI',              href: '/ai-course' },
      { label: 'Machine Learning', href: '/ml-course' },
      { label: 'Deep Learning',   href: '/dl-course' },
      { label: 'NLP',             href: '/nlp-course' },
      { label: 'Gen AI',          href: '/genai-course' },
    ],
  },
  {
    category: 'Data & Systems',
    courses: [
      { label: 'Data Science',  href: '/dsc-course' },
      { label: 'DSA',           href: '/dsa-course' },
      { label: 'Database',      href: '/database-course' },
      { label: 'OS',            href: '/os-course' },
      { label: 'System Design', href: '/system-design-course' },
    ],
  },
  {
    category: 'Full Stack',
    courses: [
      { label: 'Full Stack Python', href: '/fullstack-python-course' },
      { label: 'Full Stack Java',   href: '/fullstack-java-platform-course' },
    ],
  },
];
