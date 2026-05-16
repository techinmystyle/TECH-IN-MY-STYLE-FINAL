import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'indentation', title: 'Indentation and Code Blocks', breadcrumb: 'Syntax and Semantics', readingTime: '10 min',
  description: 'Python uses indentation to define code blocks instead of curly braces. Consistent indentation is mandatory and defines the structure of your code.',
  prerequisites: ['Basic knowledge of writing and running Python code.'],
  examples: `# Correct indentation\nif True:\n    print("Indented block")\n    if True:\n        print("Nested block")\n\ndef greet():\n    print("Hello!")\n\nfor i in range(3):\n    print(i)`,
  realWorld: ['All Python programs require proper indentation', 'Code readability in team projects', 'Defining function and class bodies'],
  applications: ['All Python development', 'Collaborative coding', 'Open-source projects'],
  interviewQuestions: [
    { q: 'Why does Python use indentation?', a: 'Python uses indentation to define code blocks, making code more readable and enforcing consistent style.' },
    { q: 'What happens if indentation is inconsistent?', a: 'Python raises an IndentationError, stopping the program from running.' },
    { q: 'How many spaces are recommended for indentation?', a: 'PEP 8 recommends 4 spaces per indentation level.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/xVndqyPFu-k?si=KxPQ2Y2nhA-ESp50', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1Ep8fqTcyG0eONOjKy8u4oYf9HpKBVmLQ/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
