import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'lists-advanced', title: 'Lists (Advanced)', breadcrumb: 'Data Structures', readingTime: '10 min',
  description: 'Advanced list operations in Python include slicing, sorting, copying, nested lists, and built-in methods like sort(), reverse(), count(), and index(). Mastering these makes data manipulation efficient.',
  prerequisites: ['Understanding of basic lists.', 'Familiarity with loops and functions.'],
  examples: `nums = [3, 1, 4, 1, 5, 9, 2, 6]\n# Sorting\nnums.sort()\nprint(nums)  # [1, 1, 2, 3, 4, 5, 6, 9]\n\n# Slicing\nprint(nums[2:5])  # [2, 3, 4]\nprint(nums[::-1]) # reversed\n\n# Count and index\nprint(nums.count(1))  # 2\nprint(nums.index(5))  # 5\n\n# Nested lists\nmatrix = [[1,2],[3,4],[5,6]]\nfor row in matrix:\n    print(row)`,
  realWorld: ['Sorting leaderboards', 'Matrix operations in data science', 'Batch processing records'],
  applications: ['Data science: Feature matrices', 'Web development: Sorted query results', 'Algorithms: Sorting and searching'],
  interviewQuestions: [
    { q: 'What is the difference between sort() and sorted()?', a: 'sort() modifies the list in-place; sorted() returns a new sorted list.' },
    { q: 'How do you copy a list in Python?', a: 'Use list.copy(), list[:], or copy.deepcopy() for nested lists.' },
    { q: 'What is list slicing?', a: 'Slicing extracts a portion of a list using [start:stop:step] syntax.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/QLTdOEn79Rc?si=DPAc76wtZ7nkqTbX', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1-jhcnp9rfDhs6ZQ2iWGPtPrIyfuDymjP/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
