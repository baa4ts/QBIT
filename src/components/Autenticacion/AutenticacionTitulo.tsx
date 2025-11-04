export interface AutenticacionTituloProps {
  titulo: string;
}

const AutenticacionTitulo = ({ titulo = 'Sin definir' }: AutenticacionTituloProps) => {
  return (
    <div className='mb-4 text-center'>
      <h1 className='font-po text-3xl font-black'>{titulo}</h1>
    </div>
  );
};

export default AutenticacionTitulo;
