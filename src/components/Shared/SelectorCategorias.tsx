import { useState } from 'react';

interface CategoriaBuscadorProps {
  todas: string[];
  categorias: string[];
  setCategorias: (nuevas: string[]) => void;
}

const SelectorCategorias = ({ todas, categorias, setCategorias }: CategoriaBuscadorProps) => {
  const [filtro, setFiltro] = useState('');

  const alternar = (cat: string) => {
    if (categorias.includes(cat)) {
      setCategorias(categorias.filter(c => c !== cat));
    } else {
      setCategorias([...categorias, cat]);
    }
  };

  const filtradas = todas.filter(c => c.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <section className='flex flex-col gap-2 rounded-md bg-[#0A0909] px-3 py-2 font-mono text-white md:m-2 md:text-base'>
      <h3 className='text-sm font-bold text-gray-300 md:text-base'>Categorias</h3>
      <input
        type='text'
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        placeholder='Buscar categoria...'
        className='w-full rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none'
      />
      <div className='scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-transparent flex gap-2 overflow-x-auto md:flex-wrap'>
        {filtradas.map(cat => (
          <button
            key={cat}
            onClick={() => alternar(cat)}
            className={`rounded-md px-3 py-1 text-sm whitespace-nowrap transition ${
              categorias.includes(cat) ? 'bg-emerald-600 text-white' : 'bg-[#161616] text-gray-300 hover:bg-emerald-600/30'
            }`}>
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SelectorCategorias;
