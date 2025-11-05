import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const ContenedorAuto = ({ children }: Props) => {
  return <article className='w-full bg-[#191817] sm:w-3/5'>{children}</article>;
};

export default ContenedorAuto;
