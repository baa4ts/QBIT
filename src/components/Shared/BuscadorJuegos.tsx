import { useState } from 'react';
import { useNavigate } from 'react-router';

const BuscadorJuegos = () => {
  const [texto, setTexto] = useState('');
  const navigate = useNavigate();

  const handleBuscar = () => {
    const query = encodeURIComponent(texto.trim());
    if (query) navigate(`/juegos?buscar=${query}`);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleBuscar();
  };

  return (
    <div className='flex w-full gap-2 rounded-md bg-[#0A0909] px-3 py-2 font-mono text-white md:m-2 md:text-base'>
      <input
        type='text'
        value={texto}
        onChange={e => setTexto(e.target.value)}
        onKeyDown={handleEnter}
        placeholder='Buscar juego...'
        className='flex-1 rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none'
      />
      <button onClick={handleBuscar} className='rounded-md bg-emerald-600 px-4 py-1 text-sm font-semibold text-white transition hover:bg-emerald-500'>
        Buscar
      </button>
    </div>
  );
};

export default BuscadorJuegos;
