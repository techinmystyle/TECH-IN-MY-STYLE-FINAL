import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'break-continue-pass', title: 'Break, Continue, Pass', breadcrumb: 'Control Flow', readingTime: '10 min',
  description: 'break exits a loop immediately. continue skips the current iteration and moves to the next. pass is a null statement used as a placeholder where code is syntactically required but nothing should happen.',
  prerequisites: ['Understanding of loops (for, while).'],
  examples: `# break\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0 1 2 3 4\n\n# continue\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0 1 3 4\n\n# pass\nfor i in range(3):\n    pass  # placeholder, does nothing`,
  realWorld: ['break: Stop searching once item is found', 'continue: Skip invalid data in processing', 'pass: Placeholder for future code in class/function definitions'],
  applications: ['Data processing: Skip invalid records', 'Search algorithms: Early exit on match', 'Stub functions during development'],
  interviewQuestions: [
    { q: 'What is the difference between break and continue?', a: '"break" exits the loop entirely; "continue" skips the current iteration and continues with the next.' },
    { q: 'What does pass do?', a: '"pass" is a null operation — it does nothing and is used as a placeholder.' },
    { q: 'Can break be used in nested loops?', a: '"break" only exits the innermost loop it is in.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/k4R7FwL2XYA?si=ui8uGlEVmfWzw9Fm', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1fzr0FJCAsxtabHT1ifrMgU--tGL7Jk8b/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
