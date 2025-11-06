export interface JuegoInterface {
  nombre: string;
  imagen: string;
  categorias: Array<string>;
  precio: number;
  slug: string;
}

export interface CategoriasInterface extends Array<string> {}

// Datos prueba
export const categoriasPruevas: CategoriasInterface = ['Accion', 'Aventura', 'Roguelike', 'Estrategia', 'Simulacion', 'Terror', 'Construccion', 'Deportes', 'Multijugador', 'Supervivencia'];

export const juegosPruevas: Array<JuegoInterface> = [
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
  {
    nombre: 'Hollow Knight',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    categorias: ['Metroidvania', 'Plataformas'],
    precio: 14.99,
    slug: 'hollow-knight',
  },
  {
    nombre: 'Baldur’s Gate 3',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
    categorias: ['RPG', 'Fantasia'],
    precio: 59.99,
    slug: 'baldurs-gate-3',
  },
  {
    nombre: 'Cyberpunk 2077',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
    categorias: ['Accion', 'Mundo Abierto'],
    precio: 49.99,
    slug: 'cyberpunk-2077',
  },
  {
    nombre: 'Stardew Valley',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg',
    categorias: ['Simulacion', 'Granjas'],
    precio: 14.99,
    slug: 'stardew-valley',
  },
  {
    nombre: 'No Man’s Sky',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg',
    categorias: ['Exploracion', 'Espacio'],
    precio: 29.99,
    slug: 'no-mans-sky',
  },
  {
    nombre: 'Elden Ring',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
    categorias: ['RPG', 'Accion'],
    precio: 59.99,
    slug: 'elden-ring',
  },
  {
    nombre: 'Terraria',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg',
    categorias: ['Construccion', 'Supervivencia'],
    precio: 9.99,
    slug: 'terraria',
  },
];
