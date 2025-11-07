import { Link } from 'react-router';

interface HeroProps {
  titulo: string;
  descripcion: string;
  slug: string;
  video: string;
}

const Hero = ({ titulo, descripcion, slug, video }: HeroProps) => {
  return (
    <section className='relative flex aspect-video max-h-[90vh] w-full items-center justify-center overflow-hidden rounded-2xl'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <video src={video} autoPlay loop muted playsInline className='mx-auto h-[90%] w-[90%] rounded-2xl object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-center text-white'>
          <h1 className='mb-3 text-3xl font-extrabold drop-shadow-lg sm:text-5xl'>{titulo}</h1>
          <p className='mb-5 max-w-xl text-base text-gray-300 sm:text-lg'>{descripcion}</p>
          <Link to={`/juegos/${slug}`} className='rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold transition hover:bg-green-700 active:scale-95'>
            Ver mas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
