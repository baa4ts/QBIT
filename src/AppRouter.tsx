import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AntiUsuarios from './components/Router/AntiUsuarios';
import Privada from './components/Router/Privada';
import Layout from './components/Shared/Layout';
import SuspenseLoading from './components/Shared/SuspenseLoading';

// index rapido
import Home from './pages/Home';

// lazy para todo lo demas
const UserLogin = lazy(() => import('./pages/Usuarios/UserLogin'));
const UserRegister = lazy(() => import('./pages/Usuarios/UserRegister'));
const Perfil = lazy(() => import('./pages/Usuarios/Perfil'));
const Carrito = lazy(() => import('./pages/Usuarios/Carrito'));
const Biblioteca = lazy(() => import('./pages/Juegos/Biblioteca'));
const Juegos = lazy(() => import('./pages/Juegos/Juegos'));
const Juego = lazy(() => import('./pages/Juegos/Juego'));
const Publicar = lazy(() => import('./pages/Devs/Publicar'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* ╔══════════════════════════════╗ */}
          {/* ║         RUTA PRINCIPAL       ║ */}
          {/* ╚══════════════════════════════╝ */}
          <Route index element={<Home />} />

          {/* ╔══════════════════════════════╗ */}
          {/* ║        RUTAS USUARIO         ║ */}
          {/* ╚══════════════════════════════╝ */}
          <Route path='usuario'>

            {/* Perfil y carrito: solo usuarios logueados */}
            <Route element={<Privada permiso={1} />}>
              {/* ------------------------------------- */}
              <Route index element={
                <Suspense fallback={<SuspenseLoading />}>
                  <Perfil />
                </Suspense>
              } />
              {/* ------------------------------------- */}
              <Route path='carrito' element={
                <Suspense fallback={<SuspenseLoading />}>
                  <Carrito />
                </Suspense>
              } />
              {/* ------------------------------------- */}
            </Route>

            {/* Login y register: bloquea usuarios autenticados */}
            <Route element={<AntiUsuarios re_auth='/usuario' />}>
              {/* ------------------------------------- */}
              <Route path='login' element={
                <Suspense fallback={<SuspenseLoading />}>
                  <UserLogin />
                </Suspense>
              } />
              {/* ------------------------------------- */}
              <Route path='register' element={
                <Suspense fallback={<SuspenseLoading />}>
                  <UserRegister />
                </Suspense>
              } />
              {/* ------------------------------------- */}
            </Route>

          </Route>

          {/* ╔══════════════════════════════╗ */}
          {/* ║         RUTAS JUEGOS         ║ */}
          {/* ╚══════════════════════════════╝ */}
          <Route path='juegos'>
            {/* ------------------------------------- */}
            <Route index element={
              <Suspense fallback={<SuspenseLoading />}>
                <Juegos />
              </Suspense>
            } />
            {/* ------------------------------------- */}
            <Route path=':slug' element={
              <Suspense fallback={<SuspenseLoading />}>
                <Juego />
              </Suspense>
            } />
            {/* ------------------------------------- */}
            <Route element={<Privada permiso={1} />}>
              <Route path='biblioteca' element={
                <Suspense fallback={<SuspenseLoading />}>
                  <Biblioteca />
                </Suspense>
              } />
            </Route>
            {/* ------------------------------------- */}
          </Route>

          {/* ╔══════════════════════════════╗ */}
          {/* ║       RUTAS DEVELOPERS       ║ */}
          {/* ╚══════════════════════════════╝ */}
          <Route path='dev' element={<Privada permiso={2} re_perm='/usuario' />}>
            {/* ------------------------------------- */}
            <Route index element={
              <Suspense fallback={<SuspenseLoading />}>
                <Publicar />
              </Suspense>
            } />
            {/* ------------------------------------- */}
            <Route path='new' element={
              <Suspense fallback={<SuspenseLoading />}>
                <h1>Nuevo</h1>
              </Suspense>
            } />
            {/* ------------------------------------- */}
          </Route>

          {/* ╔══════════════════════════════╗ */}
          {/* ║           CATCH-ALL          ║ */}
          {/* ╚══════════════════════════════╝ */}
          <Route path='*' element={<Navigate to='/' />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;