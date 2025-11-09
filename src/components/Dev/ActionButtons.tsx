import { useNavigate } from 'react-router';

interface ActionButtonsProps {
  onPublicar: () => void;
}

const ActionButtons = ({ onPublicar }: ActionButtonsProps) => {
  const navigate = useNavigate();

  return (
    <div className='mt-4 flex w-full gap-2'>
      <button onClick={() => navigate('/dev')} className='w-1/2 rounded bg-gray-700 py-3 font-bold text-white hover:bg-gray-600'>
        Cancelar
      </button>
      <button onClick={onPublicar} className='w-1/2 rounded bg-green-600 py-3 font-bold text-white hover:bg-green-500'>
        Publicar
      </button>
    </div>
  );
};

export default ActionButtons;
