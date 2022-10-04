import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from '../features/todo/todosSlice';

const store = configureStore({
 reducer: {
  todos: TodosReducer
 },
})

export { store }