import { API } from './API';

export const obtenerJuegos = async ({ parametros }: { parametros: string }) => {
  const res = await API.get(`/juegos${parametros}`);
  return res.data;
};
