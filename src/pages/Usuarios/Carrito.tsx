import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import CarritoVacio from '../../components/Usuario/CarritoVacio';
import ListaCarrito from '../../components/Usuario/ListaCarrito';
import ResumenCarrito from '../../components/Usuario/ResumenCarrito';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { useCarrito } from '../../store/carritoStore';

const Carrito = () => {
  const { juegos } = useCarrito();

  return (
    <ContenedorAuto className='mt-15'>
      <Navbar />
      <UsuarioSeparador titulo='Juegos en el carrito' />
      <ResumenCarrito juegos={juegos} />
      {juegos.length > 1 ? <ListaCarrito juegos={juegos} /> : <CarritoVacio />}
    </ContenedorAuto>
  );
};

export default Carrito;
