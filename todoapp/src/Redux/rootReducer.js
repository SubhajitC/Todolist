import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your authentication reducer
import taskReducer from './taskReducer'; // Import your task reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add your authentication reducer under the 'auth' key
  tasks: taskReducer, // Add your task reducer under the 'tasks' key
});

export default rootReducer;