import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    var token = this.authService.getToken();
    var decoded = jwt_decode(token);
    console.log(decoded);
    var givenName = decoded['authorities'];
    console.log('givenName ' + givenName);
  }

}
