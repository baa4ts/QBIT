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
  usuario: { id: '1', icono: 'https://i.pinimg.com/736x/2d/85/dd/2d85dd0cd66653ffd336afed2ba551ca.jpg', permiso: 1, token: '' },

  // Acciones
  guardarUsuario: usuario => set({ usuario }),
  eliminarUsuario: () => set({ usuario: null }),
}));
