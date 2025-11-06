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
 * Store de usuario global
 * @note Contiene estado del usuario y acciones para actualizarlo
 */
export const useUsuario = create<UsuarioState>(set => ({
  // Datos
  usuario: { id: '1', icono: 'https://i.pinimg.com/1200x/04/ab/01/04ab0129f86eb9192a193f8d6fecc5e1.jpg', permiso: 1, token: '' },

  // Acciones
  guardarUsuario: usuario => set({ usuario }),
  eliminarUsuario: () => set({ usuario: null }),
}));
