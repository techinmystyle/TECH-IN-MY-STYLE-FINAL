import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'list-comprehensions', title: 'List Comprehensions', breadcrumb: 'Control Flow', readingTime: '10 min',
  description: 'List comprehensions provide a concise way to create lists. They consist of an expression followed by a for clause and optional if clauses, all inside square brackets.',
  prerequisites: ['Understanding of lists.', 'Familiarity with for loops and conditional statements.'],
  examples: `# Basic list comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# With condition\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]\n\n# Nested\nmatrix = [[i*j for j in range(1,4)] for i in range(1,4)]`,
  realWorld: ['Data transformation pipelines', 'Filtering datasets', 'Generating test data', 'Processing API responses'],
  applications: ['Data science: Feature engineering', 'Web development: Processing query results', 'Automation: Batch file processing'],
  interviewQuestions: [
    { q: 'What is a list comprehension?', a: 'A concise way to create lists using a single line: [expression for item in iterable if condition].' },
    { q: 'How does a list comprehension differ from a for loop?', a: 'List comprehensions are more concise and generally faster than equivalent for loops.' },
    { q: 'Can you nest list comprehensions?', a: 'Yes, you can nest list comprehensions to create multi-dimensional lists.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/YlY2g2xrl6Q?si=fi9zmfjIZMGBb-JG', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1dvE_NZBKcD9bQ3PC9tU4HWb6Ov7RObvJ/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
