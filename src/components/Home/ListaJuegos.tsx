import { Link } from 'react-router';

interface Juego {
  id: number;
  titulo: string;
  imagen: string;
  precio: number;
  slug: string;
}

interface ListaJuegosProps {
  titulo: string;
  juegos: Juego[];
  verMas: string;
}

const ListaJuegos = ({ titulo, juegos, verMas }: ListaJuegosProps) => {
  return (
    <div>
      <h2 className='mb-4 text-2xl font-bold text-white'>{titulo}</h2>
      <div className='flex flex-col gap-3'>
        {juegos.map(j => (
          <Link key={j.id} to={`/juegos/${j.slug}`} className='flex items-center gap-4 overflow-hidden rounded-xl bg-[#111] p-2 transition hover:bg-[#1b1b1b]'>
            <img src={j.imagen} alt={j.titulo} className='h-20 w-32 shrink-0 rounded-md object-cover' />
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold text-white'>{j.titulo}</h3>
              <span className='font-semibold text-green-400'>${j.precio.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className='mt-5 flex justify-center'>
        <Link to={verMas} className='rounded-lg bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20 active:scale-95'>
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default ListaJuegos;
