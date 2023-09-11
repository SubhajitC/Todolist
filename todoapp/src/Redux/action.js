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
    const response = await instance.post('users/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await instance.post('users/login', userData);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await instance.get('tasks');
    dispatch({ type: FETCH_TASKS, payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const response = await instance.post('tasks', taskData);
    dispatch({ type: ADD_TASK, payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    // Send a DELETE request to delete the task by ID
    await instance.delete(`tasks/${taskId}`);

    // Dispatch the DELETE_TASK action with the task ID
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (error) {
    // Handle error
  }
};

export const markTaskCompleted = (taskId) => async (dispatch) => {
  try {
    // Send a PUT request to mark the task as completed
    const response = await instance.put(`tasks/${taskId}`, {
      completed: true,
    });

    // Dispatch the MARK_TASK_COMPLETED action with the updated task data
    dispatch({ type: MARK_TASK_COMPLETED, payload: response.data });
  } catch (error) {
    // Handle error
  }
};