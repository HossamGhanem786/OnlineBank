import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public newUser: User = new User();
  isloading = false;
  errorMsg = '';
  show: boolean;
  passwordd: boolean;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    this.show = false;
    this.passwordd = false;
  }

  changePass() {
    this.passwordd = !this.passwordd;
  }
  password() {
    this.show = !this.show;
    this.changePass();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.isloading = true;
    this.authService.login(this.newUser.email , this.newUser.password)
      .subscribe(
        (res) => {
        //  console.log(res);
          var token = res.body.access_token;
          var decoded = jwt_decode(token);
          // console.log(decoded);
           var role = decoded['authorities'];
            // console.log('givenName ' + role);
          if (role == 'ROLE_ADMIN') {
            localStorage.setItem('token', res.body.access_token);
            this.router.navigate(['/home']);
            this.authService.authChange.next(true);
          } else {
            this.errorMsg = 'Invalid  Username or Password ,you can not access!!';
            this.authService.authChange.next(false);
            this.isloading = false;
          }
          }
        , (err) => {
         // console.log(err.message);
          this.errorMsg = 'Invalid  Username or Password';
          this.authService.authChange.next(false);
          this.isloading = false;
        }

      );
    localStorage.setItem('isLoggedin', 'true');
  }

}
