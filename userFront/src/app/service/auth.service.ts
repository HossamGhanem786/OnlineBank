import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TransferBetween} from '../models/transfer-between';

const CLIENT_SECRET = 'password';
const CLEINT_ID = 'OnlineBank';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/oauth/token';
  authChange = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {
    this.authChange.next(this.isAuth()) ;
    this.authChange.subscribe(res =>{
      console.log('s', res);
    });

  }
  isAuth() {
    if (this.getToken() != null) {
      return true;
    } else {
      return false;
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }

  newUser(user: User) {
    let url = 'http://localhost:8080/bank/api/user/saveuser';

    return this.http.post(url, (user), {responseType: 'text'});

  }

  saveChanges(newUser: User) {
    let url = 'http://localhost:8080/bank/api/user/saveuserChanges';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (newUser), httpOptions);
  }
  getUser(): Observable<any> {
    let url = 'http://localhost:8080/bank/api/user/profile';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    return this.http.get<any>(url, httpOptions );
  }
  login(username: string , password: string): Observable<any> {

    var basicheader = btoa(CLEINT_ID + ':' + CLIENT_SECRET);
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + basicheader);
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };
    var requestBody = 'username=' + username + '&password=' + password + '&grant_type=' + 'password';
    return this.http.post<any>(environment.BASE_URL + this.apiUrl, requestBody, httpOptions);

  }


  private handelError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it .Please try again later');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
}
