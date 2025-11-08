import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioCard from '../../components/Usuario/UsuarioCard';
import UsuarioEstadisticas from '../../components/Usuario/UsuarioEstadisticas';
import UsuarioMenu from '../../components/Usuario/UsuarioMenu';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { testUsuario } from '../../interfaces/Usuario/Perfil.interface';

const Perfil = () => {
  const datos = testUsuario;
  return (
    <ContenedorAuto className='mt-15'>
      {/* Navbar */}
      <Navbar />
      {/* Componente icono de usuario y su nombre */}
      <UsuarioCard icono={datos.icono} nombre={datos.nombre} biografia={datos.biografia} />
      <UsuarioSeparador titulo='Menu' />
      <UsuarioMenu />
      <UsuarioSeparador titulo='Insignias obtenidas' />
      <UsuarioEstadisticas />
      <UsuarioSeparador titulo='Ultimas compras' />
      <UltimasCompras mostrarPrecio={false} ultimosJuegos={datos.ultimos} />
    </ContenedorAuto>
  );
};

export default Perfil;
