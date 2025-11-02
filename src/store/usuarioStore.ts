import { Store, useStore } from '@tanstack/react-store'

// Tipos
export interface Usuario {
  id: string
  permiso: number
  username: string
  email: string
  token: string
}

export interface UsuarioState {
  usuario: Usuario | null
}

// Store del usuario
export const usuarioStore = new Store<UsuarioState>({ usuario: null })

/**
 * Guarda un usuario en la store
 */
export function setUsuario(usuario: Usuario) {
  usuarioStore.setState({ usuario })
}

/**
 * Elimina el usuario de la store
 */
export function clearUsuario() {
  usuarioStore.setState({ usuario: null })
}

/**
 * Hook reactivo para leer el usuario actual
 */
export function useUsuario() {
  const state = useStore(usuarioStore)
  return state.usuario
}
