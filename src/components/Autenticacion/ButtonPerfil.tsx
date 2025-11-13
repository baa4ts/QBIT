import type { LucideIcon } from 'lucide-react';

// Si usas React Router DOM v6, la importacion del Link podria ser asi:
// import { Link } from 'react-router-dom';

// Si usas React Router v5 o similar, la importacion es:
import React from 'react';
import { Link } from 'react-router';

// --- Interfaz de Propiedades ---
interface ButtonPerfilProps {
  link: string;
  texto: string;
  // La prop 'icono' es el componente mismo (ej: Home, BookOpen)
  Icono: LucideIcon;
  isPrimary?: boolean; // Para diferenciar el boton de "Editar Perfil"
}

const ButtonPerfil: React.FC<ButtonPerfilProps> = ({ link, texto, Icono, isPrimary = false }) => {
  // Clases base para el estilo del boton/enlace
  const baseClasses = 'flex items-center space-x-2 p-2 rounded-lg font-semibold transition duration-150 text-sm whitespace-nowrap w-full justify-center';

  // Estilos basados en si es primario o secundario (modo oscuro)
  const styleClasses = isPrimary
    ? 'bg-red-600 text-white hover:bg-red-700 shadow-md px-4 py-2' // Estilo Primario (Editar)
    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2'; // Estilo Secundario (Navegacion)

  return (
    // Usamos el componente Link de React Router para manejar la navegacion interna
    <Link
      to={link}
      // Aplicamos las clases al Link para que toda el area sea el boton
      className={`${baseClasses} ${styleClasses}`}>
      {/* 1. Icono */}
      <Icono className='h-5 w-5' />

      {/* 2. Texto */}
      <span className='hidden sm:inline'>{texto}</span>
      {/* En pantallas pequenas, mostramos solo la primera palabra o nada, dependiendo del diseno */}
      <span className='sm:hidden'>{texto.split(' ')[0]}</span>
    </Link>
  );
};

export default ButtonPerfil;
