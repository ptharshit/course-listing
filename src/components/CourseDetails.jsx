import React, { useState, useEffect } from 'react';
import { fetchCourse } from '../api';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const courseId = Number(id); 
    fetchCourse(courseId)
      .then((courseData) => {
        setCourse(courseData);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error);
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>; 
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading course details. Please try again.</p>;
  }

  if (!course) {
    return <p className="text-center text-gray-600">Course not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">{course.name}</h1>
        <div className="flex justify-center mb-6">
          <img
            src={course.thumbnail}
            alt={course.name}
            className="w-full max-w-sm h-auto rounded-lg"
          />
        </div>
        <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="text-gray-600 mb-4"><strong>Description:</strong> {course.description}</p>
        <p className="text-gray-600 mb-4"><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
        <p className="text-gray-600 mb-4"><strong>Duration:</strong> {course.duration}</p>
        <p className="text-gray-600 mb-4"><strong>Schedule:</strong> {course.schedule}</p>
        <p className="text-gray-600 mb-4"><strong>Location:</strong> {course.location}</p>
        <p className="text-gray-600 mb-4"><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Syllabus</h2>
        <ul className="list-disc pl-5 space-y-4">
          {course.syllabus.map((week, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold">Week {week.week}: {week.topic}</h3>
              <p className="text-gray-700">{week.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
