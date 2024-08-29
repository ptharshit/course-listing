// src/reducers/courseReducer.js
const initialState = {
    courses: []
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES_SUCCESS':
        return { ...state, courses: action.courses };
      default:
        return state;
    }
  };
  
  export default courseReducer;