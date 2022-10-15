import { Box, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";



const Profile = () => {

 const auth = useSelector((state) => state.auth)

 const { user } = auth

 return (
  <Box w='100%' p={4} >
   <Center >
  User: {user.email}
   </Center>
   <Center >
Password: {user.password}
   </Center>


  </Box>
 )
}

export { Profile };