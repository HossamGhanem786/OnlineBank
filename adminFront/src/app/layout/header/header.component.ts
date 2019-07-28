import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
   console.log('this.authService.isAuth() ' + this.authService.isAuth( ));
  }

  onLogout() {
    this.authService.logout();
  }
}
