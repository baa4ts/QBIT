import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCarrito } from '../../store/carritoStore';
import { useUsuario } from '../../store/usuarioStore';

interface InfoJuegoProps {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  slug: string;
  bio: string;
}

const InfoJuego = ({ id, titulo, precio, imagen, slug, bio }: InfoJuegoProps) => {
  const { usuario } = useUsuario();
  const juegos = useCarrito(state => state.juegos);
  const agregar = useCarrito(state => state.agregar);
  const eliminar = useCarrito(state => state.eliminar);

  const enCarrito = juegos.some(j => j.id === id);

  const handleClick = () => {
    if (enCarrito) eliminar(id);
    else agregar({ id, imagen, precio, slug });
  };

  return (
    <section className='m-2 flex flex-col gap-4 rounded-xl bg-[#0a0a0a] p-5 text-white shadow-md'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-5'>
          <h1 className='text-2xl font-extrabold sm:text-3xl'>{titulo}</h1>
          <span className='text-2xl font-bold text-green-500 sm:text-3xl'>${precio.toFixed(2)}</span>
        </div>
        {usuario && (
          <button
            onClick={handleClick}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition active:scale-95 ${enCarrito ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
            {enCarrito ? (
              <>
                <Trash2 className='h-5 w-5' />
                Quitar
              </>
            ) : (
              <>
                <ShoppingCart className='h-5 w-5' />
                Agregar
              </>
            )}
          </button>
        )}
      </div>

      <p className='text-sm leading-relaxed text-gray-300 sm:text-base'>{bio}</p>
    </section>
  );
};

export default InfoJuego;
