import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'strings', title: 'Python Strings', breadcrumb: 'Data Types', readingTime: '8 min',
  description: 'Strings in Python are sequences of characters. They are immutable, meaning once created, their content cannot be changed. Strings can be defined with single, double, or triple quotes.',
  prerequisites: ['Basic understanding of variables'],
  examples: `# Creating strings\nname = "Python"\ngreeting = 'Hello'\nbio = """Python is a\npowerful language."""\nfull = greeting + " " + name\nprint(full) # Hello Python\nprint(name[0:2]) # Py\nprint(name[::-1]) # nohtyP`,
  realWorld: ['Text processing', 'URL manipulation', 'User input validation', 'Logs and debugging'],
  applications: ['NLP/AI chatbots', 'Web scraping', 'Search Engines', 'File Handling'],
  interviewQuestions: [
    { q: 'Are strings mutable in Python?', a: 'No, strings are immutable. Any operation that modifies a string returns a new string object.' },
    { q: 'How do you check if a substring exists?', a: 'You can use the "in" operator: "apple" in "pineapple" returns True.' },
    { q: 'What is f-string?', a: 'f-string provides a way to embed expressions inside string literals using curly braces {}.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/ANgYwq9fFQw?si=RUan2sOkA1I1wMzz', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1XRYij6idEx-hQkAXIvcLSY7yzymld5Ds/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
