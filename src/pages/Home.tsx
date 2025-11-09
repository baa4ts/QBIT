import { useQuery } from '@tanstack/react-query';
import { obtenerHome } from '../Actions/Home';
import AsideRecomendados from '../components/Home/AsideRecomendados';
import Hero from '../components/Home/Hero';
import ListaJuegos from '../components/Home/ListaJuegos';
import ContenedorAuto from '../components/Shared/ContenedorAuto';
import Navbar from '../components/Shared/Navbar';

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['home'],
    queryFn: obtenerHome,
    staleTime: 1000 * 60 * 5, // cachea por 5 minutos
  });

  if (isLoading)
    return (
      <ContenedorAuto>
        <Navbar />
        <p className='mt-10 text-center'>Cargando...</p>
      </ContenedorAuto>
    );

  if (isError || !data)
    return (
      <ContenedorAuto>
        <Navbar />
        <p className='mt-10 text-center'>Error al cargar los datos</p>
      </ContenedorAuto>
    );

  const { hero, ultimos, populares, recomendados } = data;

  return (
    <ContenedorAuto>
      <Navbar />
      <Hero {...hero} />
      <main className='m-3 flex flex-col gap-6 lg:flex-row'>
        <section className='flex flex-1 flex-col gap-10'>
          <ListaJuegos titulo='Ultimos lanzamientos' juegos={ultimos} verMas='/juegos' />
          <ListaJuegos titulo='Mas populares' juegos={populares} verMas='/juegos' />
        </section>
        <AsideRecomendados juegos={recomendados} />
      </main>
    </ContenedorAuto>
  );
};

export default Home;
