import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/fullstack-java-platform-course' },
  { label: 'Topics', to: '/fullstack-java-platform-course/topics' },
  { label: 'About', to: '/fullstack-java-platform-course/about' },
];

export default function FsJavaFooter() {
  return (
    <CourseFooter
      courseName="FULL STACK JAVA"
      courseRoute="/fullstack-java-platform-course"
      tagline="Build scalable backend systems with Java and Spring Boot. Master microservices and deployment."
      logoImg="/img/JAVA.png"
      color="#7c4dff"
      color2="#651fff"
      colorRgb="124,77,255"
      quickLinks={QUICK_LINKS}
    />
  );
}
