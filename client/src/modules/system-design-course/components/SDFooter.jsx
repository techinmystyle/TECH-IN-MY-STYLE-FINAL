import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/system-design-course' },
  { label: 'Level 1', to: '/system-design-course/level1/system-design-intro' },
  { label: 'Level 2', to: '/system-design-course/level2/load-balancer' },
  { label: 'About', to: '/system-design-course/about' },
];

export default function SDFooter() {
  return (
    <CourseFooter
      courseName="SYSTEM DESIGN"
      courseRoute="/system-design-course"
      tagline="Master system design — distributed systems, caching, scaling, databases, and microservices."
      logoImg="/img/SYSTEM-DESIGN.png"
      color="#3949ab"
      color2="#5c6bc0"
      colorRgb="57,73,171"
      quickLinks={QUICK_LINKS}
    />
  );
}
