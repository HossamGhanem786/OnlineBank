import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router, private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }
  getPrimaryAccount() {
    let url = 'http://localhost:8080/bank/api/account/primaryAccount';
  var headers = new HttpHeaders();
  headers = headers.append('Authorization', 'Bearer ' + this.getToken());
  headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
  const httpOptions = {
    headers: headers,
    observe: 'response' as 'response'
  };
    return this.http.get(url, httpOptions );
  }

  getPrimaryAccountNumber() {
    let url = 'http://localhost:8080/bank/api/account/primaryAccountNumber';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get(url, httpOptions );
  }

  getSavingsAccountNumber() {
    let url = 'http://localhost:8080/bank/api/account/savingsAccountNumber';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get(url, httpOptions );
  }
  getSavingsAccount() {
    let url = 'http://localhost:8080/bank/api/account/savingsAccount';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get(url, httpOptions );
}
  getPrimaryTransaction(): Observable<any> {
    let url = 'http://localhost:8080/bank/api/account/primaryTransactionList';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }
  getSavingsTransaction(): Observable<any> {
    let url = 'http://localhost:8080/bank/api/account/savingsTransactionList';
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
