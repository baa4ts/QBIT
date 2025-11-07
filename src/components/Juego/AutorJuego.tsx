import { User } from 'lucide-react';

interface AutorJuegoProps {
  nombre: string;
}

const AutorJuego = ({ nombre }: AutorJuegoProps) => {
  return (
    <section className='m-2 flex items-center gap-3 rounded-xl bg-[#0a0a0a] p-3 text-white'>
      <User className='h-6 w-6 text-gray-300' />
      <span className='text-lg font-semibold'>{nombre}</span>
    </section>
  );
};

export default AutorJuego;
