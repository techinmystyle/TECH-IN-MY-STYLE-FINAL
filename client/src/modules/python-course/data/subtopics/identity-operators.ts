import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'identity-operators', title: 'Identity Operators', breadcrumb: 'Operators', readingTime: '10 min',
  description: 'Identity operators compare the memory locations of two objects. Python supports: is (same object) and is not (different objects). They differ from == which checks value equality.',
  prerequisites: ['Understanding of variables and data types.'],
  examples: `a = [1, 2, 3]\nb = a\nc = [1, 2, 3]\nprint(a is b)      # True (same object)\nprint(a is c)      # False (different objects)\nprint(a == c)      # True (same values)\nprint(a is not c)  # True\n\nx = None\nprint(x is None)   # True (correct way to check None)`,
  realWorld: ['Checking if a variable is None', 'Singleton pattern verification', 'Memory optimization checks'],
  applications: ['None checks in functions', 'Singleton design pattern', 'Caching and object reuse'],
  interviewQuestions: [
    { q: 'What is the difference between "is" and "=="?', a: '"is" checks if two variables point to the same object in memory; "==" checks if their values are equal.' },
    { q: 'When should you use "is" instead of "=="?', a: 'Use "is" when checking for None, True, or False, or when checking object identity.' },
    { q: 'Why does "is" sometimes return True for small integers?', a: 'Python caches small integers (-5 to 256), so they share the same memory location.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/BG3lg589HRE?si=vdDix9kcfbjulk5t', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1UW40kOsO0owcQJAPT2CzBi_nIMcXOMtQ/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
