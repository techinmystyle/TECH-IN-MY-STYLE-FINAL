import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 're-module', title: 're Module', breadcrumb: 'Regular Expressions', readingTime: '10 min',
  description: 'The re module provides full regex support in Python. Key functions: re.search(), re.match(), re.findall(), re.finditer(), re.sub(), re.split(), and re.compile() for reusable patterns.',
  prerequisites: ['Introduction to regex.', 'Regex syntax and patterns.'],
  examples: `import re\n\n# re.sub() - replace\nresult = re.sub(r'\\s+', '-', 'Hello World Python')\nprint(result)  # Hello-World-Python\n\n# re.split()\nparts = re.split(r'[,;]', 'one,two;three,four')\nprint(parts)  # ['one','two','three','four']\n\n# re.compile() - reusable pattern\npattern = re.compile(r'\\d+')\nprint(pattern.findall('abc 123 def 456'))  # ['123','456']\n\n# re.finditer() - iterator of matches\nfor m in re.finditer(r'\\d+', 'a1b2c3'):\n    print(m.group(), m.start())`,
  realWorld: ['Replacing sensitive data in logs', 'Splitting CSV-like strings', 'Compiling patterns for repeated use in performance-critical code'],
  applications: ['Data cleaning pipelines', 'Web scraping', 'Log analysis', 'Text preprocessing for NLP'],
  interviewQuestions: [
    { q: 'What is re.compile() used for?', a: 're.compile() compiles a regex pattern into a reusable object, improving performance when used multiple times.' },
    { q: 'What is the difference between re.findall() and re.finditer()?', a: 're.findall() returns a list; re.finditer() returns an iterator of match objects with position info.' },
    { q: 'How do you replace text using regex?', a: 'Use re.sub(pattern, replacement, string).' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/K8L6KVGG-7o?si=7eMUwEeV90VtIeuW', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1e76ppPqQCjYsXlftU-ZJc4JXIrPEM0wK/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
