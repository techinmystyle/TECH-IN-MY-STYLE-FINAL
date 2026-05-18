import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'polymorphism', title: 'Polymorphism', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Polymorphism allows objects of different classes to be treated as objects of a common base class. The same method name can behave differently depending on the object. Python achieves this through method overriding and duck typing.',
  prerequisites: ['Understanding of classes, objects, and inheritance.'],
  examples: `# Method overriding\nclass Animal:\n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow!"\n\n# Polymorphic behavior\nanimals = [Dog(), Cat(), Animal()]\nfor a in animals:\n    print(a.speak())\n\n# Duck typing\nclass Duck:\n    def quack(self): return "Quack!"\nclass Person:\n    def quack(self): return "I am quacking like a duck!"\n\ndef make_it_quack(obj):\n    print(obj.quack())\n\nmake_it_quack(Duck())\nmake_it_quack(Person())`,
  realWorld: ['Payment systems: Different payment methods with same interface', 'Shape rendering: Different shapes with same draw() method', 'Plugin systems: Interchangeable components'],
  applications: ['Web frameworks: Pluggable backends', 'Game development: Different character types', 'APIs: Unified interfaces for different data sources'],
  interviewQuestions: [
    { q: 'What is polymorphism in Python?', a: 'Polymorphism allows the same method to behave differently based on the object calling it.' },
    { q: 'What is duck typing?', a: 'Duck typing means Python checks for the presence of methods/attributes rather than the type of the object.' },
    { q: 'What is method overriding?', a: 'When a child class provides a specific implementation of a method already defined in the parent class.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/UPT4Q_sTOpY?si=uv7E2q3bah9bsKZ2', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/15uG381Pkka_8NBAIfO6wFk_MMtJ1QSOX/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
