interface QueryData {
  key: string;
  values: string[];
}

export class QueryString {
  // arma un query string tipo "&clave=valor1&clave=valor2"
  static Armar(key: string, values: string[] | string): string {
    if (!key) return '';
    const lista = Array.isArray(values) ? values : [values];
    if (lista.length === 0) return '';
    return lista.map(v => `&${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('');
  }

  // desarma un query string tipo "&clave=valor1&clave=valor2"
  static Desarmar(cadena: string): QueryData {
    const texto = cadena.startsWith('&') ? cadena.slice(1) : cadena;
    if (!texto) return { key: '', values: [] };

    const partes = texto.split('&').map(p => p.split('=').map(decodeURIComponent));
    const key = partes[0][0];
    const values = partes.filter(p => p[0] === key).map(p => p[1]);

    return { key, values };
  }
}
