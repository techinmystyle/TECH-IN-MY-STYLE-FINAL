import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'lambda-functions', title: 'Lambda Functions', breadcrumb: 'Functions', readingTime: '10 min',
  description: 'Lambda functions are small anonymous functions defined with the lambda keyword. They can take any number of arguments but can only have one expression. Commonly used with map(), filter(), and sorted().',
  prerequisites: ['Understanding of functions.', 'Familiarity with Python syntax.'],
  examples: `# Basic lambda\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# Lambda with multiple args\nadd = lambda a, b: a + b\nprint(add(3, 4))  # 7\n\n# With sorted()\nstudents = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]\nstudents.sort(key=lambda s: s[1])\nprint(students)\n\n# With filter()\nevens = list(filter(lambda x: x % 2 == 0, range(10)))`,
  realWorld: ['Sorting complex data structures', 'Filtering datasets', 'Inline transformations in data pipelines'],
  applications: ['Data science: Quick transformations', 'Web development: Sorting query results', 'Functional programming patterns'],
  interviewQuestions: [
    { q: 'What is a lambda function?', a: 'An anonymous function defined with the lambda keyword, containing a single expression.' },
    { q: 'When should you use lambda instead of def?', a: 'Use lambda for short, throwaway functions, especially as arguments to higher-order functions.' },
    { q: 'Can a lambda function have multiple statements?', a: 'No, a lambda can only have a single expression.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/xWXxz2z-WIE?si=G1TzkeyB5vAPa_r1', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1poNcxH7dJYuaxxeJqiKIuuMyNLF3DF95/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
