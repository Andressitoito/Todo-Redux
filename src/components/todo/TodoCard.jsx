import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo, toggleCompleteTodo } from "../../features/todo/todosSlice";

const TodoCard = ({ todo }) => {
 const dispatch = useDispatch();

 const handleRemove = () => {
  dispatch(removeTodo(todo.id));
 };

 const handleToggle = () => {
  dispatch(toggleCompleteTodo(todo))
 }

 return (
  <VStack align="flex-start" bg="gray.100" rounded="lg" p={2}>
   <Heading>{todo.name} </Heading>
   <Text>{todo.message}</Text>
   <ButtonGroup size="xs">

    <Button as={Link} to={`/edit-todo/${todo.id}`} colorScheme="green">
     Editar
    </Button>

    <Button
     onClick={handleToggle}
     colorScheme={todo.isCompleted ? "teal" : "blue"}
    >
     {todo.isCompleted ? "Completo" : "Completar"}
    </Button>

    <Button colorScheme="red" onClick={handleRemove}>
     Eliminar
    </Button>

   </ButtonGroup>
  </VStack>
 );
};

export { TodoCard };
