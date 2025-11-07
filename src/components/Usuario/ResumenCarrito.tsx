import { useCarrito, type JuegoCarrito } from '../../store/carritoStore';

export interface ResumenCarritoProps {
  juegos: JuegoCarrito[];
}

const ResumenCarrito = ({ juegos }: ResumenCarritoProps) => {
  const { limpiar } = useCarrito();
  const cantidad = juegos.length;
  const total = juegos.reduce((acc, juego) => acc + juego.precio, 0);

  return (
    <section className='flex w-full flex-row items-center justify-between rounded-md bg-[#0A0909] p-3 font-mono text-white md:m-2 md:gap-6 md:p-4'>
      {/* Izquierda: Items y Total */}
      <div className='flex flex-col items-start gap-1 text-sm md:text-base'>
        <div className='flex items-center gap-1 md:gap-2'>
          <span>Items:</span>
          <span className='font-bold'>{cantidad}</span>
        </div>
        <div className='flex items-center gap-1 md:gap-2'>
          <span>Total:</span>
          <span className='text-lg font-extrabold text-green-500 md:text-2xl'>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Derecha: Botones */}
      {total > 0 && (
        <div className='flex flex-col gap-2 md:flex-row'>
          <button className='rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-green-700 md:px-6 md:py-3 md:text-xl'>Proceder al pago</button>
          <button onClick={limpiar} className='rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700 md:px-6 md:py-3 md:text-xl'>
            Limpiar
          </button>
        </div>
      )}
    </section>
  );
};

export default ResumenCarrito;
