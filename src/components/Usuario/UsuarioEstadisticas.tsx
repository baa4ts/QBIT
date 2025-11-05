import { Gamepad2, Timer } from 'lucide-react';
import { Link } from 'react-router';

const UsuarioEstadisticas = () => {
  return (
    <section className='mx-5 flex flex-col flex-wrap items-center sm:flex-row'>
      <Link className='flex h-24 w-20 flex-col items-center justify-center rounded-xl text-white' to={'/juegos/biblioteca'}>
        <Gamepad2 size={44} />
        <p className='font-po text-sm text-white/50'>24</p>
      </Link>
      <div className='flex h-24 w-20 flex-col items-center justify-center rounded-xl text-white'>
        <Timer size={44} />
        <p className='font-po text-sm text-white/50'>12/04/2025</p>
      </div>
    </section>
  );
};

export default UsuarioEstadisticas;
