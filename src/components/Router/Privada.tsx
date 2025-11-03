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
 * @note Obligatorio estar autenticado para acceder
 *
 * @param permiso number → nivel de permiso requerido
 * @param re_perm string → ruta para redireccionar si no tiene permiso (opcional, default = '/usuario')
 * @param re_desa string → ruta para redireccionar si no hay usuario (opcional, default = '/usuario/login')
 */
const Privada = ({ permiso, re_desa = '/usuario/login', re_perm = '/usuario' }: PrivadaProps): JSX.Element => {
  const { usuario } = useUsuario();

  if (!usuario) return <Navigate to={re_desa} replace />;
  if (usuario.permiso !== permiso) return <Navigate to={re_perm} />;

  return <Outlet />;
};

export default Privada;
