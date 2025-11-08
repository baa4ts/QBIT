import CardJuego, { type CardJuegoProps } from '../Shared/CardJuego';
import CardJuegoVacio from '../Shared/CardJuegoVacio';

interface UltimasComprasProps {
  mostrarPrecio?: boolean;
  ultimosJuegos: CardJuegoProps[];
}

const UltimasCompras = ({ mostrarPrecio = false, ultimosJuegos }: UltimasComprasProps) => {
  return (
    <section className='m-2 flex flex-col gap-3'>
      {ultimosJuegos.length === 0 ? (
        <CardJuegoVacio />
      ) : (
        ultimosJuegos.map(juego => (
          <CardJuego key={juego.slug} titulo={juego.titulo} banner={juego.banner} categorias={juego.categorias} precio={juego.precio} mostrarPrecio={mostrarPrecio} slug={juego.slug} />
        ))
      )}
    </section>
  );
};

export default UltimasCompras;
