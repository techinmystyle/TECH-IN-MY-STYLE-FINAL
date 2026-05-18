import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'magic-methods', title: 'Magic Methods', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Magic methods (dunder methods) are special methods with double underscores like __init__, __str__, __len__, __add__. They allow you to define how objects behave with built-in operations and functions.',
  prerequisites: ['Understanding of classes and objects.', 'Familiarity with methods and operators.'],
  examples: `class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __len__(self):\n        return 2\n\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1)        # Vector(1, 2)\nprint(v1 + v2)   # Vector(4, 6)\nprint(len(v1))   # 2\nprint(v1 == v2)  # False`,
  realWorld: ['Custom string representation of objects', 'Operator overloading for mathematical classes', 'Context managers with __enter__ and __exit__'],
  applications: ['Data science: Custom array/matrix classes', 'Web frameworks: Model comparison', 'Game development: Custom game objects'],
  interviewQuestions: [
    { q: 'What are magic methods in Python?', a: 'Magic methods are special methods with double underscores that define object behavior for built-in operations.' },
    { q: 'What does __str__ do?', a: '__str__ defines the human-readable string representation of an object, called by print() and str().' },
    { q: 'What is operator overloading?', a: 'Defining magic methods like __add__, __sub__ to make operators work with custom objects.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/NwjSP1_WEfE?si=6umLdnlhbmoZyOyc', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/16LFGMDYHmg5anc55eOnllumVZ7zr6uXl/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
