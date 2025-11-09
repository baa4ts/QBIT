import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { API } from '../../Actions/API';
import { obtenerJuego } from '../../Actions/Juego.action';
import ActionButtons from '../../components/Dev/ActionButtons';
import BannerInput from '../../components/Dev/BannerInput';
import JuegoForm, { type JuegoFormData } from '../../components/Dev/JuegoForm';
import RecursoManager from '../../components/Dev/RecursoManager';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';
import SelectorCategorias from '../../components/Shared/SelectorCategorias';

interface RecursoInterface {
  tipo: 'imagen' | 'video';
  recurso: string;
}

const Publicar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slugParam = searchParams.get('juego');

  const [categorias, setCategorias] = useState<string[]>(['']);
  const [recursos, setRecursos] = useState<RecursoInterface[]>([]);
  const [banner, setBanner] = useState<string>('');
  const [juegoData, setJuegoData] = useState<JuegoFormData>({
    titulo: '',
    precio: 0,
    descarga: '',
    descripcion: '',
  });

  useEffect(() => {
    if (!slugParam) return;

    const cargarJuego = async () => {
      try {
        const data = await obtenerJuego(slugParam);
        setJuegoData({
          titulo: data.titulo,
          precio: data.precio,
          descarga: data.opciones.descarga || '',
          descripcion: data.descripcion,
        });
        setRecursos(data.recursos.map(r => ({ tipo: r.tipo, recurso: r.recurso })));
        setCategorias(data.categorias);
        setBanner(data.banner);
      } catch (err) {
        console.error('Error al cargar el juego:', err);
        alert('No se pudo cargar el juego');
      }
    };

    cargarJuego();
  }, [slugParam]);

  const publicar = async () => {
    try {
      const categoriasFiltradas = categorias.filter(Boolean);
      const payload = { ...juegoData, recursos, categorias: categoriasFiltradas, banner };

      const { data } = slugParam ? await API.put(`/dev/edit/${slugParam}`, payload) : await API.post('/dev/new', payload);

      if (data?.juego?.slug) {
        navigate(`/juegos/${data.juego.slug}`);
      }
    } catch (err) {
      console.error(err);
      alert('Error al publicar el juego');
    }
  };

  return (
    <ContenedorAuto>
      <div className='flex flex-col gap-4'>
        <RecursoManager recursos={recursos} setRecursos={setRecursos} />
        <JuegoForm juegoData={juegoData} setJuegoData={setJuegoData} />
        <BannerInput banner={banner} setBanner={setBanner} />
        <SelectorCategorias categorias={categorias} setCategorias={setCategorias} />
        <ActionButtons onPublicar={publicar} />
      </div>
    </ContenedorAuto>
  );
};

export default Publicar;
