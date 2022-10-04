import {
 Center, Heading,
} from "@chakra-ui/react";

import { addTodo } from "../features/todo/todosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "../components/todo/TodoForm";

const AddTodo = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()

 const onSubmit = (data) => {
  dispatch(addTodo(data))
  console.log(data);
  navigate('/', {
   // replace: false, para no poder volver atras
  })

 };

 return (
  <Center pt={5} flexDirection='column'>
   <Heading>Add ToDo</Heading>
   <TodoForm 
   onSubmit={onSubmit}
   />
  </Center>
 );
};

export { AddTodo };
