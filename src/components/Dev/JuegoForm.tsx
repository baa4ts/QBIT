// Tipado
export interface JuegoFormData {
  titulo: string;
  precio: number;
  descarga: string;
  descripcion: string;
}

interface JuegoFormProps {
  juegoData: JuegoFormData;
  setJuegoData: (data: JuegoFormData) => void;
}

const JuegoForm = ({ juegoData, setJuegoData }: JuegoFormProps) => {
  const handleChange = (key: keyof JuegoFormData, value: string | number) => {
    setJuegoData({ ...juegoData, [key]: value });
  };

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      {/* Titulo */}
      <div className='flex flex-col gap-1'>
        <label className='font-bold text-white'>Titulo</label>
        <input
          type='text'
          value={juegoData.titulo}
          onChange={e => handleChange('titulo', e.target.value)}
          className='rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
          placeholder='Nombre del juego'
        />
      </div>

      {/* Precio */}
      <div className='flex flex-col gap-1'>
        <label className='font-bold text-white'>Precio</label>
        <input
          type='number'
          value={juegoData.precio}
          onChange={e => handleChange('precio', parseFloat(e.target.value))}
          className='rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
          placeholder='0'
        />
      </div>

      {/* Enlace de descarga */}
      <div className='flex flex-col gap-1'>
        <label className='font-bold text-white'>Enlace de descarga</label>
        <input
          type='text'
          value={juegoData.descarga}
          onChange={e => handleChange('descarga', e.target.value)}
          className='rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
          placeholder='https://...'
        />
      </div>

      {/* Descripcion */}
      <div className='flex flex-col gap-1'>
        <label className='font-bold text-white'>Descripcion</label>
        <textarea
          value={juegoData.descripcion}
          onChange={e => handleChange('descripcion', e.target.value)}
          className='resize-none rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
          rows={4}
          placeholder='Descripcion del juego'
        />
      </div>
    </div>
  );
};

export default JuegoForm;
