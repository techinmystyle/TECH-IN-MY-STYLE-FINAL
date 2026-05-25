import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Courses from '@pages/Courses';
import AboutUs from '@pages/AboutUs';
import StayConnected from '@pages/StayConnected';
import Feedback from '@pages/Feedback';
import Leaderboard from '@pages/Leaderboard';
import Login from '@pages/Login';
import Register from '@pages/Register';
import ForgotPassword from '@pages/ForgotPassword';
import ResetPassword from '@pages/ResetPassword';
import ProtectedRoute from '@components/ProtectedRoute';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsAndConditions from '@pages/TermsAndConditions';
import Disclaimer from '@pages/Disclaimer';
import HtmlCourseRoutes from '@modules/html-course/routes';
import CssCourseRoutes from '@modules/css-course/routes';
import PythonCourseRoutes from '@modules/python-course/routes';
import JsCourseRoutes from '@modules/js-basic-course/routes';
import JsIntCourseRoutes from '@modules/js-int-course/routes';
import JsAdvCourseRoutes from '@modules/js-adv-course/routes';
import JavaCourseRoutes from '@modules/java-course/routes';
import CCourseRoutes from '@modules/c-course/routes';
import AiCourseRoutes from '@modules/ai-course/routes';
import DlCourseRoutes from '@modules/dl-course/routes';
import MlCourseRoutes from '@modules/ml-course/routes';
import DscCourseRoutes from '@modules/dsc-course/routes';
import DsaCourseRoutes from '@modules/dsa-course/routes';
import NlpCourseRoutes from '@modules/nlp-course/routes';
import OsCourseRoutes from '@modules/os-course/routes';
import SystemDesignRoutes from '@modules/system-design-course/routes';
import DatabaseCourseRoutes from '@modules/database-course/routes';
import GenAiCourseRoutes from '@modules/genai-course/routes';
import FsPyCourseRoutes from '@modules/fullstack-python-course/routes';
import FsJavaCourseRoutes from '@modules/fullstack-java-platform-course/routes';
import './App.css';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        
        {/* ── Legal Pages (PUBLIC — no auth, required for AdSense) ── */}
        <Route path="/privacy-policy"      element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer"           element={<Disclaimer />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
        <Route path="/stay-connected" element={<ProtectedRoute><StayConnected /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        
        {/* HTML Course Module Routes */}
        <Route path="/html-course/*" element={<HtmlCourseRoutes />} />
        
        {/* CSS Course Module Routes */}
        <Route path="/css-course/*" element={<CssCourseRoutes />} />
        
        {/* Python Course Module Routes */}
        <Route path="/python-course/*" element={<PythonCourseRoutes />} />
        
        {/* JavaScript Basic Course Module Routes */}
        <Route path="/js-basic-course/*" element={<JsCourseRoutes />} />
        <Route path="/javascript-basic-course/*" element={<JsCourseRoutes />} />
        
        {/* JavaScript Intermediate Course Module Routes */}
        <Route path="/js-int-course/*" element={<JsIntCourseRoutes />} />
        <Route path="/javascript-int-course/*" element={<JsIntCourseRoutes />} />

        {/* JavaScript Advanced Course Module Routes */}
        <Route path="/js-adv-course/*" element={<JsAdvCourseRoutes />} />
        <Route path="/javascript-adv-course/*" element={<JsAdvCourseRoutes />} />

        {/* Java Course Module Routes */}
        <Route path="/java-course/*" element={<JavaCourseRoutes />} />

        {/* C Course Module Routes */}
        <Route path="/c-course/*" element={<CCourseRoutes />} />

        {/* AI Course Module Routes */}
        <Route path="/ai-course/*" element={<AiCourseRoutes />} />

        {/* DL Course Module Routes */}
        <Route path="/dl-course/*" element={<DlCourseRoutes />} />

        {/* ML Course Module Routes */}
        <Route path="/ml-course/*" element={<MlCourseRoutes />} />

        {/* DSC Course Module Routes */}
        <Route path="/dsc-course/*" element={<DscCourseRoutes />} />

        {/* DSA Course Module Routes */}
        <Route path="/dsa-course/*" element={<DsaCourseRoutes />} />

        {/* NLP Course Module Routes */}
        <Route path="/nlp-course/*" element={<NlpCourseRoutes />} />

        {/* OS Course Module Routes */}
        <Route path="/os-course/*" element={<OsCourseRoutes />} />

        {/* System Design Course Module Routes */}
        <Route path="/system-design-course/*" element={<SystemDesignRoutes />} />

        {/* Database Course Module Routes */}
        <Route path="/database-course/*" element={<DatabaseCourseRoutes />} />

        {/* Gen AI Course Module Routes */}
        <Route path="/genai-course/*" element={<GenAiCourseRoutes />} />

        {/* Full Stack Python Course Module Routes */}
        <Route path="/fullstack-python-course/*" element={<FsPyCourseRoutes />} />

        {/* Full Stack Java Platform Course Module Routes */}
        <Route path="/fullstack-java-platform-course/*" element={<FsJavaCourseRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
