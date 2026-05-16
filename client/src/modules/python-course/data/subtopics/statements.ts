import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'statements', title: 'Statements and Expressions', breadcrumb: 'Syntax and Semantics', readingTime: '10 min',
  description: 'A statement is a unit of code that performs an action. An expression is a combination of values, variables, and operators that evaluates to a value. Understanding the difference is fundamental to Python programming.',
  prerequisites: ['Basic knowledge of Python syntax.'],
  examples: `# Statements\nx = 10          # Assignment statement\nprint(x)        # Expression statement\n\n# Expressions\ny = 5 + 3       # Arithmetic expression\nz = x > y       # Boolean expression\n\n# Multi-line statement\ntotal = (1 + 2 +\n         3 + 4)`,
  realWorld: ['All Python programs are made of statements', 'Expressions used in conditions and calculations', 'Assignment statements for data storage'],
  applications: ['All Python development', 'Data processing', 'Control flow logic'],
  interviewQuestions: [
    { q: 'What is the difference between a statement and an expression?', a: 'A statement performs an action; an expression evaluates to a value.' },
    { q: 'Can an expression be a statement?', a: 'Yes, an expression used as a statement is called an expression statement (e.g., a function call).' },
    { q: 'What is a compound statement?', a: 'A compound statement contains other statements, like if, for, while, def, and class.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/h_rrPqcLnOI?si=YPYYgfeSMME5f77_', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1E44Zh9lwjDggNq90hT8XRChrRkY_U1DD/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
