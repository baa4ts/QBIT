import { memo } from 'react';
import { Link } from 'react-router';

interface BotonProps {
  children: string;
  to?: string;
  onClick?: () => void;
  color?: 'primary' | 'danger';
}

const BottonPerfil = memo(
  ({ children, to, onClick, color = 'primary' }: BotonProps) => {
    const baseClass =
      'flex h-9 min-w-[60px] max-w-[140px] flex-1 items-center justify-center rounded-md text-xs sm:text-sm md:text-base font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95';
    const colorClass = color === 'primary' ? 'bg-[#0A0909]' : 'bg-red-600';
    const claseFinal = `${baseClass} ${colorClass}`;

    if (to)
      return (
        <Link to={to} className={claseFinal}>
          {children}
        </Link>
      );
    return (
      <button onClick={onClick} className={claseFinal}>
        {children}
      </button>
    );
  },
  () => true,
); // memo siempre devuelve el mismo string, evita re-render

export default BottonPerfil;
