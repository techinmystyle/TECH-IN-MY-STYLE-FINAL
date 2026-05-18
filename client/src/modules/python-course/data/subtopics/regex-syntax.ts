import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'regex-syntax', title: 'Syntax and Patterns', breadcrumb: 'Regular Expressions', readingTime: '10 min',
  description: 'Regex syntax includes metacharacters (. ^ $ * + ? {} [] \\ | ()), character classes (\\d \\w \\s), anchors (^ $), quantifiers (* + ? {n,m}), and groups. Mastering these patterns enables powerful text processing.',
  prerequisites: ['Introduction to regex.', 'Basic understanding of strings.'],
  examples: `import re\n\n# Metacharacters\nprint(re.findall(r'.at', 'cat bat hat'))  # ['cat','bat','hat']\n\n# Character classes\nprint(re.findall(r'\\d+', 'abc 123 def 456'))  # ['123','456']\nprint(re.findall(r'\\w+', 'Hello World!'))     # ['Hello','World']\n\n# Anchors\nprint(re.match(r'^Hello', 'Hello World'))  # match\nprint(re.search(r'World$', 'Hello World')) # match\n\n# Quantifiers\nprint(re.findall(r'\\d{2,4}', '1 12 123 1234 12345'))  # ['12','123','1234','1234']`,
  realWorld: ['Validating passwords with complexity rules', 'Parsing structured log files', 'Extracting dates and times from text'],
  applications: ['Data cleaning: Removing unwanted characters', 'Security: Input sanitization', 'NLP: Tokenization patterns'],
  interviewQuestions: [
    { q: 'What does \\d match in regex?', a: '\\d matches any digit character (0-9).' },
    { q: 'What is the difference between * and + quantifiers?', a: '* matches zero or more; + matches one or more occurrences.' },
    { q: 'What are groups in regex?', a: 'Groups are defined with () and capture matched substrings for extraction.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/sHw5hLYFaIw?si=bjGxTKJiSpR8hPAU', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1Eth0TQWiVzV1IiR4kAy5O07HWdyIg4lH/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
