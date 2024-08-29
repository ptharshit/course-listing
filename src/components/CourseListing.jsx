import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../api';
import { useNavigate } from 'react-router-dom';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses().then((courses) => setCourses(courses));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const name = course.name.toLowerCase();
    const instructor = course.instructor.toLowerCase();
    return name.includes(searchTerm.toLowerCase()) || instructor.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Course Listing</h1>
      <div className="mb-6">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by course name or instructor"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <li key={course.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
      <button
      className=" mt-10 px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600 transition"
      onClick={()=> navigate('student-dashboard')}
      >Student Dashboard</button>
    </div>
  );
};

export default CourseListing;
