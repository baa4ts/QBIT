// actions/dev.ts
import { API } from './API';

// Interfaces
export interface RecursoDev {
  tipo: string;
  recurso: string;
}

export interface JuegoDev {
  id: number;
  titulo: string;
  slug: string;
  precio: number;
  contador?: number;
  descarga?: string;
  recursos: RecursoDev[];
  descargas: number;
  recaudado: number;
}

export interface TotalesDev {
  totalJuegos: number;
  totalDescargas: number;
  totalRecaudado: number;
}

export interface EstadisticasDevResponse {
  desarrollador: {
    id: string;
    nombre: string;
    email: string;
    permiso: number;
  };
  totales: TotalesDev;
  juegos: JuegoDev[];
}

// Acción
export const obtenerEstadisticasDev = async (): Promise<EstadisticasDevResponse> => {
  const response = await API.get<EstadisticasDevResponse>('/dev');
  return response.data;
};
