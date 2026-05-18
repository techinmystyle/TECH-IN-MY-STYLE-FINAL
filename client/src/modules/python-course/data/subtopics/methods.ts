import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'methods', title: 'Methods', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Methods are functions defined inside a class. Python supports instance methods (use self), class methods (use cls, decorated with @classmethod), and static methods (no self or cls, decorated with @staticmethod).',
  prerequisites: ['Understanding of classes and objects.', 'Familiarity with functions.'],
  examples: `class MyClass:\n    count = 0\n\n    def __init__(self, name):\n        self.name = name\n        MyClass.count += 1\n\n    # Instance method\n    def greet(self):\n        return f"Hello, {self.name}!"\n\n    # Class method\n    @classmethod\n    def get_count(cls):\n        return cls.count\n\n    # Static method\n    @staticmethod\n    def info():\n        return "This is MyClass"\n\nobj = MyClass("Alice")\nprint(obj.greet())          # Hello, Alice!\nprint(MyClass.get_count())  # 1\nprint(MyClass.info())       # This is MyClass`,
  realWorld: ['Instance methods for object-specific behavior', 'Class methods for factory patterns', 'Static methods for utility functions'],
  applications: ['Web frameworks: View methods', 'Data science: Model methods', 'Game development: Character behaviors'],
  interviewQuestions: [
    { q: 'What is the difference between instance, class, and static methods?', a: 'Instance methods use self; class methods use cls and @classmethod; static methods use neither and @staticmethod.' },
    { q: 'What is self in Python?', a: 'self refers to the current instance of the class.' },
    { q: 'When would you use a static method?', a: 'When the method does not need access to instance or class data — utility functions.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/ANgYwq9fFQw?si=2PcIWTBVS_7JsSAz', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1sDYooN8bcOL-XwE4c5oIm6lhh3ux-ZUA/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
