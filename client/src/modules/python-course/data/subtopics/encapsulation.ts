import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'encapsulation', title: 'Encapsulation', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Encapsulation binds data and methods together within a class and restricts direct access to some components. Python uses naming conventions: public (name), protected (_name), and private (__name) with name mangling.',
  prerequisites: ['Understanding of classes, objects, and methods.', 'Basic variable declaration in Python.'],
  examples: `class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # private\n\n    def get_balance(self):\n        return self.__balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\nacc = BankAccount(1000)\nacc.deposit(500)\nprint(acc.get_balance())  # 1500\n# print(acc.__balance)   # AttributeError\n\n# Protected\nclass Person:\n    def __init__(self, age):\n        self._age = age  # protected by convention`,
  realWorld: ['Banking: Restrict direct access to account balance', 'Authentication: Hide passwords or tokens', 'Game Development: Protect game state variables'],
  applications: ['Security and sensitive data protection', 'Clean software design and modularity', 'Enforcing business logic via getter/setter'],
  interviewQuestions: [
    { q: 'What is encapsulation in Python?', a: 'Encapsulation restricts direct access to object data and bundles data with methods that operate on it.' },
    { q: 'How is private data implemented in Python?', a: 'Using double underscore prefix (__name), which triggers name mangling.' },
    { q: 'What is name mangling?', a: 'Python renames __attr to _ClassName__attr to make it harder to access from outside the class.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/fjIUS1jlVkA?si=ewZAOpagyIQ1Ycyp', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/10wHd6SaI25zPXn1o_zM08BHh0gVA24BH/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
