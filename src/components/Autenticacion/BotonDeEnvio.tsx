import { Loader2 } from 'lucide-react';

interface BotonDeEnvioProps {
  canSubmit: boolean; // Corresponde a 'puedeEnviar'
  isSubmitting: boolean; // Corresponde a 'estaEnviando'
  texto: string;
  textoEnviando?: string; // Hacemos esta opcional ya que no se usa con el spinner solo
}

const BotonDeEnvio = ({ canSubmit, isSubmitting, texto }: BotonDeEnvioProps) => {
  return (
    <button
      disabled={!canSubmit || isSubmitting}
      type='submit'
      className='flex w-full items-center justify-center rounded-md bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-black/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'>
      {isSubmitting ? (
        // Muestra solo el spinner si se esta enviando
        // El tamano h-6 w-6 ocupa el espacio vertical del texto y el padding
        <Loader2 className='h-6 w-6 animate-spin' />
      ) : (
        // Muestra el texto normal cuando no hay envio
        texto
      )}
    </button>
  );
};

export default BotonDeEnvio;
