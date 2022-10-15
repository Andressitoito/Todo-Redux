import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'

const Register = () => {

 const { register, handleSubmit, setError, formState: {
  errors, isSubmitting
 } } = useForm({
  defaultValues: {
   email: 'andyculon@culo.com',
   password: 'superano'
  }
 })

 const onSubmit = async (data) => {

  const resUser = await fetch(`${urlBase}validateUsers`)
  const objUsers = await resUser.json()
  const userTaken = objUsers.find(user => user.email === data.email)

  if (userTaken) {

   setError('email', { message: 'user taken' })

  } else {

   console.log('The user is not taken');
  }

 }
 return (
  <Stack as='form' onSubmit={handleSubmit(onSubmit)}>
   <FormControl isInvalid={errors.email}>
    <FormLabel htmlFor="email">Email</FormLabel>
    <Input id='email' {...register('email', { required: 'Filllll email' })} />
    <FormErrorMessage>
     {errors.email?.message}
    </FormErrorMessage>
   </FormControl>

   <FormControl isInvalid={errors.password}>
    <FormLabel htmlFor="password">Password</FormLabel>
    <Input id='password' {...register('password', { required: true })} />
   </FormControl>
   <Button
    type="submit"
    colorScheme='blue'
    isLoading={isSubmitting}
   >Iniciar Sesion</Button>
  </Stack >
 )
}

export { Register };