export interface UsuarioCardProps {
  icono: string;
  nombre: string;
  biografia: string;
}

const UsuarioCard = ({ icono, nombre, biografia }: UsuarioCardProps) => {
  return (
    <article className='flex w-full flex-row items-center gap-3 sm:gap-6'>
      {/** imagen a la izquierda siempre */}
      <div className='shrink-0'>
        <img className='h-24 w-24 rounded-2xl object-cover sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48' src={icono} alt={`Imagen de perfil de ${nombre}`} />
      </div>

      {/** bio a la derecha */}
      <div className='flex flex-col justify-center overflow-hidden text-left'>
        <h1 className='font-po truncate text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl'>{nombre}</h1>
        <p className='mt-1 line-clamp-3 font-mono text-xs text-white/60 sm:text-sm md:text-base'>{biografia}</p>
      </div>
    </article>
  );
};

export default UsuarioCard;
