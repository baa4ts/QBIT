import { useState } from 'react';
import { comprarJuegos } from '../../Actions/Carrito.action';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import Navbar from '../../components/Shared/Navbar';
import CarritoVacio from '../../components/Usuario/CarritoVacio';
import ListaCarrito from '../../components/Usuario/ListaCarrito';
import ResumenCarrito from '../../components/Usuario/ResumenCarrito';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { useCarrito } from '../../store/carritoStore';

const Carrito = () => {
  const { juegos, limpiar } = useCarrito();
  const [procesando, setProcesando] = useState<'pagar' | 'limpiar' | null>(null);

  const handlePagar = async () => {
    setProcesando('pagar');
    const ids = juegos.map(j => j.id);
    const exito = await comprarJuegos(ids);
    if (exito) limpiar();
    console.log('Compra completada:', exito);
    setProcesando(null);
  };

  const handleLimpiar = () => {
    setProcesando('limpiar');
    limpiar();
    setProcesando(null);
  };

  return (
    <ContenedorAuto className='mt-15'>
      <Navbar />
      <UsuarioSeparador titulo='Juegos en el carrito' />
      <ResumenCarrito
        juegos={juegos}
        handlePagar={handlePagar}
        handleLimpiar={handleLimpiar}
        procesando={procesando}
      />

      {juegos.length >= 1 ? <ListaCarrito juegos={juegos} /> : <CarritoVacio />}
    </ContenedorAuto>
  );
};

export default Carrito;
