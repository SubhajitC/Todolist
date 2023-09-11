import axios from 'axios';
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  MARK_TASK_COMPLETED,
} from './actions/types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});


export const registerUser = (userData) => async (dispatch) => {
  try {
    console.log('Attempting user registration...', userData); // Debug: Log the registration attempt

    const response = await instance.post('users/register', userData);

    console.log('Registration response:', response.data); // Debug: Log the registration response

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    
    console.log('Registration successful:', response.data); // Debug: Log success message
    return response.data; // Ensure you return the response data
  } catch (error) {
    console.error('Registration error:', error);
    // Handle error, or rethrow it if necessary
    throw error;
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    console.log('Attempting user login...', userData); // Debug: Log the login attempt

    const response = await instance.post('users/login', userData);

    console.log('Login response:', response.data); // Debug: Log the login response

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });

    console.log('Login successful:', response.data); // Debug: Log success message

  } catch (error) {
    console.error('Login error:', error);
    // Handle error, or rethrow it if necessary
    throw error; // Rethrow the error for further handling in your component
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const fetchTasks = () => async (dispatch) => {
  try {
    console.log('Fetching tasks...'); // Debug: Log the fetch tasks attempt

    const response = await instance.get('tasks');

    console.log('Fetch tasks response:', response.data); // Debug: Log the fetch tasks response

    dispatch({ type: FETCH_TASKS, payload: response.data });

    console.log('Fetch tasks successful:', response.data); // Debug: Log success message
  } catch (error) {
    console.error('Fetch tasks error:', error);
    // Handle error, or rethrow it if necessary
    throw error;
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    console.log('Adding a task...', taskData); // Debug: Log the add task attempt

    const response = await instance.post('tasks', taskData);

    console.log('Add task response:', response.data); // Debug: Log the add task response

    dispatch({ type: ADD_TASK, payload: response.data });

    console.log('Add task successful:', response.data); // Debug: Log success message
  } catch (error) {
    console.error('Add task error:', error);
    // Handle error, or rethrow it if necessary
    throw error;
  }
};
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    console.log('Deleting task...', taskId); // Debug: Log the delete task attempt

    // Send a DELETE request to delete the task by ID
    await instance.delete(`tasks/${taskId}`);

    console.log('Delete task successful:', taskId); // Debug: Log success message

    // Dispatch the DELETE_TASK action with the task ID
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (error) {
    console.error('Delete task error:', error);
    // Handle error, or rethrow it if necessary
    throw error;
  }
};

export const markTaskCompleted = (taskId) => async (dispatch) => {
  try {
    console.log('Marking task as completed...', taskId); // Debug: Log the mark task completed attempt

    // Send a PUT request to mark the task as completed
    const response = await instance.put(`tasks/${taskId}`, {
      completed: true,
    });

    console.log('Mark task completed response:', response.data); // Debug: Log the mark task completed response

    // Dispatch the MARK_TASK_COMPLETED action with the updated task data
    dispatch({ type: MARK_TASK_COMPLETED, payload: response.data });

    console.log('Mark task completed successful:', response.data); // Debug: Log success message
  } catch (error) {
    console.error('Mark task completed error:', error);
    // Handle error, or rethrow it if necessary
    throw error;
  }
};