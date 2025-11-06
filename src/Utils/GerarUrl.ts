import { QueryString } from './QueryHelper';

interface GenararUrlProps {
  pagina?: number;
  ofertas?: boolean;
  categorias?: string[];
  buscar?: string;
}

/**
 * Genera solo la query string preservando los filtros actuales
 */
export const GenararUrl = ({ pagina, ofertas, categorias = [], buscar }: GenararUrlProps) => {
  const params: string[] = [];

  if (pagina) params.push(`page=${pagina}`);
  if (ofertas) params.push('ofertas=true');
  if (categorias.length > 0) params.push(QueryString.Armar('categoria', categorias).slice(1)); // quitar el & inicial
  if (buscar) params.push(`buscar=${encodeURIComponent(buscar)}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
};
