import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'dictionaries-advanced', title: 'Dictionaries (Advanced)', breadcrumb: 'Data Structures', readingTime: '10 min',
  description: 'Advanced dictionary features include dict comprehensions, defaultdict, OrderedDict, Counter, merging dicts, and nested dictionaries. These tools make complex data manipulation clean and efficient.',
  prerequisites: ['Understanding of basic dictionaries.', 'Familiarity with loops and comprehensions.'],
  examples: `from collections import defaultdict, Counter\n\n# Dict comprehension\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1:1, 2:4, 3:9, 4:16, 5:25}\n\n# defaultdict\ndd = defaultdict(list)\ndd["fruits"].append("apple")\nprint(dd)  # {'fruits': ['apple']}\n\n# Counter\nwords = ["apple","banana","apple","cherry","banana","apple"]\ncount = Counter(words)\nprint(count.most_common(2))  # [('apple',3),('banana',2)]\n\n# Merge dicts (Python 3.9+)\nd1 = {"a": 1}\nd2 = {"b": 2}\nmerged = d1 | d2`,
  realWorld: ['Word frequency counting with Counter', 'Grouping data with defaultdict', 'Configuration management with nested dicts'],
  applications: ['NLP: Word frequency analysis', 'Web development: Session data', 'Data science: Feature grouping'],
  interviewQuestions: [
    { q: 'What is a dict comprehension?', a: 'A concise way to create dictionaries: {key: value for item in iterable}.' },
    { q: 'What is defaultdict?', a: 'A dict subclass that provides a default value for missing keys, avoiding KeyError.' },
    { q: 'What does Counter do?', a: 'Counter counts the frequency of elements in an iterable.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/LTXnQdrwyrw?si=RhRacrHTO6AB-gXl', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1QE9pQCwxLiOsS3nb1PrF3dg_uOLT9lgB/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
