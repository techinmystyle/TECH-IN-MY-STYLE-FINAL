import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'tuples', title: 'Tuples', breadcrumb: 'Data Types', readingTime: '10 min',
  description: 'Tuples are ordered, immutable sequences in Python. Once created, their elements cannot be changed. They are faster than lists and are used to store fixed collections of items.',
  prerequisites: ['Understanding of variables and data types.', 'Familiarity with lists.'],
  examples: `# Creating a tuple\ncoords = (10, 20)\ncolors = ("red", "green", "blue")\n# Accessing elements\nprint(coords[0])  # 10\n# Tuple unpacking\nx, y = coords\nprint(x, y)  # 10 20\n# Nested tuple\nnested = ((1, 2), (3, 4))\nprint(nested[0][1])  # 2`,
  realWorld: ['Storing fixed data like coordinates', 'Returning multiple values from functions', 'Dictionary keys (tuples are hashable)'],
  applications: ['Database records', 'Geographic coordinates', 'RGB color values', 'Function return values'],
  interviewQuestions: [
    { q: 'What is the difference between a list and a tuple?', a: 'Lists are mutable; tuples are immutable. Tuples are faster and can be used as dictionary keys.' },
    { q: 'Can a tuple contain mutable objects?', a: 'Yes, a tuple can contain mutable objects like lists, but the tuple itself cannot be modified.' },
    { q: 'What is tuple unpacking?', a: 'Tuple unpacking assigns each element of a tuple to a separate variable in a single statement.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/Vlc1LKV6ytk?si=1TCYBRrjxRASxA57', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1Omjb5ANtsPV6jkfayKgbFijpSSV8PuoZ/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
