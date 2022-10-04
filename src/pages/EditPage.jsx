import { Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TodoForm } from "../components/todo/TodoForm";
import { editTodo } from "../features/todo/todosSlice";


const EditPage = () => {
 const dispatch = useDispatch()

 const navigate = useNavigate()
 const { id } = useParams()
 const { todos } = useSelector((state) => state)


 const [localToDoState, setLocalToDoState] = useState({})

 const onSubmit = (data) => {

  const newData = {
   ...localToDoState,
   ...data
  }

  dispatch(editTodo(newData))
  navigate('/')
 }

 useEffect(() => {
  const editToDo = todos.find(todo => todo.id === id)


  if (editToDo) {
   setLocalToDoState(editToDo)
  } else {
   navigate('/')
  }


 })

 return (
  <Center w='lg' pt={5} m='auto' flexDirection='column'>
   <Heading>Editar Todo</Heading>
   <TodoForm
    onSubmit={onSubmit}
    isEditing
    defaultValues={localToDoState}
   />
  </Center>
 )
}

export { EditPage };