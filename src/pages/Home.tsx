import AsideRecomendados from '../components/Home/AsideRecomendados';
import Hero from '../components/Home/Hero';
import ListaJuegos from '../components/Home/ListaJuegos';
import ContenedorAuto from '../components/Shared/ContenedorAuto';
import Navbar from '../components/Shared/Navbar';

const dataHome = {
  hero: {
    titulo: 'Hades II',
    descripcion: 'Desciende al inframundo con Hades II y enfrenta nuevos desafios',
    slug: 'hades-2',
    video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256945222/movie480_vp9.webm',
  },
  ultimos: [
    {
      id: 1,
      titulo: 'Hades II',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      precio: 22.99,
      slug: 'hades-2',
    },
    {
      id: 2,
      titulo: 'Satisfactory',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      precio: 24.99,
      slug: 'satisfactory',
    },
    {
      id: 3,
      titulo: 'Baldurs Gate 3',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
      precio: 59.99,
      slug: 'baldurs-gate-3',
    },
    {
      id: 4,
      titulo: 'Deep Rock Galactic',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg',
      precio: 14.99,
      slug: 'deep-rock-galactic',
    },
    {
      id: 5,
      titulo: 'Hollow Knight',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      precio: 9.99,
      slug: 'hollow-knight',
    },
  ],
  populares: [
    {
      id: 3,
      titulo: 'Baldurs Gate 3',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
      precio: 59.99,
      slug: 'baldurs-gate-3',
    },
    {
      id: 4,
      titulo: 'Deep Rock Galactic',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg',
      precio: 14.99,
      slug: 'deep-rock-galactic',
    },
    {
      id: 5,
      titulo: 'Hollow Knight',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      precio: 9.99,
      slug: 'hollow-knight',
    },
    {
      id: 6,
      titulo: 'Celeste',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg',
      precio: 7.99,
      slug: 'celeste',
    },
    {
      id: 7,
      titulo: 'No Mans Sky',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg',
      precio: 19.99,
      slug: 'no-mans-sky',
    },
  ],
  recomendados: [
    {
      id: 2,
      titulo: 'Satisfactory',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      precio: 24.99,
      slug: 'satisfactory',
    },
    {
      id: 3,
      titulo: 'Baldurs Gate 3',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
      precio: 59.99,
      slug: 'baldurs-gate-3',
    },
    {
      id: 4,
      titulo: 'Deep Rock Galactic',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg',
      precio: 14.99,
      slug: 'deep-rock-galactic',
    },
    {
      id: 5,
      titulo: 'Hollow Knight',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      precio: 9.99,
      slug: 'hollow-knight',
    },
  ],
};

const Home = () => {
  return (
    <ContenedorAuto>
      <Navbar />
      <Hero {...dataHome.hero} />
      <main className='m-3 flex flex-col gap-6 lg:flex-row'>
        <section className='flex flex-1 flex-col gap-10'>
          <ListaJuegos titulo='Ultimos lanzamientos' juegos={dataHome.ultimos} verMas='/juegos' />
          <ListaJuegos titulo='Mas populares' juegos={dataHome.populares} verMas='/populares' />
        </section>
        <AsideRecomendados juegos={dataHome.recomendados} />
      </main>
    </ContenedorAuto>
  );
};

export default Home;
