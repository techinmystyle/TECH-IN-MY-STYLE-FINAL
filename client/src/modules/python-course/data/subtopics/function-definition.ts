import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'function-definition', title: 'Python Functions', breadcrumb: 'Functions', readingTime: '15 min',
  description: 'A function in Python is a reusable block of code that performs a specific task. They make code modular, readable, and DRY (Don\'t Repeat Yourself). Defined using the "def" keyword.',
  prerequisites: ['Variables', 'Control Flow'],
  examples: `# Basic function\ndef greet(name):\n    return f"Hello, {name}!"\n\nmessage = greet("Python User")\n\n# Default arguments\ndef power(x, y=2):\n    return x ** y\n\nprint(power(3)) # 9\nprint(power(3, 3)) # 27\n\n# Docstrings\ndef add(a, b):\n    """Adds two numbers."""\n    return a + b`,
  realWorld: ['Web request handlers', 'Mathematical calculations', 'Database CRUD operations', 'Data processing tasks'],
  applications: ['Almost all software systems use functions to divide and conquer problems.', 'Server-side logic', 'API development'],
  interviewQuestions: [
    { q: 'What is the "def" keyword?', a: 'It is used to define a new function in Python.' },
    { q: 'Difference between parameters and arguments?', a: 'Parameters are the variables in the function definition; arguments are the actual values passed to it.' },
    { q: 'What is a lambda function?', a: 'An anonymous, inline function that can take any number of arguments but has only one expression.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/eezLhJ5oGYg?si=lOFViPvWWmZbMdEo', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1Tc9Y0ByajXnX3BdBbcD02IQwp1hY2cN_/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
