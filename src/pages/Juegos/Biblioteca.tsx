import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import MenuJuego from '../../components/Shared/MenuJuego';
import Navbar from '../../components/Shared/Navbar';
import Paginador from '../../components/Shared/Paginador';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';
import UltimasCompras from '../../components/Usuario/UltimasCompras';
import UsuarioSeparador from '../../components/Usuario/UsuarioSeparador';
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

  // Datos de prueba
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
  ];
  const todas = ['Accion', 'Aventura', 'Roguelike', 'Estrategia', 'Simulacion', 'Terror', 'Construccion', 'Deportes', 'Multijugador', 'Supervivencia'];

  return (
    <ContenedorAuto>
      {/* Se reutiliza la mayoria de cosas*/}
      <Navbar />
      <MenuJuego mostrarOfertas={false} buscarJuego={buscar} setBuscarJuego={setBuscar} />
      <SelectorCategorias todas={todas} categorias={categorias} setCategorias={setCategorias} />
      <UsuarioSeparador titulo='Tus juegos' />
      <UltimasCompras mostrarPrecio={true} ultimosJuegos={juegos} />
      <Paginador pagina={pagina} setPagina={setPagina} max={1} />
    </ContenedorAuto>
  );
};

export default Biblioteca;
