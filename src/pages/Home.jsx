import { Button, SimpleGrid } from "@chakra-ui/react";
import { TodoCard } from "../components/todo/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { clearTodos } from "../features/todo/todosSlice";
import React from "react";

import connect from "./connect";

import MyHOCComponent from "./MyHOCComponent";




function Home(props) {

 const dispatch = useDispatch();
 /* 
se usa el use selector para obtener la informacion de los ToDos
el hook nos da por parametro el state
y del state queremos obtener los ToDos
*/
 const todos = useSelector((state) => state.todos);
 // const { todos } = useSelector(state)

 const handleClickClearToDos = () => {
  dispatch(clearTodos());
 };


 function sumar(a, b) {
  const Mira = {
   dormida: true,
   change: function () {
    this.dormida
    console.log(this);
    console.log(this.dormida);
   }
  }

  Mira.change()
  return a + b

 }

 // console.log(sumar(5, 7))

 return (
  <SimpleGrid
   columns={{
    base: 1,
    md: 3,
   }}
   gap={10}
   p={5}
  >

   <h1>HOLA {props.nombre}</h1>

   <Button
    onClick={handleClickClearToDos}
    colorScheme="red"
    variant="outline"
   >
    Vaciar ToDos
   </Button>

   {
    // !todos.length ES IGUAL A todos.length === 0
    !todos.filter((todo) => !todo.isCompleted).length && <p>No hay todos para completar</p>
   }

   {todos
    .filter((todo) => !todo.isCompleted)
    .map((todo) => (
     <TodoCard key={todo.id} todo={todo} />
    ))}
  </SimpleGrid>
 );
};

const mapStateToProps = (state) => {
 return state
}


// export { Home }

// export default MyHOCComponent(
//  connect(mapStateToProps)(Home)
// )

export default connect(mapStateToProps)(Home)

/* 
const wrapper = connect(mapStateToProps)
const hoc = wrapper(Home)

 */