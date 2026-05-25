import { Routes, Route } from 'react-router-dom'
import DlHome from './pages/DlHome'
import DlTopics from './pages/DlTopics'
import DlSubtopicPage from './pages/topics/DlSubtopicPage'
import './styles/dl-index.css'
import './styles/dl-app.css'

export default function DlCourseRoutes() {
  return (
    <div className="dl-course-root">
      <Routes>
        <Route path="/" element={<DlHome />} />
        <Route path="/topics" element={<DlTopics />} />
        <Route path="/topics/:topicId/:subtopicId" element={<DlSubtopicPage />} />
      </Routes>
    </div>
  )
}
