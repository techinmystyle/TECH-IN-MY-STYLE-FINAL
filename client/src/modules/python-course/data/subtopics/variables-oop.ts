import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'variables-oop', title: 'Instance and Class Variables', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Instance variables belong to a specific object and are defined using self. Class variables are shared across all instances and defined inside the class but outside methods. Understanding the difference is key to OOP design.',
  prerequisites: ['Basic understanding of Python syntax.', 'Understanding of functions and classes.', 'Familiarity with self keyword.'],
  examples: `# Instance variable\nclass Student:\n    def __init__(self, name, grade):\n        self.name = name    # instance variable\n        self.grade = grade\n\ns1 = Student("Alice", "A")\nprint(s1.name)  # Alice\n\n# Class variable\nclass Student:\n    school_name = "ABC School"  # class variable\n    def __init__(self, name):\n        self.name = name\n\ns1 = Student("Tom")\nprint(s1.school_name)  # ABC School\nStudent.school_name = "XYZ School"\nprint(s1.school_name)  # XYZ School`,
  realWorld: ['Instance variables store user-specific data', 'Class variables used for shared counters or constants', 'Local variables for temporary calculations'],
  applications: ['Web frameworks: Django models', 'Game dev: Object properties like health, speed', 'OOP-based systems: Banking, inventory'],
  interviewQuestions: [
    { q: 'What is the difference between instance and class variables?', a: 'Instance variables are unique to each object; class variables are shared across all instances.' },
    { q: 'How do you declare a class variable?', a: 'Define it inside the class body but outside any method.' },
    { q: 'What happens if you override a class variable in an instance?', a: 'A new instance variable is created for that object; the class variable remains unchanged.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/3AhENn7ESfg?si=32r9CS_L09AAB2CN', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1dfhRLLc-gbL6gLkYwW255y_JnZQL-7I5/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
