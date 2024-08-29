// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
