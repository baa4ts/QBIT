import { User } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router';
import type { JuegoActorInterface } from '../../interfaces/Juego/Juego.interface';

const AutorJuego = memo(({ Autor }: { Autor: JuegoActorInterface }) => {
  return (
    <Link className='m-2 flex items-center gap-3 rounded-xl bg-[#0a0a0a] p-3 text-white' to={`/${Autor.id}`}>
      <User className='h-6 w-6 text-gray-300' />
      <span className='text-lg font-semibold'>{Autor.nombre}</span>
    </Link>
  );
});

export default AutorJuego;
