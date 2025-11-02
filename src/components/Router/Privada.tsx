import { Navigate, Outlet } from 'react-router'

const Privada = () => {
  const aut = false

  if (!aut) return <Navigate to='/usuario/login' />

  return <Outlet />
}

export default Privada
