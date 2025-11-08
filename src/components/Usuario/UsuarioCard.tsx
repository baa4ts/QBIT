export interface UsuarioCardProps {
  imagenUrl: string;
  nombre: string;
  biografia: string;
}

const UsuarioCard = ({ imagenUrl, nombre, biografia }: UsuarioCardProps) => {
  return (
    <article className='flex w-full flex-col gap-4 sm:flex-row sm:gap-6'>
      <div className='flex w-full justify-center p-3 sm:w-1/4'>
        <img className='h-48 w-48 rounded-2xl object-cover sm:h-48 sm:w-48' src={imagenUrl} alt={`Imagen de perfil de ${nombre}`} />
      </div>

      <div className='flex w-full flex-col justify-center text-center sm:w-3/4 sm:text-left'>
        <h1 className='font-po text-xl font-extrabold text-white sm:text-2xl md:text-3xl lg:text-4xl'>{nombre}</h1>
        <p className='mt-2 font-mono text-sm font-light text-white/60 sm:text-base md:text-lg'>{biografia}</p>
      </div>
    </article>
  );
};

export default UsuarioCard;
