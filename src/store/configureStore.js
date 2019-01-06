import { createStore, combineReducers } from "redux";

import taskReducer from "./reducers/tasks";

const rootReducer = combineReducers({
  tasks: taskReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
