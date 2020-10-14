import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Senador, DespesaSenador, Despesa } from './senador.model';
@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getSenadores(): Observable<Senador[]> {
    const listaURL = this.baseUrl + 'senadores';
    return this.http.get<Senador[]>(listaURL);
  }
  getDespesa(id: string): Observable<DespesaSenador> {
    const despesaURL = this.baseUrl + 'despesasSenadores/' + id;
    return this.http.get<DespesaSenador>(despesaURL);
  }
}
