import {
 Button,
 Drawer,
 DrawerBody,
 DrawerCloseButton,
 DrawerContent,
 DrawerHeader,
 DrawerOverlay,
 useDisclosure,
 VStack,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { TodoCard } from "./TodoCard";

const TodoDrawer = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();

 const { todos } = useSelector((state) => state)

 return (
  <>
   <Button colorScheme="green" onClick={onOpen}>
    Open
   </Button>
   <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
     <DrawerCloseButton />
     <DrawerHeader>To Do's Completados</DrawerHeader>

     <DrawerBody >
      <VStack gap={5}>
       {
        todos
        .filter((todo) => todo.isCompleted)
        .map(todo => (
         <TodoCard
          key={`todo-completed-${todo.id}`}
          todo={todo}
         />
        ))
       }
      </VStack>
     </DrawerBody>
    </DrawerContent>
   </Drawer>
  </>
 );
};

export { TodoDrawer };
