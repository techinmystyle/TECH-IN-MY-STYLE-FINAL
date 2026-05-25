import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/os-course' },
  { label: 'Topics', to: '/os-course/topics' },
  { label: 'About', to: '/os-course/about' },
];

export default function OsFooter() {
  return (
    <CourseFooter
      courseName="OS IN MY STYLE"
      courseRoute="/os-course"
      tagline="Master Operating Systems — processes, memory management, file systems, and security."
      logoImg="/img/OS.png"
      color="#4fc3f7"
      color2="#29b6f6"
      colorRgb="79,195,247"
      quickLinks={QUICK_LINKS}
    />
  );
}
