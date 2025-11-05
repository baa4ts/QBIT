import { Link } from 'react-router';

const UsuarioMenu = () => {
  return (
    <section className='flex w-full justify-center gap-2 p-2 md:gap-4'>
      <Link
        to='/'
        className='flex h-9 max-w-[140px] min-w-[60px] flex-1 items-center justify-center rounded-md bg-[#0A0909] text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 lg:text-xl'>
        Home
      </Link>

      <Link
        to='/juegos/biblioteca'
        className='flex h-9 max-w-[140px] min-w-[60px] flex-1 items-center justify-center rounded-md bg-[#0A0909] text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 lg:text-xl'>
        Mi Biblioteca
      </Link>

      <button className='flex h-9 max-w-[140px] min-w-[60px] flex-1 items-center justify-center rounded-md bg-[#0A0909] text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 lg:text-xl'>
        Editar
      </button>
    </section>
  );
};

export default UsuarioMenu;
