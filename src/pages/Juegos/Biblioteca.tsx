import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import BiblioteacaEstadisticas from '../../components/Usuario/BiblioteacaEstadisticas';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import { categoriasPruevas, juegosPruevas } from '../../interfaces/Juegos/Juegos.interface';
import { GenararUrl } from '../../Utils/GerarUrl';

const Biblioteca = () => {
  // Hooks
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Variables
  const [pagina, setPagina] = useState<number>(0);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');

  // Datos url
  const urlPage = Number(searchParams.get('page')) || 1;
  const urlCategoria = searchParams.getAll('categoria');

  // Establecer las categorias
  useEffect(() => {
    setPagina(urlPage);
    setCategorias(urlCategoria);
  }, []);

  // Actualizar la url
  useEffect(() => {
    const search = GenararUrl({ pagina, categorias, buscar });
    navegar({ pathname: '/juegos/biblioteca', search }, { replace: true });
  }, [pagina, categorias, buscar]);

  return (
    <ContenedorAuto>
      {/* Se reutiliza la mayoria de cosas*/}
      <Navbar />
      {/* Menu */}
      <MenuJuego mostrarOfertas={false} buscar={buscar} setBuscar={setBuscar} />
      {/* Menu de categorias */}
      <SelectorCategorias todas={categoriasPruevas} categorias={categorias} setCategorias={setCategorias} />
      {/* Separador con texto */}
      <BiblioteacaEstadisticas titulo='Total de Juegos' numero={16} />
      {/* Listado de juegos */}
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegosPruevas} />
      <Paginador pagina={pagina} setPagina={setPagina} max={1} />
    </ContenedorAuto>
  );
};

export default Biblioteca;
