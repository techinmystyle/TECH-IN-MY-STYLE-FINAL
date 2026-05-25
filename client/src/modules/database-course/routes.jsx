import { Routes, Route } from 'react-router-dom';
import DbHome from './pages/DbHome';
import DbModules from './pages/DbModules';
import DbTopic from './pages/DbTopic';
import DbEditor from './pages/DbEditor';
import DbVisualizer from './pages/DbVisualizer';
import DbInterview from './pages/DbInterview';
import DbSearch from './pages/DbSearch';
import DbBookmarks from './pages/DbBookmarks';
import DbNavbar from './components/DbNavbar';
import './styles/db-index.css';

export default function DatabaseCourseRoutes() {
  return (
    <div className="database-course-root">
      <DbNavbar />
      <Routes>
        <Route path="/" element={<DbHome />} />
        <Route path="/modules" element={<DbModules />} />
        <Route path="/topic/:id" element={<DbTopic />} />
        <Route path="/editor" element={<DbEditor />} />
        <Route path="/visualizer" element={<DbVisualizer />} />
        <Route path="/interview" element={<DbInterview />} />
        <Route path="/search" element={<DbSearch />} />
        <Route path="/bookmarks" element={<DbBookmarks />} />
      </Routes>
    </div>
  );
}
