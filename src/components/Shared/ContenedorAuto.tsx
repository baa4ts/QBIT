import React from 'react';

export interface Props {
  className?: string;
  children: React.ReactNode;
}

const ContenedorAuto = ({ children, className }: Props) => {
  return <article className={`w-full bg-[#191817] sm:w-3/5 ${className}`}>{children}</article>;
};

export default ContenedorAuto;
