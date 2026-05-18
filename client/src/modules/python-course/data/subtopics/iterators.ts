import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'iterators', title: 'Iterators and Generators', breadcrumb: 'Advanced Topics', readingTime: '10 min',
  description: 'An iterator is an object with __iter__() and __next__() methods. A generator is a function that uses yield to produce values lazily, one at a time. Generators are memory-efficient for large data sequences.',
  prerequisites: ['Understanding of functions and loops.', 'Familiarity with classes and objects.'],
  examples: `# Custom iterator\nclass Counter:\n    def __init__(self, limit):\n        self.limit = limit\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current >= self.limit:\n            raise StopIteration\n        self.current += 1\n        return self.current\n\nfor n in Counter(3):\n    print(n)  # 1 2 3\n\n# Generator function\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci(7)))  # [0,1,1,2,3,5,8]\n\n# Generator expression\ngen = (x**2 for x in range(5))\nprint(list(gen))  # [0,1,4,9,16]`,
  realWorld: ['Processing large files line by line', 'Streaming data from APIs', 'Infinite sequences like Fibonacci', 'Lazy evaluation in data pipelines'],
  applications: ['Data science: Large dataset processing', 'Web development: Streaming responses', 'Automation: Processing log files'],
  interviewQuestions: [
    { q: 'What is the difference between an iterator and an iterable?', a: 'An iterable has __iter__(); an iterator has both __iter__() and __next__().' },
    { q: 'What is a generator?', a: 'A generator is a function that uses yield to produce values lazily, one at a time.' },
    { q: 'What is the advantage of generators over lists?', a: 'Generators are memory-efficient — they produce values on demand instead of storing all at once.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/390dkU2TUCE?si=XRvgmod3Uqo-50Yz', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1IzpmYbDu_KGi9NZ7YMBi0QMkOPhzUnnf/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
