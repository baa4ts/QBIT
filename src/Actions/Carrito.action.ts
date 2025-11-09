import { API } from './API';

export const comprarJuegos = async (juegos: number[]): Promise<boolean> => {
  try {
    const res = await API.post('/juegos/buy', { juegos: juegos || [] });
    return res.status === 200;
  } catch (err) {
    return false;
  }
};
