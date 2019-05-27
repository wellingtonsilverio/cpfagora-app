import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCPFOrCNPJ(email: string, cpfcnpj: string): Observable<any> {
    return this.http.get(`${API_URL}/free/${email}/${cpfcnpj}`);
  }

  saveForm(plan: number, form: any): Observable<any> {
    return this.http.post(`${API_URL}/buy/plan`, { plan, form });
  }
}
