import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router, private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }
  getPrimaryAccount(username: string) {
    let url = 'http://localhost:8080/bank/api/admin/primaryAccount/' + username;
  var headers = new HttpHeaders();
  headers = headers.append('Authorization', 'Bearer ' + this.getToken());
  headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
  const httpOptions = {
    headers: headers,
    observe: 'response' as 'response'
  };
    return this.http.get(url, httpOptions );
  }
  getSavingsAccount(username: string) {
    let url = 'http://localhost:8080/bank/api/admin/savingsAccount/' + username;
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get(url, httpOptions );
}
}
