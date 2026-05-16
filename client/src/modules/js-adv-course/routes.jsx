import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/JsAdvGlobal.css';
import JsAdvHome from './pages/JsAdvHome';
import JsAdvTopics from './pages/JsAdvTopics';
import JsAdvTopicPage from './pages/JsAdvTopicPage';
import JsAdvCompiler from './pages/JsAdvCompiler';
import JsAdvConnect from './pages/JsAdvConnect';
import JsAdvResources from './pages/JsAdvResources';

export default function JsAdvCourseRoutes() {
  return (
    <div className="js-adv-course-root">
      <Routes>
        <Route path="/" element={<JsAdvHome />} />
        <Route path="/topics" element={<JsAdvTopics />} />
        <Route path="/topics/:topic" element={<JsAdvTopicPage />} />
        <Route path="/compiler" element={<JsAdvCompiler />} />
        <Route path="/connect" element={<JsAdvConnect />} />
        <Route path="/resources" element={<JsAdvResources />} />
      </Routes>
    </div>
  );
}
