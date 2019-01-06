import {
  ADD_TASK,
  DELETE_TASK,
  SELECT_TASK,
  DESELECT_TASK
} from "./actionTypes";

export const addTask = taskName => {
  return {
    type: ADD_TASK,
    taskName
  };
};

export const deleteTask = () => {
  return { type: DELETE_TASK };
};

export const selectTask = key => {
  return {
    type: SELECT_TASK,
    taskKey: key
  };
};

export const deselectTask = () => {
  return { type: DESELECT_TASK };
};
