export interface JuegosInterface {
  titulo: string;
  banner: string;
  categorias: Array<string>;
  precio: number;
  slug: string;
}

export interface CategoriasInterface extends Array<string> {}

export interface MetaInterface {
  page: number;
  maxPage: number;
}
export interface JuegosPeticionInterface {
  meta: MetaInterface;
  juegos: Array<JuegosInterface>;
  categorias: CategoriasInterface;
}

export const datosJuegosPrueva: JuegosPeticionInterface = {
  meta: {
    page: 1,
    maxPage: 4,
  },
  juegos: [
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
    {
      titulo: 'Hollow Knight',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      categorias: ['Metroidvania', 'Plataformas'],
      precio: 14.99,
      slug: 'hollow-knight',
    },
    {
      titulo: 'Baldur’s Gate 3',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
      categorias: ['RPG', 'Fantasia'],
      precio: 59.99,
      slug: 'baldurs-gate-3',
    },
    {
      titulo: 'Cyberpunk 2077',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
      categorias: ['Accion', 'Mundo Abierto'],
      precio: 49.99,
      slug: 'cyberpunk-2077',
    },
    {
      titulo: 'Stardew Valley',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg',
      categorias: ['Simulacion', 'Granjas'],
      precio: 14.99,
      slug: 'stardew-valley',
    },
    {
      titulo: 'No Man’s Sky',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg',
      categorias: ['Exploracion', 'Espacio'],
      precio: 29.99,
      slug: 'no-mans-sky',
    },
    {
      titulo: 'Elden Ring',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
      categorias: ['RPG', 'Accion'],
      precio: 59.99,
      slug: 'elden-ring',
    },
    {
      titulo: 'Terraria',
      banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg',
      categorias: ['Construccion', 'Supervivencia'],
      precio: 9.99,
      slug: 'terraria',
    },
  ],
  categorias: ['Accion', 'Aventura', 'Roguelike', 'Estrategia', 'Simulacion', 'Terror', 'Construccion', 'Deportes', 'Multijugador', 'Supervivencia'],
};
