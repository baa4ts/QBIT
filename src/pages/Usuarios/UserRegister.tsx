import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../Actions/API';
import AutenticacionTitulo from '../../components/Autenticacion/AutenticacionTitulo';
import BotonDeEnvio from '../../components/Autenticacion/BotonDeEnvio';
import RedireccionAutenticacion from '../../components/Autenticacion/RedireccionAutenticacion';
import { useUsuario, type UsuarioInter } from '../../store/usuarioStore';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const { guardarUsuario } = useUsuario();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorServer('');

    try {
      const response = await API.post<UsuarioInter>('/usuarios/register', {
        nombre: username,
        email,
        password,
      });

      guardarUsuario(response.data);
      navigate('/otp');
    } catch {
      setErrorServer('Error en el registro');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-black'>
      <form className='flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-white p-4 shadow-xl' onSubmit={handleRegister}>
        <AutenticacionTitulo titulo='Register' />

        {/* Username */}
        <div className='flex flex-col space-y-2'>
          <label className='font-po text-sm font-medium text-gray-700'>Username</label>
          <section className='flex items-center rounded-md border-2 border-gray-400 p-2'>
            <User className='mr-2 h-5 w-5 text-gray-500' />
            <input
              type='text'
              placeholder='Tu nombre'
              value={username}
              onChange={e => setUsername(e.target.value)}
              className='font-po w-full border-none bg-transparent outline-none'
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Email */}
        <div className='flex flex-col space-y-2'>
          <label className='font-po text-sm font-medium text-gray-700'>Email</label>
          <section className='flex items-center rounded-md border-2 border-gray-400 p-2'>
            <Mail className='mr-2 h-5 w-5 text-gray-500' />
            <input
              type='email'
              placeholder='tu@email.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='font-po w-full border-none bg-transparent outline-none'
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Password */}
        <div className='flex flex-col space-y-2'>
          <label className='font-po text-sm font-medium text-gray-700'>Contrasena</label>
          <section className='flex items-center rounded-md border-2 border-gray-400 p-2'>
            <Lock className='mr-2 h-5 w-5 text-gray-500' />
            <input
              type='password'
              placeholder='********'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='font-po w-full border-none bg-transparent outline-none'
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Boton */}
        <div className='pt-4'>
          <BotonDeEnvio canSubmit={!!username && !!email && !!password} isSubmitting={isSubmitting} texto='Registrar' textoEnviando='Registrando...' />
        </div>

        <RedireccionAutenticacion enlace='/usuario/login' mensaje_a='ya tienes cuenta' mensaje_b='Login' />

        {/* Error */}
        {errorServer && <div className='mt-2 text-center text-sm font-medium text-red-500'>{errorServer}</div>}
      </form>
    </div>
  );
};

export default UserRegister;
