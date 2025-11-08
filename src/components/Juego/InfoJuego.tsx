import { memo } from 'react';

interface InfoJuegoProps {
  titulo: string;
  precio: number;
  bio: string;
}

const InfoJuego = memo(({ titulo, precio, bio }: InfoJuegoProps) => {
  return (
    <section className='m-2 flex flex-col gap-4 rounded-xl bg-[#0a0a0a] p-5 text-white shadow-md'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-5'>
          <h1 className='text-2xl font-extrabold sm:text-3xl'>{titulo}</h1>
          <span className='text-2xl font-bold text-green-500 sm:text-3xl'>${precio.toFixed(2)}</span>
        </div>
      </div>

      <p className='text-sm leading-relaxed text-gray-300 sm:text-base'>{bio}</p>
    </section>
  );
});

export default InfoJuego;
