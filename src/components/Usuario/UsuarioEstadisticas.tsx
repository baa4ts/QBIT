import { Timer } from 'lucide-react';

const UsuarioEstadisticas = () => {
  return (
    <section className='flex flex-row flex-wrap items-center sm:flex-row md:mx-2'>
      <div className='flex h-24 w-20 flex-col items-center justify-center rounded-xl text-white'>
        <Timer size={44} />
        <p className='font-po text-sm text-white/50'>12/04/2025</p>
      </div>
    </section>
  );
};

export default UsuarioEstadisticas;
