import * as React from 'react';

const PUNTO_DE_QUIEBRE_MOVIL = 768;

export function useEsMovil() {
  // FIX: Se especifica el tipo 'boolean | undefined' para aceptar el valor booleano en setEsMovil.
  const [esMovil, setEsMovil] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${PUNTO_DE_QUIEBRE_MOVIL - 1}px)`);

    const manejarCambio = () => {
      setEsMovil(window.innerWidth < PUNTO_DE_QUIEBRE_MOVIL);
    };

    mql.addEventListener('change', manejarCambio);
    manejarCambio();

    return () => mql.removeEventListener('change', manejarCambio);
  }, []);

  return !!esMovil;
}
