import AutorJuego from '../../components/Juego/AutorJuego';
import CarruselJuego from '../../components/Juego/CarruselJuego';
import CategoriasJuego from '../../components/Juego/CategoriasJuego';
import InfoJuego from '../../components/Juego/InfoJuego';
import OpcionesJuegos from '../../components/Juego/OpcionesJuegos';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import type { JuegoInterface } from '../../interfaces/Juego/Juego.interface';

const Juego = () => {
  const datos: JuegoInterface = {
    id: 1,
    titulo: 'Metal Slug',
    slug: 'meta-slug',
    precio: 19.99,
    autor: { id: 1, nombre: 'Hideo Kojima' },
    categorias: ['Mottos', 'Auto', 'Accion'],
    descripcion: 'Juego de disparo y accion',
    recursos: [
      { tipo: 'imagen', recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
      { tipo: 'imagen', recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
      { tipo: 'imagen', recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
      { tipo: 'imagen', recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
      { tipo: 'imagen', recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
    ],
    banner: '',
    opciones: { usuario: true, descarga: 'asdad' },
  };

  return (
    <ContenedorAuto>
      <Navbar />
      <CarruselJuego recursos={datos.recursos} auto />
      <InfoJuego titulo={datos.titulo} precio={datos.precio} bio={datos.descripcion} />
      <CategoriasJuego categorias={datos.categorias} />
      <OpcionesJuegos juego={datos} />
      <AutorJuego Autor={datos.autor} />
    </ContenedorAuto>
  );
};

export default Juego;
