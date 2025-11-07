import { Gamepad2, Search, ShoppingCart, User } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router';
import { useEsMovil } from '../../hooks/useEsMovile';
import { useUsuario } from '../../store/usuarioStore';

const BarraOpciones = memo(({ movil, permiso }: { movil: boolean; permiso: number | null }) => {
  return (
    <div className='flex items-center gap-5 rounded-xl bg-white/10 px-6 py-2 shadow-inner backdrop-blur-md'>
      <Link to='/' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
        Qbit
      </Link>

      {/* Ofertas solo en PC */}
      {!movil && (
        <Link to={{ pathname: '/juegos', search: '?ofertas=true' }} className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
          Ofertas
        </Link>
      )}

      {/* Biblioteca y carrito solo si hay usuario y no es developer */}
      {permiso !== null && permiso !== 2 && (
        <>
          <Link to='/juegos/biblioteca' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
            <Gamepad2 />
          </Link>

          <Link to='/usuario/carrito' className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
            <ShoppingCart />
          </Link>
        </>
      )}

      <Link to={{ pathname: '/juegos', search: '?ofertas=true' }} className='font-po text-lg font-bold text-white transition hover:text-emerald-400'>
        <Search />
      </Link>
    </div>
  );
});

export const IconoNoUsuario = memo(() => (
  <Link to='/usuario/login'>
    <div className='flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/20 text-white shadow-md backdrop-blur-md hover:bg-white/40'>
      <User size={28} className='h-full w-full rounded-md' />
    </div>
  </Link>
));

export const IconoConUsuario = memo(({ icono, link }: { icono: string; link: string }) => (
  <Link to={link}>
    <div className='flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/20 text-white shadow-md backdrop-blur-md hover:bg-white/40'>
      <img className='h-full w-full rounded-none object-cover' src={icono} />
    </div>
  </Link>
));

const Navbar = () => {
  const { usuario } = useUsuario();
  const movil = useEsMovil({ width: 800 });

  const permiso = usuario?.permiso ?? null;

  return (
    <nav className='fixed top-0 left-1/2 z-50 mx-auto flex w-auto max-w-[500px] -translate-x-1/2 items-center justify-between gap-5 p-4'>
      {/* Barra de botones */}
      <BarraOpciones movil={movil} permiso={permiso} />

      {/* Iconos flotantes */}
      <div className='flex gap-3'>
        {/* Icono para sin autenticar */}
        {usuario === null && <IconoNoUsuario />}

        {/* Icono para usuarios */}
        {usuario !== null && permiso === 1 && <IconoConUsuario icono={usuario.icono} link='/usuarios' />}

        {/* Icono para usuarios developers */}
        {usuario !== null && permiso === 2 && <IconoConUsuario icono={usuario.icono} link='/dev' />}
      </div>
    </nav>
  );
};

export default Navbar;
