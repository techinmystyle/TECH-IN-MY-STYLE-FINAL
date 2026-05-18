import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'loops', title: 'Loops (for, while)', breadcrumb: 'Control Flow', readingTime: '10 min',
  description: 'Loops allow you to execute a block of code repeatedly. Python supports for loops (iterate over sequences) and while loops (repeat while a condition is True).',
  prerequisites: ['Understanding of variables and data types.', 'Familiarity with conditional statements.'],
  examples: `# for loop\nfor i in range(5):\n    print(i)  # 0 1 2 3 4\n\n# for loop over list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# while loop\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1`,
  realWorld: ['Processing items in a list', 'Reading lines from a file', 'Repeating tasks until a condition is met', 'Iterating over database records'],
  applications: ['Data processing pipelines', 'Web scraping', 'Game loops', 'Automation scripts'],
  interviewQuestions: [
    { q: 'What is the difference between for and while loops?', a: '"for" iterates over a sequence; "while" repeats as long as a condition is True.' },
    { q: 'What does range() do?', a: 'range() generates a sequence of numbers, commonly used with for loops.' },
    { q: 'How do you exit a loop early?', a: 'Use the "break" statement to exit a loop immediately.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/k4R7FwL2XYA?si=ui8uGlEVmfWzw9Fm', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1fzr0FJCAsxtabHT1ifrMgU--tGL7Jk8b/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
