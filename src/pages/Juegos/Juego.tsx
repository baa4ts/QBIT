import AutorJuego from '../../components/Juego/AutorJuego';
import CarruselJuego from '../../components/Juego/CarruselJuego';
import CategoriasJuego from '../../components/Juego/CategoriasJuego';
import InfoJuego from '../../components/Juego/InfoJuego';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';

const Juego = () => {
  const juego = {
    id: 1,
    titulo: 'Hades II',
    slug: 'hades-2',
    precio: 22.99,
    autor: 'Supergiant Games',
    categorias: ['Accion', 'Aventura', 'Roguelike'],
    bio: 'Hades II es la esperada secuela del aclamado roguelike de Supergiant Games. Juega como la princesa del inframundo en una lucha contra el Titan del Tiempo, en una historia mitologica llena de accion, estrategia y una ambientacion oscura y envolvente.',
    recursos: [
      {
        type: 'video' as const,
        recurso: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256945222/movie480_vp9.webm',
      },
      {
        type: 'imagen' as const,
        recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      },
      {
        type: 'imagen' as const,
        recurso: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      },
    ],
  };

  return (
    <ContenedorAuto>
      <Navbar />
      <CarruselJuego recursos={juego.recursos} auto />
      <InfoJuego id={juego.id} titulo={juego.titulo} precio={juego.precio} imagen={juego.recursos[1].recurso} slug={juego.slug} bio={juego.bio} />
      <CategoriasJuego categorias={juego.categorias} />
      <AutorJuego nombre={juego.autor} />
    </ContenedorAuto>
  );
};

export default Juego;
