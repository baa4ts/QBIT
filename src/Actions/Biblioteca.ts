import { API } from './API';

export const ObtenerBiblioteca = async (queryString = '') => {
  const res = await API.get(`/juegos/usuario${queryString}`);
  return res.data;
};
