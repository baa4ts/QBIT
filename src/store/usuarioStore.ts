import { create } from 'zustand';

// Tipos
export interface UsuarioInter {
  id: string;
  permiso: number;
  icono: string;
  token: string;
}

export interface UsuarioState {
  // Datos
  usuario: UsuarioInter | null;

  // Acciones
  guardarUsuario: (usuario: UsuarioInter) => void;
  eliminarUsuario: () => void;
}

/**
 * Store de usuario global con persistencia en localStorage
 */
export const useUsuario = create<UsuarioState>(set => {
  return {
    usuario: null,

    guardarUsuario: usuario => {
      set({ usuario });
    },

    eliminarUsuario: () => {
      set({ usuario: null });
    },
  };
});
