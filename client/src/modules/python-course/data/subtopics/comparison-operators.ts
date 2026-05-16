import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'comparison-operators', title: 'Comparison Operators', breadcrumb: 'Operators', readingTime: '10 min',
  description: 'Comparison operators compare two values and return a Boolean result (True or False). Python supports: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal).',
  prerequisites: ['Understanding of data types (especially numbers and booleans).', 'Familiarity with arithmetic and variables.'],
  examples: `a = 10\nb = 20\nprint(a == b)   # False\nprint(a != b)   # True\nprint(a > b)    # False\nprint(a < b)    # True\nprint(a >= 10)  # True\nprint(b <= 15)  # False`,
  realWorld: ['Login systems: Check if credentials match', 'Game logic: Compare scores and health', 'Finance apps: Validate if balance is sufficient', 'Education portals: Determine pass/fail based on marks'],
  applications: ['Conditional programming: if, elif, while loops', 'Data filtering in Pandas and NumPy', 'Form validation: Comparing user inputs', 'Machine Learning: Accuracy checks'],
  interviewQuestions: [
    { q: 'What is the difference between == and is in Python?', a: '== checks value equality; is checks identity (same object in memory).' },
    { q: 'Can we use comparison operators on strings?', a: 'Yes, Python compares strings lexicographically (alphabetical order).' },
    { q: 'How does Python handle chained comparisons like 3 < a <= 10?', a: 'Python evaluates chained comparisons left to right and returns True only if all comparisons are True.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/6ZQtBK-dM9c?si=QSxGus0n2_4w21r-', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1SaPnwQV7jGDCCMK1Q5_Pkr_dHeCyPh3F/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
