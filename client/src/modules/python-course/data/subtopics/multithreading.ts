import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'multithreading', title: 'Multithreading and Multiprocessing', breadcrumb: 'Advanced Topics', readingTime: '10 min',
  description: 'Multithreading runs multiple threads concurrently within a single process (good for I/O-bound tasks). Multiprocessing runs multiple processes in parallel (good for CPU-bound tasks). Python provides the threading and multiprocessing modules.',
  prerequisites: ['Understanding of functions.', 'Familiarity with loops and basic Python programs.'],
  examples: `import threading\nimport multiprocessing\n\n# Threading\ndef print_numbers():\n    for i in range(5):\n        print(f"Thread: {i}")\n\nt = threading.Thread(target=print_numbers)\nt.start()\nt.join()\n\n# Multiprocessing\ndef square(n):\n    print(f"Square of {n}: {n*n}")\n\nif __name__ == "__main__":\n    p = multiprocessing.Process(target=square, args=(5,))\n    p.start()\n    p.join()\n\n# Thread pool\nfrom concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor(max_workers=3) as ex:\n    results = list(ex.map(square, [1,2,3,4,5]))`,
  realWorld: ['Web servers handling multiple requests', 'Downloading multiple files simultaneously', 'CPU-intensive data processing in parallel', 'Real-time data processing pipelines'],
  applications: ['Web development: Concurrent request handling', 'Data science: Parallel data processing', 'Automation: Simultaneous task execution'],
  interviewQuestions: [
    { q: 'What is the difference between multithreading and multiprocessing?', a: 'Multithreading shares memory within one process (I/O-bound); multiprocessing uses separate memory spaces (CPU-bound).' },
    { q: 'What is the GIL in Python?', a: 'The Global Interpreter Lock (GIL) prevents multiple threads from executing Python bytecode simultaneously, limiting true parallelism in threads.' },
    { q: 'When should you use multiprocessing over multithreading?', a: 'Use multiprocessing for CPU-bound tasks; multithreading for I/O-bound tasks like network requests or file operations.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/AZnGRKFUU0c?si=XCXUdwaPv9HC3wHF', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1L5zvZetaE5oFwkUolie3cWoGLiC8DC80/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
