import { useEffect } from 'react';
import { useUsuario, type UsuarioInter } from '../store/usuarioStore';

export const useUsuarioLocal = () => {
  const { usuario, guardarUsuario, eliminarUsuario } = useUsuario();

  // Cargar usuario de localStorage al montar
  useEffect(() => {
    const data = localStorage.getItem('usuario');
    if (data) {
      guardarUsuario(JSON.parse(data) as UsuarioInter);
    }
  }, [guardarUsuario]);

  // Guardar usuario y sincronizar con localStorage
  const guardar = (u: UsuarioInter) => {
    guardarUsuario(u);
    localStorage.setItem('usuario', JSON.stringify(u));
  };

  // Eliminar usuario y limpiar localStorage
  const eliminar = () => {
    eliminarUsuario();
    localStorage.removeItem('usuario');
  };

  return {
    usuario: usuario || null,
    guardarUsuario: guardar,
    eliminarUsuario: eliminar,
  };
};
