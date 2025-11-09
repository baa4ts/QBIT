import { Link } from 'react-router';
import type { JuegoHome } from '../../Actions/Home';

interface AsideRecomendadosProps {
  juegos: JuegoHome[];
}

const AsideRecomendados = ({ juegos }: AsideRecomendadosProps) => {
  return (
    <aside className='flex w-full flex-col gap-4 rounded-xl bg-[#0d0d0d] p-4 text-white lg:w-[280px]'>
      <h3 className='mb-2 border-b border-white/20 pb-2 text-xl font-bold'>Recomendados</h3>
      {juegos.map(j => (
        <Link key={j.id} to={`/juegos/${j.slug}`} className='flex items-center gap-3 rounded-lg p-2 transition hover:bg-white/10'>
          <img src={j.banner} alt={j.titulo} className='h-14 w-14 rounded-md object-cover' />
          <div>
            <p className='truncate text-sm font-semibold text-wrap'>{j.titulo}</p>
            <span className='text-sm text-green-400'>${j.precio.toFixed(2)}</span>
          </div>
        </Link>
      ))}
      <Link to='/juegos' className='mt-2 rounded-lg bg-white/10 px-4 py-2.5 text-center font-semibold transition hover:bg-white/20'>
        Ver todos
      </Link>
    </aside>
  );
};

export default AsideRecomendados;
