import { useState } from 'react';
import { API } from '../../Actions/API';
import { useNavigate } from 'react-router';

const VerificacionSimple = () => {
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  const [verificando, setVerificando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleChange = (i: number, valor: string) => {
    if (!/^\d?$/.test(valor)) return;
    const nuevo = [...codigo];
    nuevo[i] = valor;
    setCodigo(nuevo);
  };

  const verificarOTP = async () => {
    if (!codigo.every(d => d !== '')) {
      setMensaje('Completa todos los digitos');
      return;
    }

    setVerificando(true);
    setMensaje('');

    try {

      const response = await API.post("/usuarios/otp", { otp: codigo.join("") })

      if (response.status === 200) {
        navigate({ pathname: "/usuario" })
      }
    } catch {
      setMensaje('Error al verificar el codigo');
    } finally {
      setVerificando(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white'>
      <div className='flex w-full max-w-md flex-col gap-6 rounded-xl bg-gray-800 p-6 shadow-lg'>
        <h2 className='text-center text-2xl font-bold'>Verificacion</h2>
        <p className='text-center text-sm text-gray-300'>Ingresa el codigo numerico de 6 digitos</p>

        <div className='flex justify-center gap-3'>
          {codigo.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={e => handleChange(i, e.target.value)}
              maxLength={1}
              inputMode='numeric'
              className='h-14 w-12 rounded-lg border border-white bg-gray-700 text-center text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          ))}
        </div>

        <button
          onClick={verificarOTP}
          disabled={verificando}
          className='mt-4 rounded-lg bg-green-600 py-2 font-semibold transition hover:bg-green-700'
        >
          {verificando ? <span className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></span> : 'Verificar'}
        </button>

        {mensaje && <p className='mt-2 text-center text-yellow-400'>{mensaje}</p>}
      </div>
    </div>
  );
};

export default VerificacionSimple;
