import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'conditional-statements', title: 'Conditional Statements', breadcrumb: 'Control Flow', readingTime: '10 min',
  description: 'Conditional statements execute code based on whether a condition is True or False. Python supports if, if-else, and if-elif-else chains for decision-making.',
  prerequisites: ['Understanding of Boolean expressions.', 'Familiarity with comparison and logical operators.'],
  examples: `# if statement\nx = 10\nif x > 5:\n    print("x is greater than 5")\n\n# if-else\nage = 17\nif age >= 18:\n    print("Eligible to vote")\nelse:\n    print("Not eligible to vote")\n\n# if-elif-else\nscore = 85\nif score >= 90:\n    print("Grade: A")\nelif score >= 75:\n    print("Grade: B")\nelse:\n    print("Grade: C")`,
  realWorld: ['User authentication: Check if credentials match', 'E-commerce: Apply discounts based on cart value', 'Banking: Validate transactions', 'Game development: Check player lives and score'],
  applications: ['Decision-making in control flow', 'Form validations in web development', 'Branching logic in AI model pipelines', 'Finance apps: Rule-based interest or fraud detection'],
  interviewQuestions: [
    { q: 'What is the difference between if and if-else?', a: '"if" executes a block only when True; "if-else" provides an alternative block when False.' },
    { q: 'Can elif be used without else?', a: 'Yes, elif can be used without a final else block.' },
    { q: 'What happens if you forget to indent after if?', a: 'Python raises an IndentationError.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/BIPC3ATWlNc?si=YMzy36Cnfcjavbac', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/12SAccsb7-5r0HaypKEUzSmICWnFlW3Gd/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
