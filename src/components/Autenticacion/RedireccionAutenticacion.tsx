import { Link } from 'react-router';

export interface InterfaceRedireccion {
  enlace: string;
  mensaje_a: string;
  mensaje_b: string;
}

const RedireccionAutenticacion = ({ enlace = '/usuario/login', mensaje_a, mensaje_b }: InterfaceRedireccion) => {
  return (
    <div className='flex w-full items-center justify-center gap-1 pt-4 text-sm'>
      <p className='text-gray-600'>¿ {mensaje_a} ?</p>
      <Link to={enlace} className='font-medium text-black transition-colors hover:underline'>
        {mensaje_b}
      </Link>
    </div>
  );
};

export default RedireccionAutenticacion;
