import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'classes-objects', title: 'Python Classes and Objects', breadcrumb: 'OOP', readingTime: '20 min',
  description: 'Python is an object-oriented programming language. Everything is an object. A class is a blueprint for creating objects (instances). OOP helps in building complex, organized code.',
  prerequisites: ['Functions', 'Control Flow', 'Variables'],
  examples: `# Class definition\nclass Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        return f"{self.name} is barking!"\n\nmy_dog = Dog("Buddy", "Golden Retriever")\nprint(my_dog.name) # Buddy\nprint(my_dog.bark()) # Buddy is barking!`,
  realWorld: ['Web frameworks (Django)', 'Game development (Pygame)', 'GUIs (Tkinter)', 'Simulation models'],
  applications: ['Enterprise software', 'AI research', 'High-performance web services', 'Embedded systems'],
  interviewQuestions: [
    { q: 'What is the "self" keyword?', a: 'It refers to the current instance of the class, allowing access to its attributes and methods.' },
    { q: 'What is the "__init__" method?', a: 'It is a special method called when a new object is initiated; used for setting initial attributes.' },
    { q: 'What is inheritance?', a: 'A way to create a new class from an existing one, inheriting its methods and attributes.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/8O5kX73OkIY?si=lJs1abc1t3TPlkfW', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1BHjzxbD831R7e9n8H44USfVl0pqB_5He/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
