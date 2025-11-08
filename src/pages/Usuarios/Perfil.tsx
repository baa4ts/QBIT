import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioCard from '../../components/Usuario/UsuarioCard';
import UsuarioEstadisticas from '../../components/Usuario/UsuarioEstadisticas';
import UsuarioMenu from '../../components/Usuario/UsuarioMenu';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import type { UsuarioInterface } from '../../interfaces/Usuario/Perfil.interface';

const Perfil = () => {
  const usuario: UsuarioInterface = {
    id: 1,
    imagenUrl: 'https://i.pinimg.com/1200x/a2/0c/8d/a20c8d7a612784c9bc65ba95a82db9f6.jpg',
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

  return (
    <ContenedorAuto className='mt-15'>
      {/* Navbar */}
      <Navbar />
      {/* // */}
      {/* Componente icono de usuario y su nombre */}
      <UsuarioCard imagenUrl={usuario.imagenUrl} nombre={usuario.nombre} biografia={usuario.ubicacion} />
      <UsuarioSeparador titulo='Menu' />
      <UsuarioMenu />
      <UsuarioSeparador titulo='Insignias obtenidas' />
      <UsuarioEstadisticas />
      <UsuarioSeparador titulo='Ultimas compras' />
      <UltimasCompras mostrarPrecio={false} ultimosJuegos={usuario.ultimos} />
    </ContenedorAuto>
  );
};

export default Perfil;
