import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'inheritance', title: 'Inheritance', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Inheritance allows a class (child) to acquire properties and methods from another class (parent). Python supports single, multiple, and multilevel inheritance. The super() function calls the parent class.',
  prerequisites: ['Understanding of classes and objects.', 'Familiarity with methods and constructors.'],
  examples: `# Single inheritance\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nd = Dog("Buddy")\nprint(d.speak())  # Buddy says Woof!\n\n# super()\nclass Cat(Animal):\n    def __init__(self, name, color):\n        super().__init__(name)\n        self.color = color\n\n# Multiple inheritance\nclass A:\n    def hello(self): return "Hello from A"\nclass B:\n    def hello(self): return "Hello from B"\nclass C(A, B):\n    pass\nprint(C().hello())  # Hello from A (MRO)`,
  realWorld: ['Building class hierarchies in frameworks', 'Extending base models in Django', 'Reusing code across related classes'],
  applications: ['Web development: Model inheritance', 'Game development: Character types', 'GUI frameworks: Widget hierarchies'],
  interviewQuestions: [
    { q: 'What is inheritance in Python?', a: 'Inheritance allows a child class to reuse attributes and methods from a parent class.' },
    { q: 'What is super()?', a: 'super() returns a proxy object that delegates method calls to the parent class.' },
    { q: 'What is MRO (Method Resolution Order)?', a: 'MRO determines the order in which Python searches for methods in a class hierarchy (C3 linearization).' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/4SO3sScshvA?si=7-wDyNm1LvlYA3aC', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1AiSaOYeY9My5rpnjWcFBYk4gjUg_YvvR/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
