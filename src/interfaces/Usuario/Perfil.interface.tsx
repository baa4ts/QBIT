export interface JuegoPerfilInterface {
  titulo: string;
  banner: string;
  categorias: string[];
  precio: number;
  slug: string;
}

export interface UsuarioInterface {
  id: string;
  icono: string;
  nombre: string;
  biografia: string;
  ultimos: JuegoPerfilInterface[];
}

// datos para test
export const testUsuario: UsuarioInterface = {
  id: 'adsad',
  icono: 'https://i.pinimg.com/736x/cd/35/56/cd3556de028e954d49503939ca861cfc.jpg',
  nombre: 'Hideo Kojima',
  biografia: 'Tokio, Japon (Creador de MGS y DS)',
  ultimos: [
    {
      titulo: 'Hades II',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      categorias: ['Roguelike', 'Accion'],
      precio: 22.99,
      slug: 'hades-2',
    },
    {
      titulo: 'Satisfactory',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      categorias: ['Construccion', 'Exploracion'],
      precio: 29.99,
      slug: 'satisfactory',
    },
    {
      titulo: 'Palworld',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg',
      categorias: ['Supervivencia', 'Multijugador'],
      precio: 26.5,
      slug: 'palworld',
    },
  ],
};
