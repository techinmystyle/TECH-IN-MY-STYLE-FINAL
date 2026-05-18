import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'regex-intro', title: 'Introduction to regex', breadcrumb: 'Regular Expressions', readingTime: '10 min',
  description: 'Regular expressions (regex) are patterns used to match character combinations in strings. Python provides the re module for working with regex. They are powerful tools for searching, validating, and manipulating text.',
  prerequisites: ['Basic understanding of strings.', 'Familiarity with Python functions.'],
  examples: `import re\n\n# Search for a pattern\ntext = "Hello, my email is test@example.com"\npattern = r'\\w+@\\w+\\.\\w+'\nmatch = re.search(pattern, text)\nif match:\n    print(match.group())  # test@example.com\n\n# Find all matches\nnumbers = "Phone: 123-456-7890, Alt: 987-654-3210"\nfound = re.findall(r'\\d{3}-\\d{3}-\\d{4}', numbers)\nprint(found)  # ['123-456-7890', '987-654-3210']`,
  realWorld: ['Email and phone number validation', 'Web scraping: Extracting data from HTML', 'Log file parsing', 'Search and replace in text editors'],
  applications: ['Form validation in web development', 'Data cleaning in data science', 'Security: Pattern-based threat detection', 'NLP: Text preprocessing'],
  interviewQuestions: [
    { q: 'What is a regular expression?', a: 'A regular expression is a sequence of characters that defines a search pattern for string matching.' },
    { q: 'What is the re module in Python?', a: 'The re module provides functions for working with regular expressions: search, match, findall, sub, etc.' },
    { q: 'What is the difference between re.search() and re.match()?', a: 're.match() only matches at the beginning of the string; re.search() scans the entire string.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/xHRxrJ24m1I?si=4pZAslvn06xc7_vw', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1sbB4Po60grYo-mDk8TxAD1dXGM5SbPIT/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
