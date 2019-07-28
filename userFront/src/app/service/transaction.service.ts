import { Injectable } from '@angular/core';
import {Deposit} from '../models/deposit';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TransferBetween} from '../models/transfer-between';
import {SomeOneElse} from '../models/some-one-else';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  deposit(desposit: Deposit) {
    let url = 'http://localhost:8080/bank/api/account/deposit';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (desposit), httpOptions);
  }
  withdraw(withdraw: Deposit) {
    let url = 'http://localhost:8080/bank/api/account/withdraw';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, JSON.stringify(withdraw), httpOptions);
  }
  transferBetween(transfer: TransferBetween) {
    let url = 'http://localhost:8080/bank/api/account/transferBetween';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (transfer), httpOptions);
  }

  toSomeoneElse(someOne: SomeOneElse) {
    let url = 'http://localhost:8080/bank/api/account/transfer/toSomeoneElse';
    var headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'response'
    };

    return this.http.post(url, (someOne), httpOptions);
  }
}
