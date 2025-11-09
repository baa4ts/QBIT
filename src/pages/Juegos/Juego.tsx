import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router';
import { obtenerJuego } from '../../Actions/Juego.action';
import AutorJuego from '../../components/Juego/AutorJuego';
import CarruselJuego from '../../components/Juego/CarruselJuego';
import CategoriasJuego from '../../components/Juego/CategoriasJuego';
import InfoJuego from '../../components/Juego/InfoJuego';
import OpcionesJuegos from '../../components/Juego/OpcionesJuegos';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import SuspenseLoading from '../../components/Shared/SuspenseLoading';
import type { JuegoInterface } from '../../interfaces/Juego/Juego.interface';

const Juego = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useQuery<JuegoInterface>({
    queryKey: ['juego', slug],
    queryFn: () => obtenerJuego(slug!),
    enabled: !!slug,
  });

  if (isLoading) return <SuspenseLoading />;
  if (isError || !data) return <Navigate to='/juegos' />;

  return (
    <ContenedorAuto>
      <Navbar />
      <CarruselJuego recursos={data.recursos} auto />
      <InfoJuego titulo={data.titulo} precio={data.precio} bio={data.descripcion} />
      <CategoriasJuego categorias={data.categorias} />
      <OpcionesJuegos juego={data} />
      <AutorJuego Autor={data.autor} />
    </ContenedorAuto>
  );
};

export default Juego;
