import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
 {
  id: uuidv4(),
  name: "Emeplo",
  message: "todo desde redux",
  isCompleted: false,
 },
 {
  id: uuidv4(),
  name: "Emeplo",
  message: "todo desde redux",
  isCompleted: true,
 },
];

export const todoSlice = createSlice({
 name: "todos",
 initialState: initialState,
 reducers: {
  addTodo: (state, action) => {
   // state.push(action.payload)
   state.push({ ...action.payload, id: uuidv4() });
  },
  // no es necesario pasarle nada
  clearTodos: () => {
   return [];
  },
  removeTodo: (state, action) => {
   const newList = state.filter((todo) => todo.id !== action.payload);
   return newList;
  },
  // nueva data modificada
  editTodo: (state, action) => {
   const { name, message, id } = action.payload;

   const todo = state.find((todo) => todo.id === id);

   if (todo) {
    todo.name = name;
    todo.message = message;
   }
  },
  toggleCompleteTodo: (state, action) => {
   const { id } = action.payload

   const todo = state.find((todo) => todo.id === id);

   if (todo) {
    todo.isCompleted = !todo.isCompleted
   }
  }
 }
});

export const { addTodo, clearTodos, removeTodo, editTodo, toggleCompleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
