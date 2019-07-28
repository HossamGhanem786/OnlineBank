import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }


  getToken() {
    return localStorage.getItem('token');
  }
  getAppointmentList() {
    let url = 'http://localhost:8080/bank/api/admin/appointments';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }

  confirmAppointment(id: number) {
    let url = 'http://localhost:8080/bank/api/admin/appointment/' + id;
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
