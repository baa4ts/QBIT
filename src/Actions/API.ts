import axios from 'axios';
import { useUsuario } from '../store/usuarioStore';

export const API = axios.create({
  baseURL: 'http://localhost:80/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptor de request: agrega token si existe
API.interceptors.request.use(config => {
  const usuario = useUsuario.getState().usuario;
  if (usuario?.token && config.headers) {
    config.headers['Authorization'] = `Bearer ${usuario.token}`;
  }
  return config;
});

// interceptor: si llega una respuesta de que no esta autenticado o con rol cerrar session
API.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;
      if ([401, 402, 403, 404].includes(status)) {
        const { eliminarUsuario } = useUsuario.getState();
        eliminarUsuario();
        window.location.href = '/usuario/login';
      }
    }
    return Promise.reject(error);
  },
);
