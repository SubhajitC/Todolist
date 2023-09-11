import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '../Redux/actions/types';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      const updatedTaskIndex = state.tasks.findIndex(task => task.id === action.payload.id);

      if (updatedTaskIndex !== -1) {
        const updatedTasks = [...state.tasks];
        updatedTasks[updatedTaskIndex] = action.payload;

        return {
          ...state,
          tasks: updatedTasks,
        };
      }

      return state;

    case DELETE_TASK:
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;