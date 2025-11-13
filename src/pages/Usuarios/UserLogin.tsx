import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import AutenticacionTitulo from '../../components/Autenticacion/AutenticacionTitulo';
import BotonDeEnvio from '../../components/Autenticacion/BotonDeEnvio';
import { API } from '../../Actions/API';
import { useUsuario } from '../../store/usuarioStore';
import RedireccionAutenticacion from '../../components/Autenticacion/RedireccionAutenticacion';
import { useNavigate } from 'react-router';

export interface LoginInfo {
  email: string | null;
  password: string | null;
}

const UserLoginForm = () => {
  const [info, setInfo] = useState<LoginInfo>({ email: null, password: null });
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { guardarUsuario } = useUsuario();
  const navigate = useNavigate();

  const handleChange = (field: 'email' | 'password', value: string) => {
    setInfo(prev => ({ ...prev, [field]: value }));

    if (field === 'email') {
      const regex = /^[^\s@]+@(gmail\.com|hotmail\.com|protonmail\.com)$/i;
      if (!regex.test(value)) {
        setEmailError('Solo se permiten Gmail, Hotmail o ProtonMail');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await API.post("/usuarios/login", info);
      if (response.status === 200) {
        guardarUsuario(response.data);
        navigate('/usuario/otp');
      }
    } catch (error) {
      console.log("Error");
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setInfo({ email: null, password: null });
    navigate("/");
  };

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-black">
      <form
        className="flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-white p-4 shadow-xl"
        onSubmit={handleSubmit}
      >
        <AutenticacionTitulo titulo="Login" />

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="font-po text-sm font-medium text-gray-700">Email</label>
          <section className="flex items-center rounded-md border-2 border-gray-400 p-2">
            <Mail className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="tu@email.com"
              value={info.email || ''}
              onChange={e => handleChange('email', e.target.value)}
              className="font-po w-full border-none bg-transparent outline-none"
              minLength={9}
              disabled={isSubmitting}
              required
            />
          </section>
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-2">
          <label className="font-po text-sm font-medium text-gray-700">Contraseña</label>
          <section className="flex items-center rounded-md border-2 border-gray-400 p-2">
            <Lock className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="password"
              placeholder="********"
              value={info.password || ''}
              onChange={e => handleChange('password', e.target.value)}
              className="font-po w-full border-none bg-transparent outline-none"
              minLength={6}
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Botones */}
        <div className="flex space-x-2 pt-4">
          <BotonDeEnvio
            canSubmit={!!info.email && !!info.password && !emailError}
            isSubmitting={isSubmitting}
            texto="Enviar"
          />
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 rounded-md border border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
        </div>

        <RedireccionAutenticacion
          enlace="/usuario/register"
          mensaje_a="No tienes cuenta"
          mensaje_b="Register"
        />
      </form>
    </div>
  );
};

export default UserLoginForm;
