import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'tuples-advanced', title: 'Tuples (Advanced)', breadcrumb: 'Data Structures', readingTime: '10 min',
  description: 'Advanced tuple concepts include named tuples, tuple packing/unpacking, using tuples as dictionary keys, and performance advantages over lists. Named tuples add readability to tuple-based data.',
  prerequisites: ['Understanding of basic tuples.', 'Familiarity with dictionaries and functions.'],
  examples: `from collections import namedtuple\n\n# Named tuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(10, 20)\nprint(p.x, p.y)  # 10 20\n\n# Tuple as dict key\ncoords = {(0,0): "origin", (1,0): "right"}\nprint(coords[(0,0)])  # origin\n\n# Extended unpacking\nfirst, *rest = (1, 2, 3, 4, 5)\nprint(first)  # 1\nprint(rest)   # [2, 3, 4, 5]`,
  realWorld: ['Database records as named tuples', 'Geographic coordinates as dict keys', 'Returning structured data from functions'],
  applications: ['Data science: Structured records', 'APIs: Immutable response data', 'Caching: Hashable keys'],
  interviewQuestions: [
    { q: 'What is a named tuple?', a: 'A named tuple is a tuple subclass with named fields, making code more readable.' },
    { q: 'Why are tuples faster than lists?', a: 'Tuples are immutable, so Python can optimize their storage and access.' },
    { q: 'Can tuples be used as dictionary keys?', a: 'Yes, because tuples are immutable and hashable.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/Kes8YRV73Io?si=cP9Y6tx0uWNCJx4D', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1_5k5siYsJlrKObakBTw0l2hoHscq8r_J/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
