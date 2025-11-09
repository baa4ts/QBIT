export interface JuegoActorInterface {
  id: string;
  nombre: string;
}

export interface JuegoRecursoInterface {
  tipo: 'video' | 'imagen';
  recurso: string;
}

export interface JuegoOpcionesInterface {
  usuario: boolean;
  descarga?: string;
}

export interface JuegoInterface {
  id: number;
  titulo: string;
  slug: string;
  precio: number;
  autor: JuegoActorInterface;
  categorias: string[];
  descripcion: string;
  recursos: JuegoRecursoInterface[];
  banner: string;
  opciones: JuegoOpcionesInterface;
}
