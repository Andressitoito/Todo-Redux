import { Button, Heading, HStack, Link } from "@chakra-ui/react";
/* RENAME LINK FROM ROUTERDOM */
import { Link as RouterLink } from "react-router-dom";
import { ModalAuth } from "../auth/ModalAuth";
import { TodoDrawer } from "../todo/TodoDrawer";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

/* van dentro de una constante en una carpeta */
const links = [
 {
  href: "/",
  name: "Home",
 },
 {
  href: "/add-todo",
  name: "Agregar Todo",
 },
 {
  href: "/profile",
  name: "Profile",
 },
];

const Navbar = () => {

 const dispatch = useDispatch()
 const auth = useSelector((state) => state.auth)
 const { user } = auth

 const handleClick = () => {
  dispatch(logout())
 }

 return (
  <HStack
   as="nav"
   justify="space-between"
   padding={3}
   bg="blue.200"
   color="white"
  >
   <Heading size="md">Todo List</Heading>
   <HStack gap={5}>
    {links.map((item) => (
     <Link
      as={RouterLink}
      /* USE TO INSTEAD OF HREF WITH ROUTER DOM */
      to={item.href}
      key={`nav-item-${item.name}`}
     >
      {item.name}
     </Link>
    ))}
   </HStack>


   {
    user
     ? <Button
      onClick={handleClick}
      colorScheme='red'
     >Log Out</Button>
     : <ModalAuth />
   }

   <TodoDrawer />
  </HStack>
 );
};

export { Navbar };


