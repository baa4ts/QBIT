export interface UsuarioCardProps {
  imagenUrl: string;
  nombre: string;
  biografia: string;
}

const UsuarioCard = ({ imagenUrl, nombre, biografia }: UsuarioCardProps) => {
  return (
    <article className='flex w-full flex-row'>
      <div className='sm:3/8 w-2/6 p-3 md:w-1/4'>
        <img className='h-full w-full rounded-2xl object-cover' src={imagenUrl} alt={`Imagen de perfil de ${nombre}`} />
      </div>

      <div className='sm:5/8 flex w-4/6 flex-col justify-center md:w-3/4'>
        <h1 className='font-po text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-6xl'>{nombre}</h1>
        <p className='mt-2 font-mono font-light text-white/60'>{biografia}</p>
      </div>
    </article>
  );
};

export default UsuarioCard;
