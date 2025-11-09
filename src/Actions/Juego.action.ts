import type { JuegoInterface } from '../interfaces/Juego/Juego.interface';
import { API } from './API';

export const obtenerJuego = async (slug: string): Promise<JuegoInterface> => {
  const response = await API.get<JuegoInterface>(`/juegos/${slug}`);
  return response.data;
};
