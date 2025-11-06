import { memo } from 'react';

interface Props {
  titulo: string;
  className?: string;
}

const UsuarioSeparador = memo(({ titulo = '', className }: Props) => {
  return (
    <section className='flex h-9 w-auto flex-row items-center rounded-md bg-[#0A0909] font-mono text-white md:m-2 md:text-xl'>
      <p className={`ml-2 ${className}`}>{titulo}</p>
    </section>
  );
});

export default UsuarioSeparador;
