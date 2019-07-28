import { Injectable } from '@angular/core';
import {Appointment} from '../models/appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }


  getToken() {
    return localStorage.getItem('token');
  }

  saveAppointment(appointment: Appointment) {
    let url = 'http://localhost:8080/bank/api/appointment/save';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (appointment), httpOptions);
  }
}
