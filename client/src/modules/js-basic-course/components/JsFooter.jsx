import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/js-basic-course' },
  { label: 'Topics', to: '/js-basic-course/topics' },
  { label: 'Practice', to: '/js-basic-course/tasks' },
  { label: 'About', to: '/js-basic-course/about' },
];

export default function JsFooter() {
  return (
    <CourseFooter
      courseName="JAVASCRIPT BASIC"
      courseRoute="/js-basic-course"
      tagline="Start your JavaScript journey — variables, functions, DOM manipulation, and modern ES6+ features."
      logoImg="/img/JS-BEGINNERS.png"
      color="#f7df1e"
      color2="#f0c30f"
      colorRgb="247,223,30"
      quickLinks={QUICK_LINKS}
    />
  );
}
