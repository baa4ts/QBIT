import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../Actions/API';
import AutenticacionTitulo from '../../components/Autenticacion/AutenticacionTitulo';
import BotonDeEnvio from '../../components/Autenticacion/BotonDeEnvio';
import RedireccionAutenticacion from '../../components/Autenticacion/RedireccionAutenticacion';
import { useUsuario } from '../../store/usuarioStore';

export interface RegisterInfo {
  username: string | null;
  email: string | null;
  password: string | null;
}

const UserRegisterForm = () => {
  const [info, setInfo] = useState<RegisterInfo>({ username: null, email: null, password: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { guardarUsuario } = useUsuario();
  const navigate = useNavigate();

  const handleChange = (field: 'username' | 'email' | 'password', value: string) => {
    setInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await API.post("/usuarios/register", {
        nombre: info.username,
        email: info.email,
        password: info.password,
      });

      if (response.status === 200) {
        guardarUsuario(response.data);
        navigate('/usuario/otp');
      }
    } catch (error) {
      console.log("Error en registro");
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setInfo({ username: null, email: null, password: null });
    setIsSubmitting(false);
  };

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-black">
      <form className="flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-white p-4 shadow-xl" onSubmit={handleSubmit}>
        <AutenticacionTitulo titulo="Register" />

        {/* Username */}
        <div className="flex flex-col space-y-2">
          <label className="font-po text-sm font-medium text-gray-700">Username</label>
          <section className="flex items-center rounded-md border-2 border-gray-400 p-2">
            <User className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Tu nombre"
              value={info.username || ''}
              onChange={e => handleChange('username', e.target.value)}
              className="font-po w-full border-none bg-transparent outline-none"
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="font-po text-sm font-medium text-gray-700">Email</label>
          <section className="flex items-center rounded-md border-2 border-gray-400 p-2">
            <Mail className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="email"
              placeholder="tu@email.com"
              value={info.email || ''}
              onChange={e => handleChange('email', e.target.value)}
              className="font-po w-full border-none bg-transparent outline-none"
              disabled={isSubmitting}
              required
            />
          </section>
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
              disabled={isSubmitting}
              required
            />
          </section>
        </div>

        {/* Botones */}
        <div className="flex space-x-2 pt-4">
          <BotonDeEnvio
            canSubmit={!!info.username && !!info.email && !!info.password}
            isSubmitting={isSubmitting}
            texto="Registrar"
          />
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 rounded-md border border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
        </div>

        <RedireccionAutenticacion enlace="/usuario/login" mensaje_a="ya tienes cuenta" mensaje_b="Login" />
      </form>
    </div>
  );
};

export default UserRegisterForm;