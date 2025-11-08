import { useUsuario } from '../../store/usuarioStore';
import BottonPerfil from './BottonPerfil';

const UsuarioMenu = () => {
  const { eliminarUsuario, usuario } = useUsuario();

  const rutas = [{ label: 'Home', to: '/' }, { label: 'Mi Biblioteca', to: '/juegos/biblioteca' }, { label: 'Editar' }];

  if (usuario?.permiso === 2) {
    rutas.push({ label: 'Mis Creaciones', to: '/dev' });
    rutas.push({ label: 'Publicar', to: '/dev/new' });
  }

  return (
    <section className='flex flex-wrap justify-center gap-2 p-2 sm:justify-center sm:gap-3 md:gap-4 lg:flex-nowrap [@media(max-width:430px)]:grid [@media(max-width:430px)]:grid-cols-2'>
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
