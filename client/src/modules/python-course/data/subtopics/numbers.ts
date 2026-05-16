import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'numbers', title: 'Numbers (int, float, complex)', breadcrumb: 'Data Types', readingTime: '10 min',
  description: 'Python supports three numeric types: int (integers), float (decimal numbers), and complex (numbers with real and imaginary parts). Python handles arithmetic operations on all these types.',
  prerequisites: ['Familiarity with Python syntax.', 'Basic understanding of variables.'],
  examples: `# Integer\na = 10\n# Float\nb = 3.14\n# Complex\nc = 2 + 3j\nprint(type(a))  # <class 'int'>\nprint(type(b))  # <class 'float'>\nprint(type(c))  # <class 'complex'>\nprint(a + b)    # 13.14\nprint(abs(c))   # 3.605...`,
  realWorld: ['Finance: Calculating interest and tax', 'Science: Complex number calculations', 'Data Science: Numerical operations on datasets'],
  applications: ['Backend development: Price calculations', 'ML/AI algorithms: Cost functions', 'Scientific computing: Simulations'],
  interviewQuestions: [
    { q: 'What are the numeric types in Python?', a: 'Python has int, float, and complex numeric types.' },
    { q: 'What is the difference between int and float?', a: 'int stores whole numbers; float stores decimal numbers.' },
    { q: 'How do you convert between numeric types?', a: 'Use int(), float(), or complex() functions for type conversion.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/GAp1DEIpWs8?si=MnioV8r-JMB_mU2p', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/17-qYpUQPmPA8bx-4fmckjyshzb-FKkR2/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
