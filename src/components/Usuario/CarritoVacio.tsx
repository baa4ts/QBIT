import { ShoppingCart } from 'lucide-react';

const CarritoVacio = () => {
  return (
    <section className='flex h-full w-auto flex-col items-center justify-center rounded-md bg-[#0A0909] p-4 font-mono text-white md:m-2 md:text-xl'>
      <ShoppingCart className='mb-4 h-12 w-12 text-white' />
      <h1>Tu carrito esta vacio</h1>
    </section>
  );
};

export default CarritoVacio;
