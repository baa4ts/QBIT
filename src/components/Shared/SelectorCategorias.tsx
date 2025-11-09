import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { API } from '../../Actions/API';

interface Categoria {
  id: number;
  nombre: string;
}

interface SelectorCategoriasProps {
  categorias: string[];
  setCategorias: (nuevas: string[]) => void;
}

const SelectorCategorias = ({ categorias, setCategorias }: SelectorCategoriasProps) => {
  const [filtro, setFiltro] = useState('');

  const alternar = (cat: string) => {
    if (!cat.trim()) return;
    if (categorias.includes(cat)) {
      setCategorias(categorias.filter(c => c !== cat));
    } else {
      setCategorias([...categorias, cat]);
    }
  };

  const {
    data: todasCategorias = [],
    isLoading,
    isError,
  } = useQuery<Categoria[]>({
    queryKey: ['categorias'],
    queryFn: async () => {
      const response = await API.get<Categoria[]>('/categorias');
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const filtradas = todasCategorias
    .map(c => c.nombre)
    .filter(nombre => nombre.toLowerCase().includes(filtro.toLowerCase()))
    .filter(Boolean);

  if (isLoading) return <div>Cargando categorias...</div>;
  if (isError) return <div>Error al cargar categorias</div>;

  const categoriasValidas = categorias.filter(Boolean);
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
        {filtradas.map(nombre => (
          <button
            key={nombre}
            onClick={() => alternar(nombre)}
            className={`rounded-md px-3 py-1 text-sm whitespace-nowrap transition ${
              categoriasValidas.includes(nombre) ? 'bg-emerald-600 text-white' : 'bg-[#161616] text-gray-300 hover:bg-emerald-600/30'
            }`}>
            {nombre}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SelectorCategorias;
