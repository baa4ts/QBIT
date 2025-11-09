import axios from 'axios';
import { useUsuario } from '../store/usuarioStore';

export const API = axios.create({
  baseURL: 'http://localhost:80/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptor de request
API.interceptors.request.use(config => {
  const usuario = useUsuario.getState().usuario;
  if (usuario?.token && config.headers) {
    config.headers.set('Authorization', `Bearer ${usuario.token}`);
  }
  return config;
});
