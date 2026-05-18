import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'abstraction', title: 'Abstraction', breadcrumb: 'OOP', readingTime: '10 min',
  description: 'Abstraction hides complex implementation details and shows only the necessary features. In Python, abstraction is achieved using Abstract Base Classes (ABCs) via the abc module with @abstractmethod decorator.',
  prerequisites: ['Basic understanding of Classes and Objects.', 'Inheritance.', 'Functions and Methods.'],
  examples: `from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self):\n        pass\n\n    def breathe(self):\n        print("Breathing...")\n\nclass Dog(Animal):\n    def sound(self):\n        print("Bark")\n\nclass Cat(Animal):\n    def sound(self):\n        print("Meow")\n\nd = Dog()\nd.sound()    # Bark\nd.breathe()  # Breathing...\n\n# Cannot instantiate abstract class\n# a = Animal()  # TypeError`,
  realWorld: ['Banking: Abstract transaction operations', 'ML Models: Base Model class with train() and predict()', 'Device Drivers: Unified interface for different hardware'],
  applications: ['Software architecture design', 'API and SDK development', 'Plugin-based systems', 'Backend frameworks'],
  interviewQuestions: [
    { q: 'What is abstraction in Python?', a: 'Abstraction hides implementation details and exposes only the necessary interface.' },
    { q: 'How do you declare an abstract method?', a: 'Use @abstractmethod decorator inside a class that inherits from ABC.' },
    { q: 'Can we create objects of abstract classes?', a: 'No, instantiating an abstract class raises a TypeError.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/TenfEct8AxM?si=ixDcmFW2X5yLzWzt', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1psW3gyr3ATx5OTeZi_1BpkQmxwkwYl5m/view?usp=sharing', linkText: 'Visit' },
  ],
}
export default data
