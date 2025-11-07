import { useEffect, useState } from 'react';
import Switch from '../Shared/Switch';

interface MenuJuegoProps {
  label?: string;
  activo?: boolean;
  mostrarOfertas?: boolean;
  setActivo?: (valor: boolean) => void;
  buscar: string;
  setBuscar: (texto: string) => void;
}

const MenuJuego = ({ label = 'Ofertas', activo = false, setActivo, buscar, mostrarOfertas = true, setBuscar }: MenuJuegoProps) => {
  const [texto, setTexto] = useState(buscar || '');

  // Mantener texto sincronizado si cambiar buscar desde afuera
  useEffect(() => {
    setTexto(buscar);
  }, [buscar]);

  const handleBuscar = () => {
    setBuscar(texto.trim());
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleBuscar();
  };

  return (
    <div className='flex flex-col items-start justify-center gap-3 rounded-md bg-[#0A0909] px-3 py-2 font-mono text-white md:m-2 md:flex-row md:items-center md:text-base'>
      {/* switch de ofertas */}
      {mostrarOfertas && setActivo && (
        <div className='w-full md:w-auto md:shrink-0' style={{ flexBasis: '20%' }}>
          <Switch label={label} activo={activo} setActivo={setActivo} />
        </div>
      )}

      {/* buscador de juegos */}
      <div className='flex w-full gap-2' style={{ flexBasis: '80%' }}>
        <input
          type='text'
          value={texto}
          onChange={e => setTexto(e.target.value)}
          onKeyDown={handleEnter}
          placeholder='Buscar juego...'
          className='w-full flex-1 rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none'
        />
        <button onClick={handleBuscar} className='shrink-0 rounded-md bg-emerald-600 px-4 py-1 text-sm font-semibold text-white transition hover:bg-emerald-500'>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default MenuJuego;
