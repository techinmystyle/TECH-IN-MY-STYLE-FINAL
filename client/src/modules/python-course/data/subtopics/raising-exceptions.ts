import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'raising-exceptions', title: 'Raising Exceptions', breadcrumb: 'Error Handling', readingTime: '10 min',
  description: 'You can raise exceptions manually using the raise keyword. This is useful for enforcing business rules and validating inputs. You can raise built-in exceptions or custom ones.',
  prerequisites: ['Knowledge of exceptions and try-except.'],
  examples: `# Raise built-in exception\ndef withdraw(amount):\n    if amount < 0:\n        raise ValueError("Negative amount not allowed.")\n    print("Withdrawn:", amount)\n\n# Re-raising\ntry:\n    withdraw(-100)\nexcept ValueError as e:\n    print("Error:", e)\n    raise  # re-raise the exception\n\n# Raise with custom message\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise ValueError(f"Invalid age: {age}")`,
  realWorld: ['Enforcing business rules in banking systems', 'Input validation in web forms', 'API parameter validation'],
  applications: ['Web Development: Raise HTTP exceptions', 'Banking/Finance: Transaction rule enforcement', 'Data validation pipelines'],
  interviewQuestions: [
    { q: 'How do you raise an exception in Python?', a: 'Use the raise keyword: raise ValueError("message").' },
    { q: 'What is the difference between raise and raise Exception()?', a: 'raise re-raises the current exception; raise Exception() creates a new one.' },
    { q: 'When should you raise exceptions?', a: 'When input is invalid, a precondition is violated, or a business rule is broken.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/-JkNMu2qSVw?si=1S5hNZc5_P2HkILX', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/16wIIXitFPmtIy15peikk07KL8JOwS2qx/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
