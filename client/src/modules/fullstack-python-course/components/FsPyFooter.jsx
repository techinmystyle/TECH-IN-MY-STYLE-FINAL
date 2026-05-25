import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/fullstack-python-course' },
  { label: 'Topics', to: '/fullstack-python-course/topics' },
  { label: 'About', to: '/fullstack-python-course/about' },
];

export default function FsPyFooter() {
  return (
    <CourseFooter
      courseName="FULL STACK PYTHON"
      courseRoute="/fullstack-python-course"
      tagline="Master Python from fundamentals to deployment. Build REST APIs and ship production-ready apps."
      logoImg="/img/FULL-STACK-PYTHON.png"
      color="#1b5e20"
      color2="#2e7d32"
      colorRgb="27,94,32"
      quickLinks={QUICK_LINKS}
    />
  );
}
