import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUsuario } from '../../store/usuarioStore';

export interface PrivadaProps {
  permiso: number;
  re_perm?: string;
  re_desa?: string;
}

/**
 * Guard para rutas privadas
 * Tipo: Layout
 *
 * @note Obligatorio estar autenticado para acceder.
 *       Redirige si el usuario no cumple los permisos necesarios.
 *
 * @param permiso number → nivel de permiso mínimo requerido (el usuario con permiso >= será redirigido)
 * @param re_perm string → ruta para redireccionar si el usuario tiene permiso mayor o igual al requerido (opcional, default = '/usuario')
 * @param re_desa string → ruta para redireccionar si no hay usuario autenticado (opcional, default = '/usuario/login')
 */
const Privada = ({ permiso, re_desa = '/usuario/login', re_perm = '/usuario' }: PrivadaProps): JSX.Element => {
  const { usuario } = useUsuario();

  if (!usuario) return <Navigate to={re_desa} replace />;
  if (usuario.permiso < permiso) return <Navigate to={re_perm} />;

  return <Outlet />;
};

export default Privada;
