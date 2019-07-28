import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor( private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }
  getPrimaryTransaction(username: string): Observable<any> {
    let url = 'http://localhost:8080/bank/api/admin/primaryTransaction/' + username;
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }
  getSavingsTransaction(username: string): Observable<any> {
    let url = 'http://localhost:8080/bank/api/admin/savingsTransaction/' + username;
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }
}
