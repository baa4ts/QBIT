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
  usuario: { id: '1', icono: 'https://i.pinimg.com/1200x/89/ae/5a/89ae5a3a0cb593a91c1948b55a494236.jpg', permiso: 1, token: '' },

  // Acciones
  guardarUsuario: usuario => set({ usuario }),
  eliminarUsuario: () => set({ usuario: null }),
}));
