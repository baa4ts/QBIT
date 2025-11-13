import { useState } from 'react';
import { Navigate } from 'react-router';
import { useUsuario } from '../../store/usuarioStore';
import BottonPerfil from './BottonPerfil';

const CompartirModal = () => {
  const [open, setOpen] = useState(false);
  const id = useUsuario().usuario?.id;

  const copiar = async () => {
    await navigator.clipboard.writeText(url);
    alert('URL copiada!');
  };

  if (!id) return <Navigate to={'/'} />;

  const url = `${window.location.origin}/compartido/${id}`;

  return (
    <>
      <BottonPerfil onClick={() => setOpen(true)}>Compartir</BottonPerfil>

      {open && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div className='min-w-[300px] rounded-lg bg-white p-6 text-center shadow-lg'>
            <h2 className='mb-4 text-xl font-bold'>Compartir</h2>

            <label className='mb-2 block text-gray-600'>URL del perfil</label>
            <input value={url} readOnly className='mb-4 w-full rounded border px-2 py-1 text-center' />

            <div className='flex justify-center gap-2'>
              <button onClick={copiar} className='rounded bg-green-600 px-4 py-2 text-white'>
                Copiar
              </button>
              <button onClick={() => setOpen(false)} className='rounded bg-gray-400 px-4 py-2 text-white'>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompartirModal;
