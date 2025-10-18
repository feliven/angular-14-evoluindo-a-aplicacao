export interface InterfacePensamento {
  id?: number; // permite que json-server crie id automaticamente
  conteudo: string;
  autoria: string;
  modelo: string;
  favorito: boolean;
}
