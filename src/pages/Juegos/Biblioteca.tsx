import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';

const Biblioteca = () => {
  const juegos = [
    {
      nombre: 'Hades II',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      categorias: ['Roguelike', 'Accion'],
      precio: 22.99,
      slugJuego: '/juego/hades-2',
    },
    {
      nombre: 'Satisfactory',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      categorias: ['Construccion', 'Exploracion'],
      precio: 29.99,
      slugJuego: '/juego/satisfactory',
    },
    {
      nombre: 'Palworld',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg',
      categorias: ['Supervivencia', 'Multijugador'],
      precio: 26.5,
      slugJuego: '/juego/palworld',
    },
  ];

  return (
    <ContenedorAuto>
      {/* Se reutiliza el contendor y listado de usuario */}
      <UsuarioSeparador titulo='Tus juegos' />
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegos} />
    </ContenedorAuto>
  );
};

export default Biblioteca;
