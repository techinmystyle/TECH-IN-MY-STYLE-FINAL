import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'constants', title: 'Constants in Python', breadcrumb: 'Variables and Constants', readingTime: '10 min',
  description: 'Constants are variables meant to stay unchanged once assigned. Python does not enforce constants but uses naming conventions (ALL_CAPS). Variable scope (LEGB: Local, Enclosing, Global, Built-in) determines variable visibility.',
  prerequisites: ['Understanding of variables and functions.', 'Familiarity with Python code structure.'],
  examples: `# Constants (by convention)\nPI = 3.14159\nAPP_NAME = "AwesomeApp"\nprint(PI)\n\n# Variable Scope\nx = 10  # Global\ndef example():\n    y = 5  # Local\n    print(x + y)\nexample()\n\n# global keyword\ncount = 0\ndef increment():\n    global count\n    count += 1\nincrement()\nprint(count)  # 1`,
  realWorld: ['Defining fixed values like API keys and configuration settings', 'Machine learning: learning rates, thresholds', 'Organizing code with scoped variables'],
  applications: ['Web development: Managing session/global states', 'Game development: Constants for speed limits', 'Data science: Managing scoped variables in functions'],
  interviewQuestions: [
    { q: 'Does Python have a built-in keyword for constants?', a: 'No, Python does not enforce constants. By convention, ALL_CAPS names indicate constants.' },
    { q: 'What are the four types of variable scope in Python?', a: 'Local, Enclosing, Global, and Built-in (LEGB rule).' },
    { q: 'What is the global keyword used for?', a: 'It allows a function to modify a global variable instead of creating a local one.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/ZwTK_wX_BNs?si=4kLYtyu9XN0VWFjP', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1JUMuptnh_UNvQj8t7rQbUMKJ-wHUhDOp/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
