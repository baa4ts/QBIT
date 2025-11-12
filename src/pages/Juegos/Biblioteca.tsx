import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router';
import { ObtenerBiblioteca } from '../../Actions/Biblioteca';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import SuspenseLoading from '../../components/Shared/SuspenseLoading';
import BiblioteacaEstadisticas from '../../components/Usuario/BiblioteacaEstadisticas';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
import { GenararUrl } from '../../Utils/GerarUrl';

const Biblioteca = () => {
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  // Estados de filtros y paginacion
  const [pagina, setPagina] = useState<number>(1);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');
  const [inicializado, setInicializado] = useState(false);

  // Ref para comparar filtros previos
  const filtrosRef = useRef({ categorias: [] as string[], buscar: '' });

  // Inicializar filtros desde la URL solo una vez
  useEffect(() => {
    const urlPage = Number(searchParams.get('page')) || 1;
    const urlCategoria = searchParams.getAll('categoria');
    const urlBuscar = searchParams.get('buscar') || '';

    setPagina(urlPage);
    setCategorias(urlCategoria);
    setBuscar(urlBuscar);

    filtrosRef.current = { categorias: urlCategoria, buscar: urlBuscar };
    setInicializado(true);
  }, [searchParams]);

  // Actualizar URL cuando cambian filtros o pagina
  useEffect(() => {
    if (!inicializado) return;
    const search = GenararUrl({ pagina, categorias, buscar });
    navegar({ pathname: '/juegos/biblioteca', search }, { replace: true });
  }, [pagina, categorias, buscar, inicializado, navegar]);

  // Resetear pagina a 1 si cambian filtros
  useEffect(() => {
    if (!inicializado) return;
    if (filtrosRef.current.buscar !== buscar || filtrosRef.current.categorias.join(',') !== categorias.join(',')) {
      setPagina(1);
      filtrosRef.current = { categorias, buscar };
    }
  }, [categorias, buscar, inicializado]);

  // Query con TanStack
  const { data, isLoading, isError } = useQuery({
    queryKey: ['biblioteca', pagina, categorias, buscar],
    queryFn: () => {
      const search = GenararUrl({ pagina, categorias, buscar });
      return ObtenerBiblioteca(search);
    },
    staleTime: 200,
  });

  if (isLoading) return <SuspenseLoading />;
  if (isError) return <Navigate to='/' />;

  return (
    <ContenedorAuto>
      <Navbar />
      <UsuarioSeparador titulo='Tus juegos' />

      <MenuJuego mostrarOfertas={false} buscar={buscar} setBuscar={setBuscar} />
      <SelectorCategorias categorias={categorias} setCategorias={setCategorias} />
      <BiblioteacaEstadisticas titulo='Total de Juegos' numero={data?.juegos?.length || 0} />

      <UltimasCompras mostrarPrecio={true} ultimosJuegos={data.juegos} />
      <Paginador pagina={pagina} setPagina={setPagina} max={data.meta.maxPage || 1} />
    </ContenedorAuto>
  );
};

export default Biblioteca;
