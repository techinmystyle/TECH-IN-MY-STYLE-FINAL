import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'exceptions', title: 'Exceptions', breadcrumb: 'Error Handling', readingTime: '10 min',
  description: 'An exception is an error that occurs during program execution. Python provides try, except, else, and finally blocks to catch and handle exceptions gracefully, preventing program crashes.',
  prerequisites: ['Basic understanding of control flow.', 'Familiarity with functions.'],
  examples: `# Basic try-except\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")\n\n# Multiple exceptions\ntry:\n    a = int(input("Enter a number: "))\nexcept ValueError:\n    print("Invalid input.")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")\n\n# else and finally\ntry:\n    num = int("42")\nexcept ValueError:\n    print("Invalid.")\nelse:\n    print("Success:", num)\nfinally:\n    print("Done.")`,
  realWorld: ['Handling file not found errors', 'Managing user input validation', 'Catching network or API call failures', 'Logging and retrying database operations'],
  applications: ['Web Development: Handling form errors', 'Data Science: File loading exceptions', 'APIs: Request timeouts and 404s', 'Finance: Input validation'],
  interviewQuestions: [
    { q: 'What is an exception in Python?', a: 'An exception is an error that disrupts the normal flow of a program during execution.' },
    { q: 'What is the purpose of finally?', a: '"finally" always executes regardless of whether an exception occurred, used for cleanup.' },
    { q: 'What happens if you do not handle an exception?', a: 'The program terminates and prints a traceback.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/1QxBcBMB0NI?si=jriXWubShYFpYoBZ', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1I8yY0zfv228LDCkwPPInMxaqHj8FyZNr/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
