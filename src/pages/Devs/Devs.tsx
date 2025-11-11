import { useQuery } from '@tanstack/react-query';
import { ArrowBigLeft, DollarSign, Download, Edit, Gamepad2, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { API } from '../../Actions/API';
import { obtenerEstadisticasDev } from '../../Actions/Dev';
import { useEsMovil } from '../../hooks/useEsMovile';

const Devs = () => {
  const movil = useEsMovil({ width: 800 });
  const navigate = useNavigate();
  const [borrando, setBorrando] = useState<string | null>(null);

  useEffect(() => {
    if (movil) navigate('/usuario');
  }, [movil, navigate]);

  const {
    data: estadisticas,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['estadisticasDev'],
    queryFn: obtenerEstadisticasDev,
    refetchInterval: 30000,
  });

  const handleBorrar = async (slug: string) => {
    if (!window.confirm('¿Seguro que quieres eliminar este juego?')) return;
    try {
      setBorrando(slug);
      await API.delete(`/juegos/${slug}`);
      refetch();
    } catch (err) {
      console.error(err);
      alert('Error al eliminar el juego');
    } finally {
      setBorrando(null);
    }
  };

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white'>
        <p>Cargando estadisticas...</p>
      </div>
    );
  }

  if (!estadisticas) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white'>
        <p>No se pudieron cargar las estadisticas.</p>
      </div>
    );
  }

  const { totales, juegos } = estadisticas;

  return (
    <div className='flex min-h-screen w-full flex-col gap-6 bg-gray-900 p-6 text-white'>
      <div className='flex justify-center gap-2'>
        <Link to='/usuario' className='flex items-center gap-2 rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-600/70'>
          <ArrowBigLeft size={18} />
          Volver Atras
        </Link>
        <Link to='/dev/new' className='flex items-center gap-2 rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-600/70'>
          <Plus size={18} />
          Nuevo Juego
        </Link>
      </div>

      {/* Totales Globales */}
      <section className='rounded-2xl border border-gray-700 bg-gray-800/80 p-6 shadow-lg backdrop-blur-sm'>
        <h2 className='mb-4 flex items-center gap-2 text-2xl font-bold text-white'>
          <Gamepad2 className='text-blue-400' size={22} />
          Totales Globales
        </h2>

        <div className='space-y-3 text-gray-200'>
          <p className='flex items-center gap-2'>
            <Gamepad2 size={18} className='text-indigo-400' />
            <span>Total de juegos:</span>
            <span className='font-semibold text-white'>{totales.totalJuegos}</span>
          </p>

          <p className='flex items-center gap-2'>
            <Download size={18} className='text-green-400' />
            <span>Total de descargas:</span>
            <span className='font-semibold text-white'>{totales.totalDescargas}</span>
          </p>

          <p className='flex items-center gap-2'>
            <DollarSign size={18} className='text-yellow-400' />
            <span>Total recaudado:</span>
            <span className='font-semibold text-white'>${totales.totalRecaudado}</span>
          </p>
        </div>
      </section>

      <div className='h-4' />

      <section className='rounded border border-gray-700 bg-gray-800 p-4 shadow'>
        <h2 className='mb-4 text-xl font-bold'>Estadisticas por Juego</h2>
        <table className='w-full border-collapse text-white'>
          <thead>
            <tr className='bg-gray-700'>
              <th className='border px-4 py-2 text-left'>Titulo</th>
              <th className='border px-4 py-2 text-left'>Slug</th>
              <th className='border px-4 py-2 text-left'>Precio</th>
              <th className='border px-4 py-2 text-left'>Descargas</th>
              <th className='border px-4 py-2 text-left'>Recaudado</th>
              {!movil && <th className='border px-4 py-2 text-left'>Opciones</th>}
            </tr>
          </thead>
          <tbody>
            {juegos.map((j: any) => (
              <tr key={j.id} className='h-14 hover:bg-gray-700'>
                <td className='border px-4'>{j.titulo}</td>
                <td className='border px-4'>{j.slug}</td>
                <td className='border px-4'>${j.precio}</td>
                <td className='border px-4'>{j.descargas}</td>
                <td className='border px-4'>${j.recaudado}</td>

                {!movil && (
                  <td className='flex items-center justify-center border'>
                    <div className='flex h-14 w-full items-center justify-center gap-3'>
                      <Link
                        to={`/dev/new?juego=${j.slug}`}
                        title='Editar'
                        className='flex h-10 w-10 items-center justify-center rounded border border-gray-600 bg-orange-400/50 hover:bg-orange-400/80'>
                        <Edit size={16} color='white' />
                      </Link>
                      <button
                        onClick={() => handleBorrar(j.slug)}
                        title='Borrar'
                        disabled={borrando === j.slug}
                        className={`flex h-10 w-10 items-center justify-center rounded border border-gray-600 bg-red-400/50 hover:bg-red-400/90 ${
                          borrando === j.slug ? 'cursor-not-allowed opacity-50' : ''
                        }`}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Devs;
