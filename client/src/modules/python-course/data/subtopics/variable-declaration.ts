import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'variable-declaration', title: 'Variable Declaration and Assignment', breadcrumb: 'Variables and Constants', readingTime: '10 min',
  description: 'Variables in Python are created when you assign a value to them. Python is dynamically typed, so you do not need to declare the type explicitly. Variables can hold any type of value.',
  prerequisites: ['Understanding of Python syntax.'],
  examples: `# Variable assignment\nname = "Alice"\nage = 25\nheight = 5.6\n# Multiple assignment\nx = y = z = 0\na, b, c = 1, 2, 3\n# Dynamic typing\nvar = 10\nprint(type(var))  # <class 'int'>\nvar = "hello"\nprint(type(var))  # <class 'str'>`,
  realWorld: ['Storing user input', 'Tracking application state', 'Holding computation results'],
  applications: ['All Python programs use variables', 'Web development: Session data', 'Data science: Dataset values'],
  interviewQuestions: [
    { q: 'How do you declare a variable in Python?', a: 'Simply assign a value: x = 10. No type declaration is needed.' },
    { q: 'Is Python statically or dynamically typed?', a: 'Python is dynamically typed — variable types are determined at runtime.' },
    { q: 'What is multiple assignment?', a: 'Assigning the same value to multiple variables in one line: x = y = z = 0.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/_NOGsr_5Muc?si=87pGtBBz9SFZ5SkS', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1dfhRLLc-gbL6gLkYwW255y_JnZQL-7I5/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
