import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'comments', title: 'Python Comments', breadcrumb: 'Syntax and Semantics', readingTime: '10 min',
  description: 'Comments in Python are lines not executed by the interpreter. They explain code, improve readability, and leave notes. Python supports single-line comments (#) and multi-line comments (triple quotes).',
  prerequisites: ['Basic knowledge of writing and running Python code.', 'Understanding of syntax and code structure.'],
  examples: `# This is a single-line comment\nprint("Hello, world!")  # Inline comment\n\n'''\nThis is a multi-line comment.\nUsed to describe blocks of code.\n'''\n\ndef greet(name):\n    """This function greets the person passed as an argument."""\n    print(f"Hello, {name}!")`,
  realWorld: ['Writing documentation inside code for teams', 'Explaining complex logic', 'Temporarily disabling code during debugging', 'Adding TODOs or FIXMEs as reminders'],
  applications: ['All Python programs', 'Collaborative development', 'Open-source projects', 'Educational material'],
  interviewQuestions: [
    { q: 'What are comments in Python and why are they important?', a: 'Comments are non-executable lines that explain code, improving readability and maintainability.' },
    { q: 'How do you write a single-line and multi-line comment?', a: 'Single-line: use #. Multi-line: use triple quotes (""" or \'\'\').' },
    { q: 'What is the difference between a comment and a docstring?', a: 'A docstring is a string literal used as documentation for modules, functions, classes, or methods; comments are for inline notes.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/QZ6Ml_CA9PQ?si=NvMiq_zr5Qim6PwT', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1Kx5-ZPgowQ8ydON9aVks2yYPGsJg-eew/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
