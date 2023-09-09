import {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_TASK,
    DELETE_TASK,
    MARK_TASK_COMPLETED,
  } from './actionTypes'; // Import your action type constants
  
  const initialState = {
    user: null, // Initial user state
    tasks: [], // Initial tasks state
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, user: action.payload };
      case LOGOUT_USER:
        return { ...state, user: null };
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case MARK_TASK_COMPLETED:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: true }
              : task
          ),
        };
      // Add more cases for additional actions related to tasks or other parts of your app
      default:
        return state;
    }
  };
  
  export default rootReducer;