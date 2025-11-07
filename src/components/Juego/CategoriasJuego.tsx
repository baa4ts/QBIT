interface CategoriasJuegoProps {
  categorias: string[];
}

const CategoriasJuego = ({ categorias }: CategoriasJuegoProps) => {
  return (
    <section className='m-2 flex flex-wrap gap-2'>
      {categorias.map((cat, i) => (
        <span key={i} className='rounded-full border border-white/10 bg-[#1c1c1c] px-3 py-1 text-sm text-white sm:text-base'>
          {cat}
        </span>
      ))}
    </section>
  );
};

export default CategoriasJuego;
