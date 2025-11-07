import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { useCarrito, type JuegoCarrito } from '../../store/carritoStore';

export interface ListaCarritoProps {
  juegos: JuegoCarrito[];
}

const ListaCarrito = ({ juegos }: ListaCarritoProps) => {
  const { eliminar } = useCarrito();

  return (
    <section className='flex flex-col gap-3 rounded-md bg-[#0A0909] p-3 font-mono text-white md:m-2'>
      {juegos.map(juego => (
        <div key={`${juego.id}-${juego.slug}`} className='flex w-full items-center justify-between gap-4 rounded-md bg-[#1a1a1a] p-3 transition-colors hover:bg-[#2a2a2a]'>
          {/* Link al juego */}
          <Link to={`/juegos/${juego.slug}`} className='flex flex-1 items-center gap-4'>
            <img src={juego.imagen} alt={juego.slug} className='h-16 w-16 rounded-md object-cover md:h-20 md:w-20' />
            <span className='truncate text-lg font-bold md:text-2xl'>{juego.slug}</span>
          </Link>

          {/* Precio */}
          <span className='text-lg font-extrabold text-green-500 md:text-2xl'>${juego.precio.toFixed(2)}</span>

          {/* Boton eliminar */}
          <button onClick={() => eliminar(juego.id)} className='rounded-md bg-red-600 p-2 text-white transition-colors hover:bg-red-700' title='Eliminar del carrito'>
            <Trash2 className='h-5 w-5 md:h-6 md:w-6' />
          </button>
        </div>
      ))}
    </section>
  );
};

export default ListaCarrito;
