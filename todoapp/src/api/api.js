import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/', // Replace with your backend URL
});

export const registerUser = async (userData) => {
  try {
    const response = await instance.post('users/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await instance.post('users/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await instance.get('tasks');
    return response.data;
  } catch (error) {
    throw error;
  }
};