import { useUsuario } from '../../store/usuarioStore';
import BottonPerfil from './BottonPerfil';

const UsuarioMenu = () => {
  const { eliminarUsuario, usuario } = useUsuario();

  const rutas = [{ label: 'Home', to: '/' }, { label: 'Mi Biblioteca', to: '/juegos/biblioteca' }, { label: 'Editar' }];

  // rutas de devs
  if (usuario?.permiso === 2) {
    rutas.push({ label: 'Mis Creaciones', to: '/dev' });
    rutas.push({ label: 'Publicar', to: '/dev/new' });
  }
  return (
    <section className='flex w-full flex-wrap justify-center gap-2 p-2 md:gap-3 lg:gap-4'>
      {rutas.map((r, i) => (
        <BottonPerfil key={i} to={r.to}>
          {r.label}
        </BottonPerfil>
      ))}
      <BottonPerfil onClick={eliminarUsuario} color='danger'>
        Cerrar sesion
      </BottonPerfil>
    </section>
  );
};

export default UsuarioMenu;
