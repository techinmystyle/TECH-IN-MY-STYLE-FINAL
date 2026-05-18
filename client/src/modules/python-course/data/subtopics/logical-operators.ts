import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'logical-operators', title: 'Logical Operators', breadcrumb: 'Operators', readingTime: '10 min',
  description: 'Logical operators are used to combine conditional statements. Python supports: and (both conditions true), or (at least one true), not (negates the condition).',
  prerequisites: ['Understanding of Boolean expressions.', 'Familiarity with comparison operators.'],
  examples: `a = True\nb = False\nprint(a and b)   # False\nprint(a or b)    # True\nprint(not a)     # False\n\nx = 10\nprint(x > 5 and x < 20)  # True\nprint(x < 5 or x > 8)    # True\nprint(not (x == 10))      # False`,
  realWorld: ['Authentication: Check username AND password', 'Form validation: Multiple conditions', 'Access control: Role OR permission checks'],
  applications: ['Conditional programming', 'Data filtering', 'Security checks', 'Game logic'],
  interviewQuestions: [
    { q: 'What are logical operators in Python?', a: 'and, or, and not are logical operators used to combine or negate Boolean expressions.' },
    { q: 'What is short-circuit evaluation?', a: 'Python stops evaluating as soon as the result is determined: "and" stops on False, "or" stops on True.' },
    { q: 'What does "not" do?', a: '"not" negates a Boolean value: not True returns False.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/-Mx5popgTtE?si=OsSsfuk76HCJhDnf', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/154iOOFKxipjVFIjE9hTHvsE72rg-qaUW/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
