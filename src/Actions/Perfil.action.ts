import type { UsuarioInterface } from '../interfaces/Usuario/Perfil.interface';
import { API } from './API';

export const obtenerPerfil = async (id: string): Promise<UsuarioInterface> => {
  const response = await API.get<UsuarioInterface>(`/usuarios/${id}`);
  return response.data;
};
