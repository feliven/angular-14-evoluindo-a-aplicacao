import { Routes } from '@angular/router';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';
import { ExcluirPensamento } from './components/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './components/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  {
    path: 'criarPensamento',
    component: CriarPensamento,
  },

  {
    path: 'listarPensamento',
    component: ListarPensamento,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamento,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamento,
  },
];
