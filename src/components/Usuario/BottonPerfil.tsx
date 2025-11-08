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
      'flex items-center justify-center rounded-md px-3 py-2 text-xs sm:text-sm md:text-base font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto';
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
);

export default BottonPerfil;
