import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router';
import { obtenerPerfil } from '../../Actions/Perfil.action';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import SuspenseLoading from '../../components/Shared/SuspenseLoading';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioCard from '../../components/Usuario/UsuarioCard';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';

const Perfil = () => {
  const { uuid } = useParams();

  if (!uuid) return <Navigate to='/' />;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['Perfil', uuid],
    queryFn: () => obtenerPerfil(uuid),
  });

  if (isLoading) return <SuspenseLoading />;
  if (isError || !data) return <Navigate to='/' />;

  return (
    <ContenedorAuto className='mt-15'>
      <Navbar />
      <UsuarioCard icono={data.icono} nombre={data.nombre} biografia={data.biografia} />
      <UsuarioSeparador titulo='Ultimas compras' />
      <UltimasCompras mostrarPrecio={false} ultimosJuegos={data.ultimos} />
    </ContenedorAuto>
  );
};

export default Perfil;
