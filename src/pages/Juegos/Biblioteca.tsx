import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ObtenerBiblioteca } from '../../Actions/Biblioteca';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import BiblioteacaEstadisticas from '../../components/Usuario/BiblioteacaEstadisticas';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { GenararUrl } from '../../Utils/GerarUrl';

const Biblioteca = () => {
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Estados
  const [pagina, setPagina] = useState<number>(1);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');
  const [datos, setDatos] = useState({ juegos: [], meta: { maxPage: 1 } });
  const [cargando, setCargando] = useState<boolean>(true);
  const [inicializado, setInicializado] = useState(false);

  // Inicializar desde la URL
  useEffect(() => {
    const urlPage = Number(searchParams.get('page')) || 1;
    const urlCategoria = searchParams.getAll('categoria');
    const urlBuscar = searchParams.get('buscar') || '';

    setPagina(urlPage);
    setCategorias(urlCategoria);
    setBuscar(urlBuscar);

    setInicializado(true);
  }, [searchParams]);

  // Actualizar URL solo despues de inicializar
  useEffect(() => {
    if (!inicializado) return;
    const search = GenararUrl({ pagina, categorias, buscar });
    navegar({ pathname: '/juegos/biblioteca', search }, { replace: true });
  }, [pagina, categorias, buscar, navegar, inicializado]);

  // Si cambian filtros o busqueda, volver a pagina 1
  useEffect(() => {
    if (!inicializado) return;
    setPagina(1);
  }, [categorias, buscar, inicializado]);

  // Cargar datos desde el backend
  useEffect(() => {
    if (!inicializado) return;
    const fetchDatos = async () => {
      setCargando(true);
      try {
        const query = GenararUrl({ pagina, categorias, buscar });
        const data = await ObtenerBiblioteca(query);
        setDatos(data);
      } catch (err) {
        console.error('Error al obtener biblioteca:', err);
      } finally {
        setCargando(false);
      }
    };
    fetchDatos();
  }, [pagina, categorias, buscar, inicializado]);

  return (
    <ContenedorAuto>
      <Navbar />
      <UsuarioSeparador titulo='Tus juegos' />

      <MenuJuego mostrarOfertas={false} buscar={buscar} setBuscar={setBuscar} />
      <SelectorCategorias categorias={categorias} setCategorias={setCategorias} />
      <BiblioteacaEstadisticas titulo='Total de Juegos' numero={datos.juegos.length} />

      {cargando ? (
        <p className='p-4 text-center text-gray-400'>Cargando...</p>
      ) : (
        <>
          <UltimasCompras mostrarPrecio={true} ultimosJuegos={datos.juegos} />
          <Paginador pagina={pagina} setPagina={setPagina} max={datos.meta.maxPage} />
        </>
      )}
    </ContenedorAuto>
  );
};

export default Biblioteca;
