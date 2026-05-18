import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'function-arguments', title: 'Arguments', breadcrumb: 'Functions', readingTime: '10 min',
  description: 'Python supports several types of function arguments: Positional, Keyword, Default, Variable-length (*args), and Variable-length keyword (**kwargs). These allow functions to be flexible and reusable.',
  prerequisites: ['Understanding of basic functions.', 'Familiarity with variables and data types.'],
  examples: `# Positional\ndef greet(name, age):\n    print(f"Hello {name}, you are {age} years old.")\ngreet("Basha", 20)\n\n# Default\ndef greet(name="Guest"):\n    print(f"Welcome, {name}!")\ngreet()  # Welcome, Guest!\n\n# *args\ndef total(*marks):\n    print(sum(marks))\ntotal(90, 85, 78)\n\n# **kwargs\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k}: {v}")\ninfo(name="Basha", age=20)`,
  realWorld: ['APIs: Flexible input parameters', 'Data pipelines: Variable feature sets', 'Logging systems: Contextual data via **kwargs'],
  applications: ['Web development: Routes with optional parameters', 'Data Science: Variable datasets', 'Machine Learning: Customizable training functions'],
  interviewQuestions: [
    { q: 'What are the types of arguments in Python?', a: 'Positional, Keyword, Default, *args (variable-length), and **kwargs (variable-length keyword).' },
    { q: 'What is the difference between *args and **kwargs?', a: '*args collects extra positional arguments as a tuple; **kwargs collects extra keyword arguments as a dictionary.' },
    { q: 'What is the order of arguments in a function definition?', a: 'Positional → Default → *args → **kwargs.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/Gd2O4tAf6r0?si=Eb02ny1qMdbLwTiM', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1hTrvKeyjxjpUetbz0_HQxmquFt4gf477/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
