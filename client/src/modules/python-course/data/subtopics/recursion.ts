import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'recursion', title: 'Recursion', breadcrumb: 'Functions', readingTime: '10 min',
  description: 'Recursion is when a function calls itself to solve a problem. Every recursive function needs a base case (stopping condition) to prevent infinite recursion. It is useful for problems that can be broken into smaller sub-problems.',
  prerequisites: ['Understanding of functions.', 'Familiarity with return statements.'],
  examples: `# Factorial\ndef factorial(n):\n    if n == 0:  # base case\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))  # 120\n\n# Fibonacci\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\nprint(fib(7))  # 13`,
  realWorld: ['Tree and graph traversal', 'File system navigation', 'Divide and conquer algorithms', 'Parsing nested data structures'],
  applications: ['Data structures: Binary trees, linked lists', 'Algorithms: Merge sort, quicksort', 'AI: Game trees (minimax)'],
  interviewQuestions: [
    { q: 'What is recursion?', a: 'Recursion is when a function calls itself to solve a smaller version of the same problem.' },
    { q: 'What is a base case?', a: 'The base case is the condition that stops the recursion to prevent infinite loops.' },
    { q: 'What is the difference between recursion and iteration?', a: 'Recursion uses function calls; iteration uses loops. Recursion can be more elegant but uses more memory.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/Xmu-MU84XrM?si=vzz7uVUzdxaVhRFz', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1iYRLSLGQz97tRwKNbEkKu7U3sKbChsDv/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
