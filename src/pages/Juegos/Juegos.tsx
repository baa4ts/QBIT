import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import { categoriasPruevas, juegosPruevas } from '../../interfaces/Juegos/Juegos.interface';
import { GenararUrl } from '../../Utils/GerarUrl';

const Juegos = () => {
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Estados
  const [pagina, setPagina] = useState<number>(1);
  const [ofertas, setOfertas] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');

  // Inicializar desde la URL
  useEffect(() => {
    const urlOfertas = (searchParams.get('ofertas') || '').trim().toLowerCase() === 'true';
    const urlPage = Number(searchParams.get('page')) || 1;
    const urlCategoria = searchParams.getAll('categoria');
    const urlBuscar = searchParams.get('buscar') || '';

    setPagina(urlPage);
    setCategorias(urlCategoria);
    setOfertas(urlOfertas);
    setBuscar(urlBuscar);
  }, [searchParams]);

  // Actualizar la URL cuando cambian filtros
  useEffect(() => {
    const search = GenararUrl({ pagina, ofertas, categorias, buscar });
    navegar({ pathname: '/juegos', search }, { replace: true });
  }, [pagina, ofertas, categorias, buscar, navegar]);

  return (
    <ContenedorAuto>
      <Navbar />

      {/* Menu de buscar */}
      <MenuJuego label='Ofertas' mostrarOfertas activo={ofertas} setActivo={setOfertas} buscar={buscar} setBuscar={setBuscar} />

      {/* Menu de categorias */}
      <SelectorCategorias todas={categoriasPruevas} categorias={categorias} setCategorias={setCategorias} />

      {/* Listado de juegos */}
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegosPruevas} />

      {/* Paginador */}
      <Paginador pagina={pagina} setPagina={setPagina} max={10} />
    </ContenedorAuto>
  );
};

export default Juegos;
