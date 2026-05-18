import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'sets-advanced', title: 'Sets (Advanced)', breadcrumb: 'Data Structures', readingTime: '10 min',
  description: 'Advanced set operations include set comprehensions, frozensets, symmetric difference, and using sets for performance-critical membership testing. Sets are ideal for deduplication and mathematical operations.',
  prerequisites: ['Understanding of basic sets.', 'Familiarity with loops and comprehensions.'],
  examples: `# Set comprehension\nsquares = {x**2 for x in range(1, 6)}\nprint(squares)  # {1, 4, 9, 16, 25}\n\n# Frozenset\nfs = frozenset([1, 2, 3])\n# fs.add(4)  # Error: frozenset is immutable\n\n# Symmetric difference\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a ^ b)  # {1, 2, 5, 6}\n\n# issubset / issuperset\nprint({1,2}.issubset({1,2,3}))  # True`,
  realWorld: ['Deduplicating large datasets', 'Finding common elements between datasets', 'Tag and permission systems'],
  applications: ['Data science: Unique value analysis', 'Security: Permission sets', 'Graph algorithms: Visited nodes'],
  interviewQuestions: [
    { q: 'What is a frozenset?', a: 'A frozenset is an immutable version of a set that can be used as a dictionary key.' },
    { q: 'What is symmetric difference?', a: 'Elements in either set but not in both: a ^ b.' },
    { q: 'How do you create a set comprehension?', a: 'Use curly braces: {expression for item in iterable}.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/Qs3BSFZnZSI?si=gTPuo82ThzQ6x61I', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/14fvO5hwr3iGRwJd5zOWCvdPHfq-dbT5g/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
