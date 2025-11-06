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
  // Hooks
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Variables
  const [pagina, setPagina] = useState<number>(0);
  const [ofertas, setOfertas] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');

  // Datos url
  const urlOfertas = (searchParams.get('ofertas') || '').trim().toLowerCase() === 'true';
  const urlPage = Number(searchParams.get('page')) || 1;
  const urlCategoria = searchParams.getAll('categoria');

  //
  //
  // Los datos estan en interface (de pruevas)
  //
  //
  //

  // Establecer las categorias
  useEffect(() => {
    setPagina(urlPage);
    setCategorias(urlCategoria);
    setOfertas(urlOfertas);
  }, []);

  // Actualizar la url
  useEffect(() => {
    const search = GenararUrl({ pagina, ofertas, categorias, buscar });
    console.log(ofertas);
    navegar({ pathname: '/juegos', search }, { replace: true });
  }, [pagina, ofertas, categorias, buscar]);

  return (
    <ContenedorAuto>
      {/* Se reutiliza el contendor y listado de usuario */}
      <Navbar />
      {/* Menu de buscar */}
      <MenuJuego label='Ofertas' mostrarOfertas activo={ofertas} setActivo={setOfertas} buscarJuego={buscar} setBuscarJuego={setBuscar} />
      {/* Menu de categorias */}
      <SelectorCategorias todas={categoriasPruevas} categorias={categorias} setCategorias={setCategorias} />
      {/* Listado de juegos */}
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegosPruevas} />
      <Paginador pagina={pagina} setPagina={setPagina} max={10} />
    </ContenedorAuto>
  );
};

export default Juegos;
