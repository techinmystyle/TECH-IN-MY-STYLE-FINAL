import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'return-statement', title: 'Return Statement', breadcrumb: 'Functions', readingTime: '10 min',
  description: 'The return statement exits a function and optionally passes a value back to the caller. A function without a return statement returns None by default. Python allows returning multiple values as a tuple.',
  prerequisites: ['Understanding of functions.', 'Familiarity with variables and data types.'],
  examples: `# Basic return\ndef add(a, b):\n    return a + b\nresult = add(3, 5)\nprint(result)  # 8\n\n# Return multiple values\ndef min_max(nums):\n    return min(nums), max(nums)\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)  # 1 5\n\n# No return (returns None)\ndef greet():\n    print("Hello!")\nprint(greet())  # None`,
  realWorld: ['Returning computed results from functions', 'Returning status codes from API handlers', 'Returning multiple values from data processing functions'],
  applications: ['All Python functions that produce output', 'API development', 'Data transformation pipelines'],
  interviewQuestions: [
    { q: 'What does a function return if there is no return statement?', a: 'It returns None by default.' },
    { q: 'Can a function return multiple values?', a: 'Yes, Python returns multiple values as a tuple: return a, b.' },
    { q: 'What happens after a return statement?', a: 'The function exits immediately and control returns to the caller.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/EnHWPPYhSjY?si=3zOP091dvSdv5jxw', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1lNrtklA9XS6nxDg9D3XO1UIaE9RzcJWC/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
