import { useQuery } from '@tanstack/react-query';
import { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router';
import { obtenerJuegos } from '../../Actions/Juegos.actions';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import SuspenseLoading from '../../components/Shared/SuspenseLoading';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import { GenararUrl } from '../../Utils/GerarUrl';

const Juegos = () => {
  const [searchParams] = useSearchParams();
  const navegar = useNavigate();

  const [pagina, setPagina] = useState<number>(1);
  const [ofertas, setOfertas] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [buscar, setBuscar] = useState<string>('');
  const [inicializado, setInicializado] = useState(false);

  const filtrosRef = useRef({ categorias: [] as string[], buscar: '' });

  // Inicializar filtros desde URL
  useEffect(() => {
    const urlOfertas = (searchParams.get('ofertas') || '').trim().toLowerCase() === 'true';
    const urlPage = Number(searchParams.get('page')) || 1;
    const urlCategoria = searchParams.getAll('categoria');
    const urlBuscar = searchParams.get('buscar') || '';

    setPagina(urlPage);
    setOfertas(urlOfertas);
    setCategorias(urlCategoria);
    setBuscar(urlBuscar);

    filtrosRef.current = { categorias: urlCategoria, buscar: urlBuscar };
    setInicializado(true);
  }, [searchParams]);

  // Actualizar URL cuando cambian filtros/pagina
  useEffect(() => {
    if (!inicializado) return;
    const search = GenararUrl({ pagina, ofertas, categorias, buscar });
    navegar({ pathname: '/juegos', search }, { replace: true });
  }, [pagina, ofertas, categorias, buscar, navegar, inicializado]);

  // Resetear pagina si cambian filtros de usuario
  useEffect(() => {
    if (!inicializado) return;

    const filtrosCambian =
      filtrosRef.current.buscar !== buscar ||
      filtrosRef.current.categorias.join(',') !== categorias.join(',');

    if (filtrosCambian) {
      setPagina(1);
      filtrosRef.current = { categorias, buscar };
    }
  }, [categorias, buscar, inicializado]);

  const search = GenararUrl({ pagina, ofertas, categorias, buscar });

  // Query TanStack
  const { data, isLoading, isError } = useQuery({
    queryKey: ['juegos', pagina, ofertas, categorias, buscar],
    queryFn: () => obtenerJuegos({ parametros: search }),
    staleTime: 5000,
  });

  if (isLoading) return <SuspenseLoading />;
  if (isError) return <Navigate to='/' />;

  return (
    <ContenedorAuto>
      <Navbar />
      <MenuJuego
        label='Ofertas'
        mostrarOfertas
        activo={ofertas}
        setActivo={setOfertas}
        buscar={buscar}
        setBuscar={setBuscar}
      />
      <SelectorCategorias categorias={categorias} setCategorias={setCategorias} />
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={data?.juegos || []} />
      <Paginador pagina={pagina} setPagina={setPagina} max={data?.meta?.maxPage || 1} />
    </ContenedorAuto>
  );
};

export default Juegos;
