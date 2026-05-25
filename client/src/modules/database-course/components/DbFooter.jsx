import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/database-course' },
  { label: 'Modules', to: '/database-course/modules' },
  { label: 'SQL Editor', to: '/database-course/editor' },
  { label: 'Visualizer', to: '/database-course/visualizer' },
  { label: 'Interview Prep', to: '/database-course/interview' },
  { label: 'Bookmarks', to: '/database-course/bookmarks' },
];

export default function DbFooter() {
  return (
    <div style={{ marginTop: '5rem' }}>
      <CourseFooter
        courseName="DATABASE IN MY STYLE"
        courseRoute="/database-course"
        tagline="Master SQL and MongoDB — live query execution, visualizers, and interview preparation."
        logoImg="/img/DBMS.png"
        color="#00d4ff"
        color2="#00a8ff"
        colorRgb="0,212,255"
        quickLinks={QUICK_LINKS}
      />
    </div>
  );
}
