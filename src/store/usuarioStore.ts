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
  usuario: null,

  // Acciones
  guardarUsuario: usuario => set({ usuario }),
  eliminarUsuario: () => set({ usuario: null }),
}));
