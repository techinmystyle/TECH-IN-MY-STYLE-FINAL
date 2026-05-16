import type { SubtopicData } from '../subtopicsData'

const data: SubtopicData = {
  slug: 'booleans',
  title: 'Python Boolean',
  breadcrumb: 'Data Types',
  readingTime: '10 min',
  description: `A Boolean in Python is a data type that represents one of two values: True or False. Booleans are used in logical operations, comparisons, and control flow like if, while, etc. Internally, True is represented as 1 and False as 0.`,
  prerequisites: ['Familiarity with Python data types and variables.', 'Basic understanding of conditional statements (like if, else).'],
  examples: `# Boolean values\nis_true = True\nis_false = False\nprint(10 > 5)   # True\nprint(3 == 7)   # False\na = True\nb = False\nprint(a and b)  # False\nprint(a or b)   # True\nprint(not a)    # False\nprint(bool(0))  # False\nprint(bool(5))  # True`,
  realWorld: ['Checking user permissions and authentication.', 'Decision-making in control flows.', 'Validating form inputs or data entries.', 'Toggling states (e.g., turning features on/off).'],
  applications: ['Web development: Login success/failure flags.', 'AI/ML: Boolean masks for selecting data.', 'Game development: Collision detection, win/loss state.', 'Data science: Filtering data with Boolean conditions.'],
  interviewQuestions: [
    { q: 'What is a Boolean in Python?', a: 'A Boolean is a data type that represents one of two values: True or False.' },
    { q: 'How are Booleans internally represented?', a: 'Internally, True is represented as 1 and False as 0.' },
    { q: 'What will bool([]) return?', a: 'bool([]) returns False because empty sequences are "falsy" in Python.' },
    { q: 'Explain the difference between and, or, and not.', a: '"and" returns True if both are True; "or" if at least one is True; "not" negates the value.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/9OK32jb_TdI?si=xdrF6PINsEOIg5R1', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1SlG7xt6UGPQ7qDwN4N57V7_pq4VX0g6N/view?usp=drive_link', linkText: 'Visit' },
  ],
}

export default data
