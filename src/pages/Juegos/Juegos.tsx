import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { obtenerJuegos } from '../../Actions/Juegos.actions';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import { GenararUrl } from '../../Utils/GerarUrl';

const Juegos = () => {
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Estados
  const [pagina, setPagina] = useState<number>(1);
  const [ofertas, setOfertas] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [cargando, setCargando] = useState<boolean>(false);

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
  }, []);

  // Actualizar la URL cuando cambian filtros
  useEffect(() => {
    const search = GenararUrl({ pagina, ofertas, categorias, buscar });
    navegar({ pathname: '/juegos', search }, { replace: true });
  }, [pagina, ofertas, categorias, buscar, navegar]);

  // Llamada al backend
  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      const search = GenararUrl({ pagina, ofertas, categorias, buscar });
      const result = await obtenerJuegos({ parametros: search });
      setData(result);
      setCargando(false);
    };
    fetchData();
  }, [pagina, ofertas, categorias, buscar]);

  if (cargando) {
    return (
      <ContenedorAuto>
        <Navbar />
        <p className='mt-10 text-center text-lg'>Cargando...</p>
      </ContenedorAuto>
    );
  }

  return (
    <ContenedorAuto>
      <Navbar />

      {/* Menu buscar */}
      <MenuJuego label='Ofertas' mostrarOfertas activo={ofertas} setActivo={setOfertas} buscar={buscar} setBuscar={setBuscar} />

      {/* Categorias */}
      <SelectorCategorias categorias={categorias} setCategorias={setCategorias} />

      {/* Juegos */}
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={data?.juegos || []} />

      {/* Paginador */}
      <Paginador pagina={pagina} setPagina={setPagina} max={data?.meta?.maxPage || 1} />
    </ContenedorAuto>
  );
};

export default Juegos;
