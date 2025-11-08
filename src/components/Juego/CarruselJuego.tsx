import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { JuegoRecursoInterface } from '../../interfaces/Juego/Juego.interface';

interface CarruselJuegoProps {
  recursos: JuegoRecursoInterface[];
  auto?: boolean;
}

const CarruselJuego = ({ recursos, auto = false }: CarruselJuegoProps) => {
  const [indice, setIndice] = useState(0);
  const [autoPlay, setAutoPlay] = useState(auto);

  const siguiente = () => setIndice(prev => (prev + 1) % recursos.length);
  const anterior = () => setIndice(prev => (prev - 1 + recursos.length) % recursos.length);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(siguiente, 4000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const recursoActual = recursos[indice];

  return (
    <section className='relative w-full overflow-hidden rounded-2xl p-4'>
      <div className='relative'>
        {/* recurso dinamico */}
        {recursoActual.tipo === 'imagen' ? (
          <img src={recursoActual.recurso} alt={`recurso-${indice}`} className='h-60 w-full rounded-2xl object-cover transition-all duration-500 sm:h-[360px] md:h-[420px]' />
        ) : (
          <video src={recursoActual.recurso} controls autoPlay loop muted className='h-60 w-full rounded-2xl object-cover sm:h-[360px] md:h-[420px]' />
        )}

        {/* botones de navegacion */}
        <div className='absolute inset-0 flex items-center justify-between px-3 sm:px-5'>
          <button
            onClick={anterior}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 active:scale-95 sm:h-12 sm:w-12'>
            <ChevronLeft className='h-5 w-5 sm:h-6 sm:w-6' />
          </button>

          <button
            onClick={siguiente}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 active:scale-95 sm:h-12 sm:w-12'>
            <ChevronRight className='h-5 w-5 sm:h-6 sm:w-6' />
          </button>
        </div>

        {/* boton toggle auto */}
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`absolute top-4 right-4 rounded-xl px-3 py-1 text-sm font-semibold transition active:scale-95 ${
            autoPlay ? 'bg-green-600/70 text-white hover:bg-green-600/90' : 'bg-black/60 text-white hover:bg-black/80'
          }`}>
          Auto: {autoPlay ? 'ON' : 'OFF'}
        </button>

        {/* contador */}
        <div className='absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center'>
          <div className='mb-1 flex gap-2'>
            {recursos.map((_, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-full ${i === indice ? 'scale-110 bg-white' : 'bg-gray-500'} transition-all`} />
            ))}
          </div>
          <span className='text-sm text-gray-300'>
            {indice + 1}/{recursos.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CarruselJuego;
