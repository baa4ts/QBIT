interface PaginadorProps {
  pagina: number;
  setPagina: (n: number) => void;
  max?: number;
}

/**
 * Paginador reutilizable que usa state interno
 */
const Paginador = ({ pagina, setPagina, max = 1 }: PaginadorProps) => {
  return (
    <section className='flex items-center justify-center gap-2 rounded-md bg-[#0A0909] px-3 py-2 font-mono text-white md:m-2 md:text-base'>
      {/* pagina anterior */}
      <button
        disabled={pagina <= 1}
        onClick={() => setPagina(pagina - 1)}
        className={`rounded-md px-2 py-0.5 text-sm transition ${pagina <= 1 ? 'bg-[#161616] text-gray-600' : 'bg-[#161616] text-gray-300 hover:bg-emerald-600 hover:text-white'}`}>
        ←
      </button>

      {/* pagina actual */}
      <span className='rounded-md bg-emerald-600 px-2 py-0.5 text-sm font-semibold text-white shadow-sm'>{pagina}</span>

      {/* pagina siguiente */}
      <button
        disabled={pagina >= max}
        onClick={() => setPagina(pagina + 1)}
        className={`rounded-md px-2 py-0.5 text-sm transition ${pagina >= max ? 'bg-[#161616] text-gray-600' : 'bg-[#161616] text-gray-300 hover:bg-emerald-600 hover:text-white'}`}>
        →
      </button>
    </section>
  );
};

export default Paginador;
