import {
 Button,
 FormControl,
 FormErrorMessage,
 FormLabel,
 Input,
 Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import bcrypt from "bcryptjs";

const Login = () => {
 const dispatch = useDispatch();

 const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isSubmitting },
 } = useForm({
  defaultValues: {
   email: "culo@recontraculo.com",
   password: "superculo",
  },
 });

 const maria = {
  maria: 'maria',
  mariamaria: 'mariamaria'
 }

 maria()

 const urlBase = "https://6273df173d2b510074238aa7.mockapi.io/";

 const onSubmit = async (data) => {
  const saltRounds = 2;
  const salt = bcrypt.genSaltSync(saltRounds);
  // const hash = bcrypt.hashSync(data.password, salt);

  // console.log(data.password)
  // console.log(userTaken.password);
  // console.log(compare);
  // const compare = await bcrypt.compare(userTaken.password, hash)

  const resUser = await fetch(`${urlBase}validateUsers`);
  const objUsers = await resUser.json();
  const userTaken = objUsers.find((user) => user.email === data.email);

  if (userTaken) {
   const token = bcrypt.hashSync(data.password, salt);

   const newData = {
    jwt: token,
    user: { ...userTaken },
   };

   console.log(newData);
   dispatch(login(newData));
  } else {
   setError("email", { message: "the user is invalid" });
  }

  // const dataapi = await fetch(`${urlBase}validateUsers`, {
  //  method: 'POST',
  //  headers: { 'Content-Type': 'application/json' },
  //  body: JSON.stringify(data)
  // })

  // console.log(dataapi);
 };

 // useEffect(() => {
 //  console.log(errors);
 // }, [errors])

 // const onSubmit = (data) => {

 //  fetch(`${urlBase}Bank`)
 //  .then((datos) => datos.json())
 //  .then((datos) =>{
 //   console.log(datos)
 //  })
 // }

 return (
  <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
   <FormControl isInvalid={errors.email}>
    <FormLabel htmlFor="email">Email</FormLabel>
    <Input
     id="email"
     {...register("email", { required: "Filllll email" })}
    />
    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
   </FormControl>

   <FormControl isInvalid={errors.password}>
    <FormLabel htmlFor="password">Password</FormLabel>
    <Input id="password" {...register("password", { required: true })} />
   </FormControl>
   <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
    Iniciar Sesion
   </Button>
  </Stack>
 );
};

export { Login };

/* 
npm i buffer


*/
