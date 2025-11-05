import { User } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router';
import { useEsMovil } from '../../hooks/useEsMovile';
import { useUsuario } from '../../store/usuarioStore';

const BarraOpciones = memo(({ movil, usuario }: { movil: boolean; usuario: any }) => {
  return (
    <div className='flex items-center gap-5 rounded-xl bg-white/10 px-6 py-2 shadow-inner backdrop-blur-md'>
      <Link to='/' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
        Qbit
      </Link>

      {/* Biblioteca solo si NO hay usuario */}
      {!!usuario && (
        <Link to='/otra' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
          Biblioteca
        </Link>
      )}

      {!movil && (
        <Link to='/otra' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
          Ofertas
        </Link>
      )}
    </div>
  );
});

const IconoUsuario = memo(({ usuario }: { usuario: any }) => {
  return (
    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-md backdrop-blur-md hover:bg-white/40'>
      {/* Login si NO hay usuario */}
      {!usuario && (
        <Link to={'/usuario/login'}>
          <User size={28} className='h-full w-full rounded-md' />
        </Link>
      )}

      {/* Icono si hay usuario */}
      {usuario && (
        <Link to={'/usuario'}>
          <img className='h-full w-full rounded-full object-cover' src={usuario.icono} />
        </Link>
      )}
    </div>
  );
});

const Navbar = () => {
  const { usuario } = useUsuario();
  const movil = useEsMovil({ width: 800 });

  return (
    <nav className='fixed top-0 left-1/2 z-50 mx-auto flex w-auto max-w-[500px] -translate-x-1/2 items-center justify-between gap-5 p-4'>
      {/* Barra de bottones */}
      <BarraOpciones movil={movil} usuario={usuario} />

      {/* Icono de usuario */}
      <IconoUsuario usuario={usuario} />
    </nav>
  );
};

export default Navbar;
