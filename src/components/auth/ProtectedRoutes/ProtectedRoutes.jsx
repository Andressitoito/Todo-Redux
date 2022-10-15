import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
 const auth = useSelector((state) => state.auth)
 console.log(auth);
 const { user } = auth

 if (!user) {
  return <Navigate to='/' replace />
 } else {
  return <Outlet />
 }
}

export { ProtectedRoutes };