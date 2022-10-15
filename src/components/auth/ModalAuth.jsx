import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalBody,
 ModalCloseButton,
 Button,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Login } from "./Login";
import { Register } from "./Register";

const ModalAuth = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();

 return (
  <>
   <Button colorScheme="blue" onClick={onOpen}>
    User
   </Button>

   <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
     {/* <ModalHeader>Modal Title</ModalHeader> */}
     <ModalCloseButton />

     <ModalBody>
      <Tabs>
       <TabList>
        <Tab>Login</Tab>
        <Tab>Register</Tab>
       </TabList>

       <TabPanels>
        <TabPanel>
         <Login />
        </TabPanel>

        <TabPanel>
         <Register />
        </TabPanel>

       </TabPanels>
      </Tabs>
     </ModalBody>
    </ModalContent>
   </Modal>
  </>
 );
};

export { ModalAuth };
