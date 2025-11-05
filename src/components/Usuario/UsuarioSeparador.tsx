interface Props {
  titulo: string;
}

const UsuarioSeparador = ({ titulo = '' }: Props) => {
  return (
    <section className='m-5 flex h-9 w-auto flex-row items-center bg-[#0A0909] font-mono text-white md:text-xl'>
      <p className='ml-2'>{titulo}</p>
    </section>
  );
};

export default UsuarioSeparador;
