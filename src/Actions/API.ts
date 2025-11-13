import axios from 'axios';
import { useUsuario } from '../store/usuarioStore';

export const API = axios.create({
  baseURL: 'http://localhost:80/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// interceptor de request: agrega token si existe
API.interceptors.request.use(config => {
  const usuario = useUsuario.getState().usuario;
  if (usuario?.token && config.headers) {
    config.headers['Authorization'] = `Bearer ${usuario.token}`;
  }

  return config;
});

// interceptor de response: actualizar JWT si viene renovado + log de headers
API.interceptors.response.use(
  response => {
    const nuevoToken = response.headers['x-renewed-jwt'];
    if (nuevoToken) {
      useUsuario.getState().setUsuarioToken(nuevoToken);
    }

    return response;
  },
  error => {
    if (error.response) {
      const status = error.response.status;
      if ([401, 402, 403, 404].includes(status)) {
        useUsuario.getState().eliminarUsuario();
        window.location.href = '/usuario/login';
      }

      if (status === 419) {
        window.location.href = '/usuario/verificar';
      }
    }
    return Promise.reject(error);
  },
);