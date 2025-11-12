import { useState } from 'react';

const Verificacion = () => {
  const [email] = useState('usuario@gmail.com'); 
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  const [solicitando, setSolicitando] = useState(false);
  const [verificando, setVerificando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [fallos, setFallos] = useState(0);
  const maxFallos = 3;

  const handleChange = (i: number, valor: string) => {
    if (!/^\d?$/.test(valor)) return;
    const nuevo = [...codigo];
    nuevo[i] = valor;
    setCodigo(nuevo);
  };

  const resetSession = () => {
    setCodigo(Array(6).fill(''));
    setMensaje('Sesion reiniciada por exceso de intentos fallidos');
    setFallos(0);
  };

  const solicitarOTP = async () => {
    setSolicitando(true);
    setMensaje('');
    try {
      await fetch('/api/otp/solicitar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setMensaje('Codigo enviado a tu email');
    } catch {
      setMensaje('Error al enviar el codigo');
    } finally {
      setSolicitando(false);
    }
  };

  const verificarOTP = async () => {
    if (!codigo.every(d => d !== '')) {
      setMensaje('Completa todos los digitos');
      return;
    }
    if (fallos >= maxFallos) {
      resetSession();
      return;
    }

    setVerificando(true);
    setMensaje('');
    try {
      const res = await fetch('/api/otp/verificar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, codigo: codigo.join('') }),
      });
      const data = await res.json();
      if (data.ok) {
        setMensaje('Codigo correcto!');
        setFallos(0);
      } else {
        setFallos(f => f + 1);
        if (fallos + 1 >= maxFallos) {
          resetSession();
        } else {
          setMensaje(`Codigo incorrecto. Intentos restantes: ${maxFallos - (fallos + 1)}`);
        }
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
        <p className='text-center text-sm text-gray-300'>Para usar nuestros servicios primero debes verificar tu correo</p>

        <input value={email} readOnly className='w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-center text-white' />

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

        <div className='mt-4 flex gap-4'>
          <button onClick={solicitarOTP} disabled={solicitando} className='flex flex-1 items-center justify-center rounded-lg bg-blue-600 py-2 font-semibold transition hover:bg-blue-700'>
            {solicitando ? <span className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></span> : 'Solicitar'}
          </button>

          <button onClick={verificarOTP} disabled={verificando} className='flex flex-1 items-center justify-center rounded-lg bg-green-600 py-2 font-semibold transition hover:bg-green-700'>
            {verificando ? <span className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></span> : 'Verificar'}
          </button>
        </div>

        {mensaje && <p className='mt-2 text-center text-yellow-400'>{mensaje}</p>}
      </div>
    </div>
  );
};

export default Verificacion;
