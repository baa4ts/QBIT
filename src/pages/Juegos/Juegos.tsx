import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
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

  // Datos simulacion
  const todas = ['Accion', 'Aventura', 'Roguelike', 'Estrategia', 'Simulacion', 'Terror', 'Construccion', 'Deportes', 'Multijugador', 'Supervivencia'];

  const juegos = [
    {
      nombre: 'Hades II',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
      categorias: ['Roguelike', 'Accion'],
      precio: 22.99,
      slug: 'hades-2',
    },
    {
      nombre: 'Satisfactory',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
      categorias: ['Construccion', 'Exploracion'],
      precio: 29.99,
      slug: 'satisfactory',
    },
    {
      nombre: 'Palworld',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg',
      categorias: ['Supervivencia', 'Multijugador'],
      precio: 26.5,
      slug: 'palworld',
    },
    {
      nombre: 'Hollow Knight',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      categorias: ['Metroidvania', 'Plataformas'],
      precio: 14.99,
      slug: 'hollow-knight',
    },
    {
      nombre: 'Baldur’s Gate 3',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
      categorias: ['RPG', 'Fantasia'],
      precio: 59.99,
      slug: 'baldurs-gate-3',
    },
    {
      nombre: 'Cyberpunk 2077',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
      categorias: ['Accion', 'Mundo Abierto'],
      precio: 49.99,
      slug: 'cyberpunk-2077',
    },
    {
      nombre: 'Stardew Valley',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg',
      categorias: ['Simulacion', 'Granjas'],
      precio: 14.99,
      slug: 'stardew-valley',
    },
    {
      nombre: 'No Man’s Sky',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg',
      categorias: ['Exploracion', 'Espacio'],
      precio: 29.99,
      slug: 'no-mans-sky',
    },
    {
      nombre: 'Elden Ring',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
      categorias: ['RPG', 'Accion'],
      precio: 59.99,
      slug: 'elden-ring',
    },
    {
      nombre: 'Terraria',
      imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg',
      categorias: ['Construccion', 'Supervivencia'],
      precio: 9.99,
      slug: 'terraria',
    },
  ];

  // Establecer las categorias
  useEffect(() => {
    setPagina(urlPage);
    setCategorias(urlCategoria);
    setOfertas(urlOfertas);
  }, []);

  // Actualizar la url
  useEffect(() => {
    const search = GenararUrl({ pagina, ofertas, categorias, buscar });
    navegar({ pathname: '/juegos', search }, { replace: true });
  }, [pagina, ofertas, categorias, buscar]);

  return (
    <ContenedorAuto>
      {/* Se reutiliza el contendor y listado de usuario */}
      <Navbar />
      <MenuJuego label='Ofertas' mostrarOfertas activo={ofertas} setActivo={setOfertas} buscarJuego={buscar} setBuscarJuego={setBuscar} />
      <SelectorCategorias todas={todas} categorias={categorias} setCategorias={setCategorias} />
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegos} />
      <Paginador pagina={pagina} setPagina={setPagina} max={10} />
    </ContenedorAuto>
  );
};

export default Juegos;
