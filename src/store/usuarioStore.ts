import { create } from 'zustand';

// Tipos
export interface Usuario {
  id: string;
  permiso: number;
  username: string;
  email: string;
  token: string;
}

interface UsuarioState {
  // Datos
  usuario: Usuario | null;

  // Acciones
  guardarUsuario: (usuario: Usuario) => void;
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
