import { User } from 'lucide-react';
import { Link } from 'react-router';
import { useEsMovil } from '../../hooks/useEsMovile';
import { useUsuario } from '../../store/usuarioStore';

const Navbar = () => {
  const { usuario } = useUsuario();
  const movil = useEsMovil({ width: 800 });

  return (
    <nav className='fixed top-0 left-1/2 z-50 mx-auto flex w-auto max-w-[500px] -translate-x-1/2 items-center justify-between gap-5 p-4'>
      {/* Contenedor de bottones */}
      <div className='flex items-center gap-5 rounded-xl bg-white/10 px-6 py-2 shadow-inner backdrop-blur-md'>
        <Link to='/' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
          Qbit
        </Link>
        <Link to='/otra' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
          Biblioteca
        </Link>
        {!movil && (
          <Link to='/otra' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
            Ofertas
          </Link>
        )}
      </div>

      {/* ICono de usuario */}
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-md backdrop-blur-md hover:bg-white/40'>
        {/* Si el usuario no esta autenticado */}
        {!usuario && (
          <Link to={'/usuario/login'}>
            <User />
          </Link>
        )}

        {/* Si el usuario esta autenticado */}
        {usuario && (
          <Link to={'/usuario'}>
            <img className='h-full w-full rounded-full object-cover' src={usuario.icono} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
