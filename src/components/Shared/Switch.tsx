interface SwitchProps {
  label?: string;
  activo?: boolean;
  setActivo: (valor: boolean) => void;
}

const Switch = ({ label = 'Ofertas', activo = false, setActivo }: SwitchProps) => {
  const toggle = () => setActivo(!activo);

  return (
    <div className='flex items-center gap-3 rounded-md bg-white/10 px-4 py-2 backdrop-blur-sm'>
      <span className='font-mono text-sm text-white select-none'>{label}</span>
      <button onClick={toggle} className={`relative h-6 w-12 rounded-full transition-colors duration-300 ${activo ? 'bg-emerald-500' : 'bg-gray-500/60'}`}>
        <span className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${activo ? 'translate-x-6' : ''}`} />
      </button>
    </div>
  );
};

export default Switch;
