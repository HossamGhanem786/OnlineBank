import { Injectable } from '@angular/core';
import {Recipient} from '../models/recipient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  saveRecipient(newRecipient: Recipient) {
    let url = 'http://localhost:8080/bank/api/recipient/save';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (newRecipient), httpOptions);
  }
  getRecipientList(): Observable<any> {
    let url = 'http://localhost:8080/bank/api/recipient/recipientList';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }
  deleteRecipient(recipientName: string) {
    let url = 'http://localhost:8080/bank/api/recipient/delete';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, recipientName, httpOptions);
  }
  editRecipient(recipientName: string): Observable<any> {
    let url = 'http://localhost:8080/bank/api/recipient/edit/' + recipientName;
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
