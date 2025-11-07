import React from 'react';
import Separador from './Separador';

export interface Props {
  className?: string;
  children: React.ReactNode;
}

const ContenedorAuto = ({ children, className }: Props) => {
  return (
    <>
      <Separador />
      <article className={`w-full rounded-md bg-[#191817] sm:w-5/8 ${className}`}>{children}</article>;
    </>
  );
};

export default ContenedorAuto;
