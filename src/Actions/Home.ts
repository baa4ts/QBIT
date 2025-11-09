import { API } from './API';

export interface JuegoHome {
  id: number;
  titulo: string;
  banner: string;
  precio: number;
  slug: string;
}

export interface HeroHome {
  titulo: string;
  descripcion: string;
  slug: string;
  video: string;
}

export interface HomeResponse {
  hero: HeroHome;
  data: {
    ultimos: JuegoHome[];
    populares: JuegoHome[];
    recomendados: JuegoHome[];
  };
}

export interface HomeData {
  hero: HeroHome;
  ultimos: JuegoHome[];
  populares: JuegoHome[];
  recomendados: JuegoHome[];
}

export const obtenerHome = async (): Promise<HomeData> => {
  const response = await API.get<HomeResponse>('/juegos/home');
  const { hero, data } = response.data;

  return {
    hero,
    ultimos: data.ultimos,
    populares: data.populares,
    recomendados: data.recomendados,
  };
};
