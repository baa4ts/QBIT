import { Download, ShoppingCart, Trash2 } from 'lucide-react';
import { memo } from 'react';
import { useNavigate } from 'react-router';
import type { JuegoInterface } from '../../interfaces/Juego/Juego.interface';
import { useCarrito } from '../../store/carritoStore';
import { useUsuario } from '../../store/usuarioStore';

// ---------- Boton Carrito ----------
interface BotonCarritoProps {
  enCarrito: boolean;
  onClick: () => void;
}

const BotonCarrito = memo(({ enCarrito, onClick }: BotonCarritoProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 rounded-lg px-6 py-2 font-semibold transition-all duration-200 active:scale-95 ${
      enCarrito ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
    }`}>
    {enCarrito ? (
      <>
        <Trash2 className='h-5 w-5' /> Quitar
      </>
    ) : (
      <>
        <ShoppingCart className='h-5 w-5' /> Agregar
      </>
    )}
  </button>
));

// ---------- Boton Descarga ----------
interface BotonDescargaProps {
  link: string;
}

const BotonDescarga = memo(({ link }: BotonDescargaProps) => (
  <a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-blue-500 active:scale-95'>
    <Download className='h-5 w-5' /> Descargar
  </a>
));

// ---------- Principal ----------
export interface OpcionesJuegosInterface {
  juego: JuegoInterface;
}

const OpcionesJuegos = ({ juego }: OpcionesJuegosInterface) => {
  const navigate = useNavigate();
  const agregar = useCarrito(state => state.agregar);
  const eliminar = useCarrito(state => state.eliminar);
  const enCarrito = useCarrito(state => state.existe(juego.id));
  const { usuario } = useUsuario();

  const handleClick = () => {
    if (!usuario) {
      // Si no hay usuario, redirige al login
      navigate('/usuario/login');
      return;
    }

    if (enCarrito) eliminar(juego.id);
    else agregar({ id: juego.id, imagen: juego.banner, precio: juego.precio, slug: juego.slug });
  };

  return (
    <section className='m-2 flex flex-col items-center justify-center gap-4 rounded-xl bg-[#0a0a0a] p-5 text-white shadow-md sm:flex-row sm:gap-6'>
      {!juego.opciones.usuario && <BotonCarrito enCarrito={enCarrito} onClick={handleClick} />}
      {juego.opciones.usuario && juego.opciones.descarga && <BotonDescarga link={juego.opciones.descarga} />}
    </section>
  );
};

export default OpcionesJuegos;
