import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUsuario } from '../../store/usuarioStore';

export interface PrivadaProps {
  permiso?: number;
  re_perm?: string;
  re_desa?: string;
  re_bloq?: string;
  bloquear_permisos?: number[];
}

/**
 * Guard para rutas privadas
 * Tipo: Layout
 *
 * Redirige automáticamente en tres casos:
 * 1. Usuario no autenticado → re_desa
 * 2. Usuario no tiene el permiso requerido → re_perm
 * 3. Usuario tiene un permiso inválido (bloquear_permisos) → re_bloq
 */
const Privada = ({ permiso, re_desa = '/usuario/login', re_perm = '/', re_bloq = '/', bloquear_permisos = [] }: PrivadaProps): JSX.Element => {
  const { usuario } = useUsuario();

  if (!usuario) return <Navigate to={re_desa} replace />;

  if (permiso !== undefined && usuario.permiso !== permiso) {
    return <Navigate to={re_perm} replace />;
  }

  if (bloquear_permisos.length && bloquear_permisos.includes(usuario.permiso)) {
    return <Navigate to={re_bloq} replace />;
  }

  return <Outlet />;
};

export default Privada;
