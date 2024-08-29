
import { fetchCourses } from '../api';

export const fetchCoursesSuccess = courses => ({
  type: 'FETCH_COURSES_SUCCESS',
  courses
});

export const fetchCourses = () => dispatch => {
  fetchCourses().then(courses => dispatch(fetchCoursesSuccess(courses)));
};