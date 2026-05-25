import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/dsc-course' },
  { label: 'Topics', to: '/dsc-course/topics' },
  { label: 'Practice', to: '/dsc-course/tasks' },
  { label: 'About', to: '/dsc-course/about' },
];

export default function DscFooter() {
  return (
    <CourseFooter
      courseName="DATA SCIENCE"
      courseRoute="/dsc-course"
      tagline="Master Data Science — statistics, data wrangling, visualization, and analytics with Python."
      logoImg="/img/DSC.png"
      color="#0097a7"
      color2="#00acc1"
      colorRgb="0,151,167"
      quickLinks={QUICK_LINKS}
    />
  );
}
