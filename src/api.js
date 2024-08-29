// src/api.js
const courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/150",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced React Concepts",
    instructor: "Jane Doe",
    description:
      "Learn advanced React concepts and build complex applications.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/150",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic React knowledge", "Familiarity with JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "React Hooks",
        content: "Learn about React Hooks and how to use them effectively.",
      },
      {
        week: 2,
        topic: "React Context API",
        content:
          "Learn about the React Context API and how to use it for state management.",
      },
    ],
    students: [],
  },
];

export function fetchCourses() {
    return Promise.resolve(courses);
  }
  
  export function fetchCourse(id) {
    return Promise.resolve(courses.find((course) => course.id === id));
  }
