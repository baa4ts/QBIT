import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router';
import { obtenerPerfil } from '../../Actions/Perfil.action';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import SuspenseLoading from '../../components/Shared/SuspenseLoading';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioCard from '../../components/Usuario/UsuarioCard';
import UsuarioMenu from '../../components/Usuario/UsuarioMenu';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { useUsuario } from '../../store/usuarioStore';

const Perfil = () => {
  const { usuario } = useUsuario();

  if (!usuario) return <Navigate to='/' />;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['Perfil', usuario.id],
    queryFn: () => obtenerPerfil(usuario.id),
  });

  if (isLoading) return <SuspenseLoading />;
  if (isError || !data) return <Navigate to='/' />;

  return (
    <ContenedorAuto className='mt-15'>
      <Navbar />
      <UsuarioCard icono={data.icono} nombre={data.nombre} biografia={data.biografia} />
      <UsuarioSeparador titulo='Menu' />
      <UsuarioMenu />
      <UsuarioSeparador titulo='Ultimas compras' />
      <UltimasCompras mostrarPrecio={false} ultimosJuegos={data.ultimos} />
    </ContenedorAuto>
  );
};

export default Perfil;
