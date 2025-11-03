import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUsuario } from '../../store/usuarioStore';

export interface AntiUsuariosProps {
  re_auth?: string;
}

/**
 * Guard para rutas accesibles solo por usuarios **no autenticados**
 * Tipo: Layout
 *
 * @note Redirige automaticamente si ya hay un usuario logueado
 *
 * @param re_auth string → ruta a redirigir si el usuario esta logueado (opcional, default = '/usuario')
 */
const AntiUsuarios = ({ re_auth = '/usuario' }: AntiUsuariosProps): JSX.Element => {
  const { usuario } = useUsuario();

  if (usuario) return <Navigate to={re_auth} />;
  return <Outlet />;
};

export default AntiUsuarios;
