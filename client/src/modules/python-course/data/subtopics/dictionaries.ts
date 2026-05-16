import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'dictionaries', title: 'Dictionaries', breadcrumb: 'Data Types', readingTime: '10 min',
  description: 'A dictionary in Python is an unordered, mutable, and indexed collection of key-value pairs. Each key must be unique and immutable, while values can be of any data type.',
  prerequisites: ['Understanding of variables and data types.', 'Familiarity with basic Python syntax.'],
  examples: `# Creating a dictionary\nstudent = {"name": "Alice", "age": 21, "major": "AI"}\n# Accessing values\nprint(student["name"])  # Alice\nprint(student.get("grade", "Not Found"))  # Not Found\n# Modifying\nstudent["age"] = 22\nstudent["grade"] = "A"\n# Looping\nfor key, value in student.items():\n    print(key, ":", value)`,
  realWorld: ['Representing structured data like JSON', 'Mapping usernames to passwords', 'Caching results for faster lookup', 'Data wrangling in machine learning'],
  applications: ['APIs: Storing response data in JSON format', 'Web development: Handling form data', 'Data science: Feature-label mappings', 'AI/ML: Configuration mappings'],
  interviewQuestions: [
    { q: 'What is a dictionary in Python?', a: 'A dictionary is an unordered collection of key-value pairs where keys must be unique and immutable.' },
    { q: 'How are dictionaries different from lists?', a: 'Dictionaries use key-value pairs for access; lists use integer indices.' },
    { q: 'What does get() do?', a: 'get() safely retrieves a value by key, returning a default value if the key does not exist.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/2IsF7DEtVjg?si=tBJFCVGGIoAJB-Bd', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1AGYWHAKxdYyeoKHVrMrnBae9Smqc4Gru/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
