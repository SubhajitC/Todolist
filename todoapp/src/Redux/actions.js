// src/redux/actions.js
import {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_TASK,
    DELETE_TASK,
    MARK_TASK_COMPLETED,
  } from './actionTypes'; // Import your action type constants
  
  export const loginUser = (user) => ({
    type: LOGIN_USER,
    payload: user,
  });
  
  export const logoutUser = () => ({
    type: LOGOUT_USER,
  });
  
  // You can add more action creators as needed for additional actions related to tasks or other parts of your app