import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import AntiUsuarios from './components/Router/AntiUsuarios';
import Privada from './components/Router/Privada';
import Layout from './components/Shared/Layout';
import SuspenseLoading from './components/Shared/SuspenseLoading';
import Home from './pages/Home';
import Biblioteca from './pages/Juegos/Biblioteca';
import Perfil from './pages/Usuarios/Perfil';

// Paginas que se cargaran lento
const UserLogin = lazy(() => import('./pages/Usuarios/UserLogin'));
const UserRegister = lazy(() => import('./pages/Usuarios/UserRegister'));

const AppRouter = () => {
  return (
    // Notas para usar el memo de react
    // https://react.dev/learn/react-compiler/introduction
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Ruta principal de la pagina */}
          <Route index element={<Home />} />

          <Route path='usuario'>
            {/* Por defecto el perfil del usuario si ya esta logeado (Ruta privada) */}
            <Route element={<Privada permiso={1} />}>
              <Route index element={<Perfil />} />
            </Route>

            {/* Rutas para la autenticacion del usuario */}
            {/* login y register se encuentran con carga suspendida */}
            {/* Referencia: https://react.dev/reference/react/Suspense */}
            <Route element={<AntiUsuarios re_auth='/usuario' />}>
              <Route
                path='login'
                element={
                  <Suspense fallback={<SuspenseLoading />}>
                    <UserLogin />
                  </Suspense>
                }
              />

              <Route
                path='register'
                element={
                  <Suspense fallback={<SuspenseLoading />}>
                    <UserRegister />
                  </Suspense>
                }
              />
            </Route>

            {/* ---- */}
          </Route>

          {/* Rutas para juegos */}
          <Route path='juegos'>
            {/* Ruta privada para biblioteca */}
            <Route element={<Privada permiso={1} />}>
              <Route path='biblioteca' element={<Biblioteca />} />
            </Route>
          </Route>
          {/* ---- */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
