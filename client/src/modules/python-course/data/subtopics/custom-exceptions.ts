import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'custom-exceptions', title: 'Custom Exception Classes', breadcrumb: 'Error Handling', readingTime: '10 min',
  description: 'Custom exceptions let you define your own error types by inheriting from the Exception class. They improve code clarity and allow building exception hierarchies for large applications.',
  prerequisites: ['Knowledge of classes and inheritance.', 'Understanding of built-in exceptions and try-except.'],
  examples: `# Basic custom exception\nclass InvalidInputError(Exception):\n    pass\n\ndef check(value):\n    if not isinstance(value, int):\n        raise InvalidInputError("Input must be an integer.")\n\n# Exception hierarchy\nclass AppError(Exception):\n    pass\n\nclass DatabaseError(AppError):\n    pass\n\nclass ValidationError(AppError):\n    pass\n\n# Logging exceptions\nimport logging\nlogging.basicConfig(filename='app.log', level=logging.ERROR)\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    logging.error("Exception occurred", exc_info=True)`,
  realWorld: ['Define clear errors in large applications', 'Hierarchical exception structures in APIs', 'Debugging production issues using logs'],
  applications: ['Web Development: Specific user errors', 'Banking/Finance: Transaction rule exceptions', 'Machine Learning Pipelines: Log model issues'],
  interviewQuestions: [
    { q: 'Why should we create custom exceptions?', a: 'Custom exceptions make error handling more descriptive and domain-specific.' },
    { q: 'How do you define a custom exception?', a: 'Inherit from Exception: class MyError(Exception): pass' },
    { q: 'What is an exception hierarchy?', a: 'A parent-child relationship between exception classes for organized error handling.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/-Xvkpm7t3bk?si=LtIJL-TZ_gg0e76z', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/11j4FVU_7IHVXfuntfnRl-WCaL6T-jYDh/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
