import { useSearchParams } from 'react-router';

const Juegos = () => {
  const [searchParams] = useSearchParams();

  const ofertas = (searchParams.get('ofertas') || '').trim().toLowerCase() === 'true';
  const pagina = Number(searchParams.get('page')) || 1;

  return <div>{ofertas ? <h1>SI, pagina {pagina}</h1> : <h1>No hay ofertas</h1>}</div>;
};

export default Juegos;
