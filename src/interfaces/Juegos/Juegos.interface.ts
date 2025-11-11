export interface JuegosInterface {
  titulo: string;
  banner: string;
  categorias: Array<string>;
  precio: number;
  slug: string;
}

export interface MetaInterface {
  page: number;
  maxPage: number;
}
export interface JuegosPeticionInterface {
  meta: MetaInterface;
  juegos: Array<JuegosInterface>;
}
