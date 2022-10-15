import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from '../features/todo/todosSlice';
import AuthReducer from '../features/auth/authSlice'
 
const store = configureStore({
 reducer: {
  todos: TodosReducer,
  auth: AuthReducer
 },
})

export { store }