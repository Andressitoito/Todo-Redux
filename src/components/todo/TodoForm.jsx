import {
 Button,
 FormControl,
 FormErrorMessage,
 FormLabel,
 Input,
 Textarea,
 VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ onSubmit, isEditing, defaultValues }) => {

 const {
  register,
  handleSubmit,
  formState: { errors },
  setValue
 } = useForm();

useEffect(()=>{
 if(defaultValues){
  setValue('name', defaultValues.name)
  setValue('message', defaultValues.message)
 }

},[defaultValues])

 return (
  <>
   <VStack as="form" gap={5} onSubmit={handleSubmit(onSubmit)}>
    <FormControl isInvalid={errors.name}>
     <FormLabel htmlFor="name">Name</FormLabel>
     <Input
      id="name"
      {...register("name", {
       required: "This field is required",
      })}
     />
     {errors.name && (
      <FormErrorMessage>{errors.name.message}</FormErrorMessage>
     )}
    </FormControl>

    <FormControl isInvalid={errors.message}>
     <FormLabel htmlFor="message">Message</FormLabel>
     <Textarea
      height={40}
      id="message"
      {...register("message", {
       required: "This field is required",
      })}
     />
     {errors.message && (
      <FormErrorMessage>{errors.message.message}</FormErrorMessage>
     )}
    </FormControl>

    <Button type="submit" colorScheme=  {
     isEditing ? 'green' : 'blue'
    } w="full" >
    {
     isEditing ? 'Editar ToDo' : 'Add ToDo'
    }
    </Button>
   </VStack>
  </>
 )
}

export { TodoForm };