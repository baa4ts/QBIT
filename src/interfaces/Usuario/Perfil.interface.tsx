export interface JuegoPerfilInterface {
  nombre: string;
  imagen: string;
  categorias: string[];
  precio: number;
  slug: string;
}

export interface UsuarioInterface {
  id: number;
  imagenUrl: string;
  nombre: string;
  ubicacion: string;
  ultimos: JuegoPerfilInterface[];
}

// datos para test
export const testUsuario: UsuarioInterface = {
  id: 1,
  imagenUrl: 'https://i.pinimg.com/736x/cd/35/56/cd3556de028e954d49503939ca861cfc.jpg',
  nombre: 'Hideo Kojima',
  ubicacion: 'Tokio, Japón (Creador de MGS y DS)',
  ultimos: [
    {
      nombre: 'Hades II',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      categorias: ['Roguelike', 'Accion'],
      precio: 22.99,
      slug: 'hades-2',
    },
    {
      nombre: 'Satisfactory',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      categorias: ['Construccion', 'Exploracion'],
      precio: 29.99,
      slug: 'satisfactory',
    },
    {
      nombre: 'Palworld',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg',
      categorias: ['Supervivencia', 'Multijugador'],
      precio: 26.5,
      slug: 'palworld',
    },
  ],
};
