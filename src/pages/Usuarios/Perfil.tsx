const Perfil = () => {
  const datosUsuario = {
    id: 'user-001',
    nombre: 'Alicia Rodríguez',
    email: 'alicia.rodriguez@ejemplo.com',
    icono: 'https://i.pinimg.com/736x/41/f5/e7/41f5e7398f7c1a80dfe08924aa1094f1.jpg',
    banner: 'https://i.pinimg.com/1200x/b1/a9/7a/b1a97ad29540bd1e82fcc9585d653f16.jpg',
    bio: 'Desarrolladora de software con pasión por el diseño UI/UX. Siempre aprendiendo y creando.',
    datos: {
      juegos: 37,
      se_unio: '12 /9 /25',
    },
  };

  return (
    <div className='flex justify-center bg-white'>
      <section className='m-2 flex w-full flex-row gap-2'>
        <article>
          <img src={datosUsuario.icono} className='h-36 w-36 rounded-xl object-cover' alt='' />
        </article>
        <article>
          <h1 className='font-po text-2xl'>{datosUsuario.nombre}</h1>
          <h2>Se unio: {datosUsuario.datos.se_unio}</h2>
        </article>
      </section>
    </div>
  );
};

export default Perfil;
