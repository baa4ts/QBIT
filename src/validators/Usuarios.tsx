import { z } from 'zod';

// Esquemas de validacion con Zod para formularios de autenticacion
// Documentacion de referencia: https://zod.dev/api#string-formats

// Formulario de login
export const loginScheme = z.object({
  email: z.string().email('Email invalido').min(9, 'El email debe tener minimo 9 digitos'),
  password: z.string().min(8, 'La contraseña debe tener minimo 8 digitos'),
});

// Formulario de registro (extiende del login)
export const registerScheme = loginScheme.extend({
  username: z.string().min(6, 'El nombre de usuario debe tener minimo 6 digitos'),
});
