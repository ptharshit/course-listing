import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../api';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState({});

  useEffect(() => {
    fetchCourses().then(courses => setCourses(courses));
  }, []);

  const handleMarkAsCompleted = courseId => {
    setCompletedCourses({ ...completedCourses, [courseId]: true });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <li
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-32 object-cover rounded-t-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
            <p className="text-gray-600 mb-4">Due Date: {course.dueDate}</p>
            <div className="mb-4">
              <label htmlFor={`progress-${course.id}`} className="block text-gray-600 mb-2">Progress</label>
              <progress
                id={`progress-${course.id}`}
                value={completedCourses[course.id] ? 100 : course.progress}
                max="100"
                className="w-full h-2 bg-gray-200 rounded"
              >
                {completedCourses[course.id] ? 100 : course.progress}%
              </progress>
            </div>
            <button
              className={`px-4 py-2 rounded text-white ${
                completedCourses[course.id] ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              } transition`}
              onClick={() => !completedCourses[course.id] && handleMarkAsCompleted(course.id)}
              disabled={completedCourses[course.id]}
            >
              {completedCourses[course.id] ? 'Completed' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
