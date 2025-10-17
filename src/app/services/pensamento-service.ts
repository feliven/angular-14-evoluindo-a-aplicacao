import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePensamento } from '../interfaces/interface-pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly enderecoAPI = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getPensamentos(pagina: number): Observable<InterfacePensamento[]> {
    const itensPorPagina: number = 4;

    let params = new HttpParams().set('_page', pagina).set('_limit', itensPorPagina);

    return this.http.get<InterfacePensamento[]>(this.enderecoAPI, { params });
  }

  setPensamento(pensamento: InterfacePensamento) {
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

  deletePensamento(id: number): Observable<InterfacePensamento> {
    const url = `${this.enderecoAPI}/${id}`;
    return this.http.delete<InterfacePensamento>(url);
  }
}
