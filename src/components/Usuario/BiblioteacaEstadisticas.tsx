import { memo } from 'react';

interface Props {
  titulo: string;
  numero: number;
}

const BiblioteacaEstadisticas = memo(({ titulo, numero }: Props) => {
  return (
    <section className='flex h-auto w-auto flex-row items-center rounded-md bg-[#0A0909] p-2 font-mono text-white md:m-2 md:text-xl'>
      <p className='ml-2'>
        {titulo}: <span className='text-emerald-400'>{numero}</span>
      </p>
    </section>
  );
});

export default BiblioteacaEstadisticas;
