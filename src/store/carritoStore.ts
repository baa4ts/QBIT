import { create } from 'zustand';

export interface JuegoCarrito {
  id: number;
  imagen: string;
  precio: number;
  slug: string;
}

export interface CarritoStore {
  // State
  juegos: JuegoCarrito[];

  // Acciones
  agregar: (juego: JuegoCarrito) => boolean;
  eliminar: (id: number) => boolean;
  limpiar: () => boolean;
}

export const useCarrito = create<CarritoStore>((set, get) => ({
  // State
  juegos: [],

  // Acciones
  agregar: (juego: JuegoCarrito) => {
    try {
      const { juegos } = get();
      set({ juegos: [...juegos, juego] });
      return true;
    } catch {
      return false;
    }
  },

  eliminar: (id: number) => {
    try {
      const { juegos } = get();
      const nuevaLista = juegos.filter(a => a.id !== id);
      set({ juegos: nuevaLista });
      return true;
    } catch {
      return false;
    }
  },

  limpiar: () => {
    try {
      set({ juegos: [] });
      return true;
    } catch {
      return false;
    }
  },
}));
