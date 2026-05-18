import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'membership-operators', title: 'Membership Operators', breadcrumb: 'Operators', readingTime: '10 min',
  description: 'Membership operators test whether a value is a member of a sequence (list, tuple, string, set, dictionary). Python supports: in (member of) and not in (not a member of).',
  prerequisites: ['Understanding of data types like lists, tuples, strings.'],
  examples: `fruits = ["apple", "banana", "cherry"]\nprint("apple" in fruits)      # True\nprint("grape" not in fruits)  # True\n\ntext = "Hello Python"\nprint("Python" in text)       # True\n\nnums = {1, 2, 3, 4}\nprint(3 in nums)              # True`,
  realWorld: ['Checking if a user is in an allowed list', 'Validating input against allowed values', 'Searching for keywords in text'],
  applications: ['Security: Checking permissions', 'Data validation', 'Search functionality', 'Filtering datasets'],
  interviewQuestions: [
    { q: 'What are membership operators in Python?', a: '"in" and "not in" test whether a value exists in a sequence.' },
    { q: 'Can membership operators be used with dictionaries?', a: 'Yes, "in" checks for keys in a dictionary by default.' },
    { q: 'What is the time complexity of "in" for lists vs sets?', a: 'O(n) for lists; O(1) average for sets and dictionaries.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/zS_pt7QjpsI?si=-kLpK5iFY2k92CjA', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1fT8-M7vLYvLsWU8BvSv47nmeR-wUNgLs/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
