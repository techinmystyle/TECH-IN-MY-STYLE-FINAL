import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'ides', title: "Python IDEs", breadcrumb: 'Getting Started', readingTime: '10 min',
  description: 'Python IDEs (Integrated Development Environments) provide comprehensive tools to write, edit, test, and debug Python code. Popular options include PyCharm, VS Code, Jupyter Notebook, Thonny, Spyder, and IDLE.',
  prerequisites: ['Basic understanding of Python syntax and usage.', 'Python must be installed on the system.'],
  examples: `# IDE Comparison\n# PyCharm   - Professional development\n# VS Code    - Lightweight and customizable\n# Jupyter    - Data science, ML\n# Thonny     - Beginners\n# Spyder     - Scientific computing\n# IDLE       - Default Python IDE`,
  realWorld: ['Software development with PyCharm and VS Code', 'Data Science with Jupyter Notebook', 'Education with Thonny and IDLE', 'Scientific Computing with Spyder'],
  applications: ['Universities: Teaching Python in CS courses', 'Tech Companies: Software development, AI/ML projects', 'Research Labs: Data analysis, simulations', 'Hackathons: Quick prototyping'],
  interviewQuestions: [
    { q: 'What is an IDE and how does it help in Python development?', a: 'An IDE provides tools like syntax highlighting, auto-completion, debugging, and version control integration to speed up development.' },
    { q: 'Compare VS Code and PyCharm.', a: 'VS Code is lightweight and highly customizable via extensions; PyCharm is a full-featured IDE with built-in Python-specific tools.' },
    { q: 'What are the benefits of Jupyter Notebooks in Data Science?', a: 'Jupyter allows interactive coding with inline visualizations, markdown documentation, and easy sharing of results.' },
  ],
  resources: [
    { icon: 'video', title: 'Topic video source', description: 'A comprehensive video', link: 'https://youtu.be/eXinDi55iOk?si=pbxijORLWxra8jbU', linkText: 'Watch' },
    { icon: 'book', title: 'Python pdf', description: 'pdf on topic', link: 'https://drive.google.com/file/d/1yofXTpAzfkgOj_cD7qvb29G_uCAG6gqe/view?usp=drive_link', linkText: 'Visit' },
  ],
}
export default data
