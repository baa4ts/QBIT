import { useForm } from '@tanstack/react-form';
import { Lock, Mail } from 'lucide-react';
import AutenticacionTitulo from '../../components/Autenticacion/AutenticacionTitulo';
import BotonDeEnvio from '../../components/Autenticacion/BotonDeEnvio';
import RedireccionAutenticacion from '../../components/Autenticacion/RedireccionAutenticacion';
import { loginScheme } from '../../validators/Usuarios';

const UserLogin = () => {
  // TanStack Form
  // Referencia para crear algo basico
  // https://tanstack.com/form/latest/docs/framework/react/examples/simple
  //
  //
  //

  // Configuracion de formulario de TanStack Form
  const formulario = useForm({
    //
    // Valores por defecto
    //
    defaultValues: {
      email: '',
      password: '',
    },
    //
    // Validador de los datos
    //
    validators: {
      onSubmit: loginScheme,
    },
    //
    // Acciones al subir subir datos
    //
    onSubmit: async ({ value }) => {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 3500));
      console.log('Time');
    },
  });

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-black'>
      <form
        className='flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-white p-4 shadow-xl'
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          formulario.handleSubmit();
        }}>
        <AutenticacionTitulo titulo='Login' />

        {/* Entrada para el email */}
        <formulario.Field name='email'>
          {entrada => (
            <div className='flex flex-col space-y-2'>
              <label htmlFor={entrada.name} className='font-po text-sm font-medium text-gray-700'>
                Email
              </label>
              <section className='flex items-center rounded-md border-2 border-gray-400 p-2 transition-all duration-300 focus-within:border-black focus-within:ring-2 focus-within:ring-black/30 hover:border-black/60'>
                <Mail className='mr-2 h-5 w-5 text-gray-500' />
                <input
                  id={entrada.name}
                  type='email'
                  placeholder='tu@email.com'
                  value={entrada.state.value}
                  onChange={e => entrada.handleChange(e.target.value)}
                  className='font-po w-full border-none bg-transparent font-medium outline-none'
                  disabled={formulario.state.isSubmitting}
                  required
                />
              </section>
            </div>
          )}
        </formulario.Field>

        {/* Entrada para la password */}
        <formulario.Field name='password'>
          {entrada => (
            <div className='flex flex-col space-y-2'>
              <label htmlFor={entrada.name} className='font-po text-sm font-medium text-gray-700'>
                Contraseña
              </label>
              <section className='flex items-center rounded-md border-2 border-gray-400 p-2 transition-all duration-300 focus-within:border-black focus-within:ring-2 focus-within:ring-black/30 hover:border-black/60'>
                <Lock className='mr-2 h-5 w-5 text-gray-500' />
                <input
                  id={entrada.name}
                  type='password'
                  placeholder='********'
                  value={entrada.state.value}
                  onChange={e => entrada.handleChange(e.target.value)}
                  className='font-po w-full border-none bg-transparent font-medium outline-none'
                  disabled={formulario.state.isSubmitting}
                  required
                />
              </section>
            </div>
          )}
        </formulario.Field>

        {/* Botton para el evento del formulario */}
        <div className='pt-4'>
          <formulario.Subscribe
            selector={estado => [estado.canSubmit, estado.isSubmitting]}
            children={([canSubmit, isSubmitting]) => <BotonDeEnvio canSubmit={canSubmit} isSubmitting={isSubmitting} texto='Iniciar Sesion' textoEnviando='Iniciando...' />}
          />
        </div>
        <RedireccionAutenticacion enlace='/usuario/register' mensaje_a='No tienes cuenta' mensaje_b='Register' />
      </form>
    </div>
  );
};

export default UserLogin;
