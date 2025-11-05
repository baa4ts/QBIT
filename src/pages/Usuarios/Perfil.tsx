import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import UsuarioCard from '../../components/Usuario/UsuarioCard';
import UsuarioEstadisticas from '../../components/Usuario/UsuarioEstadisticas';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';

const Perfil = () => {
  const usuario = {
    id: 1,
    imagenUrl: 'https://i.pinimg.com/736x/cd/35/56/cd3556de028e954d49503939ca861cfc.jpg',
    nombre: 'Hideo Kojima',
    ubicacion: 'Tokio, Japón (Creador de MGS y DS)',
  };

  return (
    <ContenedorAuto>
      {/* Componente icono de usuario y su nombre */}
      <UsuarioCard imagenUrl={usuario.imagenUrl} nombre={usuario.nombre} biografia={usuario.ubicacion} />
      <UsuarioSeparador titulo='Insignias obtenidas' />
      <UsuarioEstadisticas />
    </ContenedorAuto>
  );
};

export default Perfil;
