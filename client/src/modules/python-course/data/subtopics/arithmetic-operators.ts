import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'arithmetic-operators', title: 'Arithmetic Operators', breadcrumb: 'Operators', readingTime: '10 min',
  description: 'Arithmetic operators are used in Python to perform basic mathematical operations: addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**).',
  prerequisites: ['Familiarity with Python syntax.', 'Basic understanding of numbers and variables.'],
  examples: `a = 10\nb = 3\nprint(a + b)   # 13\nprint(a - b)   # 7\nprint(a * b)   # 30\nprint(a / b)   # 3.333...\nprint(a // b)  # 3\nprint(a % b)   # 1\nprint(a ** b)  # 1000`,
  realWorld: ['Finance: Calculating interest, tax, and balance', 'Gaming: Scoring, leveling, damage calculations', 'E-commerce: Discount and final price calculations', 'Data Science: Mathematical operations on datasets'],
  applications: ['Backend development: Price calculations', 'ML/AI algorithms: Cost functions, gradient descent', 'Scientific computing: Simulations', 'Automation scripts: Time and unit conversions'],
  interviewQuestions: [
    { q: 'What is the difference between / and //?', a: '/ performs true division returning a float; // performs floor division returning an integer.' },
    { q: 'What does ** do in Python?', a: '** is the exponentiation operator: 2**3 = 8.' },
    { q: 'Which operator returns only the remainder?', a: 'The modulus operator % returns the remainder of division.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/kvVPeBBZdtM?si=AZXAXlWWbgrTvTZw', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1mHIZ2oTCRQPzepWAf6VZHLww1in061h0/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
