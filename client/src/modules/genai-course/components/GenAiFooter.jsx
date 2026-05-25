import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/genai-course' },
  { label: 'Topics', to: '/genai-course/topics' },
  { label: 'About', to: '/genai-course/about' },
];

export default function GenAiFooter() {
  return (
    <CourseFooter
      courseName="GEN AI IN MY STYLE"
      courseRoute="/genai-course"
      tagline="Master Generative AI — LLMs, RAG, agents, embeddings, and production-ready AI applications."
      logoImg="/img/GEN-AI.png"
      color="#c62828"
      color2="#e53935"
      colorRgb="198,40,40"
      quickLinks={QUICK_LINKS}
    />
  );
}