import { memo } from 'react';

const CardJuegoVacio = memo(() => {
  return (
    <div className='flex flex-col items-center justify-center rounded-md bg-[#354553] p-6 text-center text-white opacity-80'>
      <p className='text-lg font-semibold md:text-xl'>no tienes juegos</p>
    </div>
  );
});

export default CardJuegoVacio;
