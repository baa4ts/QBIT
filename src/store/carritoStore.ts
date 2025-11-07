import { create } from 'zustand';

export interface JuegoCarrito {
  id: number;
  imagen: string;
  precio: number;
  slug: string;
}

export interface CarritoStore {
  juegos: JuegoCarrito[];

  agregar: (juego: JuegoCarrito) => boolean;
  eliminar: (id: number) => boolean;
  limpiar: () => boolean;
  existe: (id: number) => boolean;
}

export const useCarrito = create<CarritoStore>((set, get) => ({
  juegos: [],

  agregar: (juego: JuegoCarrito) => {
    try {
      const { juegos } = get();
      if (juegos.some(j => j.id === juego.id)) return false;
      set({ juegos: [...juegos, juego] });
      return true;
    } catch {
      return false;
    }
  },

  eliminar: (id: number) => {
    try {
      const { juegos } = get();
      set({ juegos: juegos.filter(j => j.id !== id) });
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

  existe: (id: number) => {
    const { juegos } = get();
    return juegos.some(j => j.id === id);
  },
}));
