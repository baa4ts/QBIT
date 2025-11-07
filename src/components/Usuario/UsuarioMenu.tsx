import { Link } from 'react-router';
import { useUsuario } from '../../store/usuarioStore';

const UsuarioMenu = () => {
  const { eliminarUsuario, usuario } = useUsuario();

  const botonClass =
    'flex h-9 max-w-[140px] min-w-[60px] flex-1 items-center justify-center rounded-md bg-[#0A0909] text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 lg:text-xl';

  return (
    <section className='flex w-full justify-center gap-2 p-2 md:gap-4'>
      <Link to='/' className={botonClass}>
        Home
      </Link>

      <Link to='/juegos/biblioteca' className={botonClass}>
        Mi Biblioteca
      </Link>

      <button className={botonClass}>Editar</button>

      {/* Botón Desarrollador solo si es usuario con permiso 2 */}
      {usuario?.permiso === 2 && (
        <Link to='/dev' className={botonClass}>
          Desarrollador
        </Link>
      )}

      <button
        onClick={eliminarUsuario}
        className='flex h-9 max-w-[140px] min-w-[60px] flex-1 items-center justify-center rounded-md bg-red-600 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 lg:text-xl'>
        Cerrar sesión
      </button>
    </section>
  );
};

export default UsuarioMenu;
