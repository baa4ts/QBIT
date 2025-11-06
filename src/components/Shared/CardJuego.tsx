import { memo } from 'react';
import { Link } from 'react-router';

export interface CardJuegoProps {
  nombre: string;
  imagen: string;
  categorias: string[];
  precio?: number;
  mostrarPrecio?: boolean;
  slug: string;
}

const CardJuego = memo(({ nombre, imagen, categorias, precio, mostrarPrecio = false, slug }: CardJuegoProps) => {
  return (
    <Link to={`/juegos/${slug}`} className='flex flex-row gap-3 rounded-md bg-[#354553] p-2 transition-all duration-200 hover:scale-[1.01] hover:bg-[#3f5161]'>
      <div className='w-1/3 md:w-1/2'>
        <img className='h-full w-full rounded-sm object-cover' src={imagen} alt={nombre} />
      </div>

      <div className='flex w-2/3 flex-col justify-center px-2'>
        <h1 className='text-sm font-semibold text-white md:text-lg lg:text-2xl'>{nombre}</h1>

        {mostrarPrecio && precio !== undefined && <p className='mt-1 text-lg font-bold text-white'>${precio.toFixed(2)}</p>}

        <div className='mt-2 flex flex-wrap gap-2'>
          {categorias.map((cat, i) => (
            <span key={i} className='rounded bg-white px-2 py-0.5 text-xs font-medium text-black'>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
});

export default CardJuego;
