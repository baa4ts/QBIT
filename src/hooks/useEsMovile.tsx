import * as React from 'react';

export interface Props {
  width: number;
}

export function useEsMovil({ width }: Props) {
  const [esMovil, setEsMovil] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${width - 1}px)`);

    const manejarCambio = () => {
      setEsMovil(window.innerWidth < width);
    };

    mql.addEventListener('change', manejarCambio);
    manejarCambio();

    return () => mql.removeEventListener('change', manejarCambio);
  }, []);

  return !!esMovil;
}
