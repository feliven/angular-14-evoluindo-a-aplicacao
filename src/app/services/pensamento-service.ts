import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePensamento } from '../interfaces/interface-pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly enderecoAPI = 'http://localhost:3000/pensamentos';
  private readonly itensPorPagina = 4;

  constructor(private http: HttpClient) {}

  private criarParamsBasicos(pagina: number): HttpParams {
    return new HttpParams().set('_page', pagina).set('_limit', this.itensPorPagina);
  }

  getPensamentos(
    pagina: number,
    filtro: string,
    favorito?: boolean
  ): Observable<InterfacePensamento[]> {
    let params = this.criarParamsBasicos(pagina);

    if (favorito) {
      params = params.set('favorito', true);
    }

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.http.get<InterfacePensamento[]>(this.enderecoAPI, { params });
  }

  setPensamento(pensamento: InterfacePensamento): Observable<InterfacePensamento> {
    return this.http.post<InterfacePensamento>(this.enderecoAPI, pensamento);
  }

  buscarPorId(id: number): Observable<InterfacePensamento> {
    const url = `${this.enderecoAPI}/${id}`;
    return this.http.get<InterfacePensamento>(url);
  }

  editPensamento(pensamento: InterfacePensamento): Observable<InterfacePensamento> {
    const url = `${this.enderecoAPI}/${pensamento.id}`;
    return this.http.put<InterfacePensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: InterfacePensamento): Observable<InterfacePensamento> {
    pensamento.favorito = !pensamento.favorito;

    // const url = `${this.enderecoAPI}/${pensamento.id}`;
    // return this.http.put<InterfacePensamento>(url, pensamento);

    return this.editPensamento(pensamento);
  }

  deletePensamento(id: number): Observable<InterfacePensamento> {
    const url = `${this.enderecoAPI}/${id}`;
    return this.http.delete<InterfacePensamento>(url);
  }
}
