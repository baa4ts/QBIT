import { useState } from 'react';

export interface RecursoInterface {
  tipo: 'imagen' | 'video';
  recurso: string;
}

interface RecursoManagerProps {
  recursos: RecursoInterface[];
  setRecursos: React.Dispatch<React.SetStateAction<RecursoInterface[]>>;
}

const RecursoManager = ({ recursos, setRecursos }: RecursoManagerProps) => {
  const [tipo, setTipo] = useState<'imagen' | 'video' | null>(null);
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const validarLink = (link: string, tipo: 'imagen' | 'video') => {
    try {
      new URL(link); // valida formato URL
    } catch {
      return false;
    }

    if (tipo === 'imagen') {
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(link);
    }
    if (tipo === 'video') {
      return /\.(mp4|webm|ogg)$/i.test(link);
    }

    return false;
  };

  const agregarRecurso = () => {
    if (!link.trim() || !tipo) return;

    if (!validarLink(link.trim(), tipo)) {
      setError(tipo === 'imagen' ? 'El link debe ser una imagen valida (jpg, png, gif, webp)' : 'El link debe ser un video valido (mp4, webm, ogg)');
      return;
    }

    setRecursos([...recursos, { tipo, recurso: link.trim() }]);
    setLink('');
    setError('');
  };

  const eliminarRecurso = (index: number) => {
    setRecursos(recursos.filter((_, i) => i !== index));
  };

  return (
    <div className='flex w-full flex-col gap-2 p-2'>
      {/* Lista de recursos */}
      <label className='font-bold text-white'>Recursos</label>
      <div className='h-64 overflow-auto rounded bg-gray-800 p-4 text-white shadow'>
        {recursos.length === 0 ? (
          <p className='text-center text-gray-400'>No hay recursos</p>
        ) : (
          <ul className='flex flex-col gap-2'>
            {recursos.map((r, i) => (
              <li key={i} className='flex items-center justify-between border-b border-gray-700 pb-1'>
                <span className='font-semibold capitalize'>{r.tipo}</span>
                <div className='flex items-center gap-2'>
                  {r.tipo === 'video' ? (
                    <video src={r.recurso} controls className='max-h-20 max-w-xs rounded' />
                  ) : (
                    <img src={r.recurso} alt={`Recurso ${i}`} className='max-h-20 max-w-xs rounded object-cover' />
                  )}
                  <a href={r.recurso} target='_blank' rel='noopener noreferrer' className='text-blue-400 underline'>
                    Abrir
                  </a>
                  <button onClick={() => eliminarRecurso(i)} className='ml-2 rounded bg-red-600 px-2 py-1 text-sm text-white hover:bg-red-500'>
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Controlador */}
      <div className='flex flex-col gap-2'>
        {/* Selector de tipo */}
        <div className='flex gap-2'>
          {(['video', 'imagen'] as const).map(t => (
            <button key={t} onClick={() => setTipo(t)} className={`rounded px-4 py-2 font-bold ${tipo === t ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Input y agregar */}
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder={tipo ? `Pega el link del ${tipo}` : 'Selecciona tipo primero'}
            value={link}
            onChange={e => setLink(e.target.value)}
            className='flex-1 rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
          />
          <button
            onClick={agregarRecurso}
            disabled={!tipo}
            className={`rounded px-4 py-2 font-bold text-white ${tipo ? 'bg-green-600 hover:bg-green-500' : 'cursor-not-allowed bg-gray-600'}`}>
            Agregar
          </button>
        </div>

        {error && <p className='text-sm text-red-500'>{error}</p>}
      </div>
    </div>
  );
};

export default RecursoManager;
