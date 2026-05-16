import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'python-installation', title: 'Python Installation and Setup', breadcrumb: 'Getting Started', readingTime: '10 min',
  description: 'Learn how to install Python on your system and set up your development environment. Covers Windows, macOS, and Linux installation steps.',
  prerequisites: ['None - perfect for absolute beginners!'],
  examples: `# Verify Python installation\n# Run in terminal:\npython --version\n# or\npython3 --version\n\n# Your first Python script\nprint("Python is installed!")`,
  realWorld: ['Setting up development environments', 'Configuring CI/CD pipelines', 'Deploying Python applications'],
  applications: ['All Python development starts with installation', 'Data science environments', 'Web development setups'],
  interviewQuestions: [
    { q: 'What is pip?', a: 'pip is the package installer for Python, used to install and manage Python packages.' },
    { q: 'What is a virtual environment?', a: 'A virtual environment is an isolated Python environment that allows you to manage dependencies per project.' },
    { q: 'How do you check the Python version?', a: 'Run "python --version" or "python3 --version" in the terminal.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/C3bOxcILGu4?si=XX9e7NeFni6McCbo', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1yofXTpAzfkgOj_cD7qvb29G_uCAG6gqe/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
