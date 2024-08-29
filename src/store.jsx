// src/store.js
import { createStore, combineReducers } from 'redux';
import { courseReducer } from './reducers/courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer
});

const store = createStore(rootReducer);

export default store;