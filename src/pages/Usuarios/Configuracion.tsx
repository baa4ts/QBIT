import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../Actions/API';
import ContenedorAuto from '../../components/Shared/ContenedorAuto';

interface UsuarioConfig {
  nombre: string;
  icono: string;
  biografia: string;
}

const Configuracion = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<UsuarioConfig>({
    nombre: '',
    icono: '',
    biografia: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const { data } = await API.get<UsuarioConfig>('/usuarios/configuracion');
        setUsuario(data);
      } catch (err) {
        console.error(err);
        alert('Error al cargar los datos del usuario');
      } finally {
        setLoading(false);
      }
    };
    fetchUsuario();
  }, []);

  const handleChange = (field: keyof UsuarioConfig, value: string) => {
    setUsuario({ ...usuario, [field]: value });
  };

  const handleGuardar = async () => {
    try {
      await API.put('/usuarios/configuracion', usuario);
      navigate('/usuario');
    } catch (err) {
      console.error(err);
      alert('Error al guardar los cambios');
    }
  };

  const handleCancelar = () => navigate('/usuario');

  if (loading)
    return (
      <ContenedorAuto>
        <p>Cargando...</p>
      </ContenedorAuto>
    );

  return (
    <ContenedorAuto>
      <div className='mx-auto flex max-w-md flex-col gap-4'>
        <h1 className='text-xl font-bold text-white'>Configuracion de usuario</h1>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold text-white'>Nombre</label>
          <input
            type='text'
            value={usuario.nombre}
            onChange={e => handleChange('nombre', e.target.value)}
            className='w-full rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white focus:border-emerald-500 focus:outline-none'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold text-white'>Biografia</label>
          <textarea
            value={usuario.biografia}
            onChange={e => handleChange('biografia', e.target.value)}
            className='w-full rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white focus:border-emerald-500 focus:outline-none'
            rows={4}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold text-white'>Icono (URL)</label>
          <input
            type='text'
            value={usuario.icono}
            onChange={e => handleChange('icono', e.target.value)}
            className='w-full rounded-md border border-gray-600 bg-[#161616] px-3 py-1 text-white focus:border-emerald-500 focus:outline-none'
          />
          {usuario.icono && <img src={usuario.icono} alt='Previsualizacion' className='mt-2 h-24 w-24 rounded-md object-cover' />}
        </div>

        <div className='mt-4 flex w-full gap-4'>
          <button onClick={handleCancelar} className='w-1/2 rounded bg-gray-600 px-4 py-2 font-semibold text-white transition-all hover:bg-gray-500'>
            Cancelar
          </button>
          <button onClick={handleGuardar} className='w-1/2 rounded bg-green-600 px-4 py-2 font-semibold text-white transition-all hover:bg-green-500'>
            Guardar
          </button>
        </div>
      </div>
    </ContenedorAuto>
  );
};

export default Configuracion;
