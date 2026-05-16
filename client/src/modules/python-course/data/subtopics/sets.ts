import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'sets', title: 'Sets', breadcrumb: 'Data Types', readingTime: '10 min',
  description: 'A set in Python is an unordered collection of unique elements. Sets are mutable but do not allow duplicate values. They support mathematical set operations like union, intersection, and difference.',
  prerequisites: ['Understanding of variables and data types.'],
  examples: `# Creating a set\nfruits = {"apple", "banana", "cherry"}\n# No duplicates\nnums = {1, 2, 2, 3, 3}\nprint(nums)  # {1, 2, 3}\n# Set operations\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)  # Union: {1, 2, 3, 4}\nprint(a & b)  # Intersection: {2, 3}\nprint(a - b)  # Difference: {1}`,
  realWorld: ['Removing duplicates from data', 'Membership testing', 'Mathematical set operations in data analysis'],
  applications: ['Data deduplication', 'Tag systems', 'Permission systems', 'Graph algorithms'],
  interviewQuestions: [
    { q: 'What is a set in Python?', a: 'A set is an unordered collection of unique, immutable elements.' },
    { q: 'Can sets contain duplicate values?', a: 'No, sets automatically remove duplicate values.' },
    { q: 'What is the difference between a set and a frozenset?', a: 'A set is mutable; a frozenset is immutable and can be used as a dictionary key.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/CTg_To0PwI8?si=rf0uxxQKwX7WQBpY', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1qySDLUm23NI9mzCVydT5xviR4HuClPuS/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
