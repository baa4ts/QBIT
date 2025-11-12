import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Tipos
export interface UsuarioInter {
  id: string;
  permiso: number;
  icono: string;
  token: string;
  valido: boolean;
}

export interface UsuarioState {
  usuario: UsuarioInter | null;
  guardarUsuario: (usuario: UsuarioInter) => void;
  eliminarUsuario: () => void;
}

export const useUsuario = create<UsuarioState>()(
  persist(
    set => ({
      usuario: null,

      guardarUsuario: usuario => set({ usuario }),

      eliminarUsuario: () => set({ usuario: null }),
    }),
    {
      name: 'usuario',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
