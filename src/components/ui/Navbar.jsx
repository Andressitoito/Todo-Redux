import { Heading, HStack, Link } from '@chakra-ui/react'
/* RENAME LINK FROM ROUTERDOM */
import { Link as RouterLink } from 'react-router-dom'
import { TodoDrawer } from '../todo/TodoDrawer'

const links = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/add-todo',
    name: 'Agregar Todo'
  }
]

const Navbar = () => {
  return (
    <HStack
      as='nav'
      justify='space-between'
      padding={3}
      bg='blue.200'
      color='white'
    >
      <Heading size='md'>Todo List</Heading>
      <HStack gap={5}>

        {
          links.map(item =>
            <Link
              as={RouterLink}
              /* USE TO INSTEAD OF HREF WITH ROUTER DOM */
              to={item.href}
              key={`nav-item-${item.name}`}
            >
              {item.name}
            </Link>)
        }
      </HStack>
      <TodoDrawer />
    </HStack>
  )
}

export { Navbar };