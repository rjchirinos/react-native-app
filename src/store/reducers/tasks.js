import {
  ADD_TASK,
  DELETE_TASK,
  SELECT_TASK,
  DESELECT_TASK
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
  taskSelected: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat({
          key: Math.random(),
          name: action.taskName,
          date: new Date()
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.key !== state.taskSelected.key;
        }),
        taskSelected: null
      };
    case SELECT_TASK:
      return {
        ...state,
        taskSelected: state.tasks.find(task => {
          return task.key === action.taskKey;
        })
      };
    case DESELECT_TASK:
      return {
        ...state,
        taskSelected: null
      };
    default:
      return state;
  }
};

export default reducer;
