import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'nonetype', title: 'NoneType', breadcrumb: 'Data Types', readingTime: '10 min',
  description: 'NoneType is the type of the None object in Python. None represents the absence of a value or a null value. It is commonly used as a default return value for functions that do not explicitly return anything.',
  prerequisites: ['Familiarity with Python data types and variables.'],
  examples: `# None value\nx = None\nprint(x)          # None\nprint(type(x))    # <class 'NoneType'>\n# Checking for None\nif x is None:\n    print("x has no value")\n# Function returning None\ndef greet():\n    print("Hello!")\nresult = greet()\nprint(result)  # None`,
  realWorld: ['Default return value for functions', 'Representing missing data in datasets', 'Initializing variables before assignment'],
  applications: ['Database queries returning no results', 'Optional function parameters', 'Sentinel values in algorithms'],
  interviewQuestions: [
    { q: 'What is None in Python?', a: 'None is a special constant representing the absence of a value or a null value.' },
    { q: 'How do you check if a variable is None?', a: 'Use "is None" or "is not None" for identity comparison, not == or !=.' },
    { q: 'What is the type of None?', a: 'The type of None is NoneType.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/byM5Vuez7A0?si=hTCyeyjIIqJkMPov', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1tWoCKb6gzjxqzVCQZ3en3xk3-Tv5kH6m/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
