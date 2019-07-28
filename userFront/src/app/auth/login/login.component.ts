import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Router} from '@angular/router';
import {User} from '../../models/user';
import {UiService} from '../../service/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public newUser: User = new User();
  isLoading = false;
  errorMsg = '';
  show: boolean;
  passwordd: boolean;
  constructor(private authService: AuthService, private router: Router, private uiService: UiService) {
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
  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.newUser.email , this.newUser.password)
      .subscribe(
        (res) => {
          if (res) {
            console.log(res);
            localStorage.setItem('token', res.body.access_token);
            this.router.navigate(['/home']);
            this.authService.authChange.next(true);
          }
        },

        (err) => {
         // console.log(err.message);
          this.isLoading = false;
         // this.errorMsg = 'Invalid  Username or Password';
          this.uiService.showSnackBar('Invalid  Username or Password', 'Failure', 6000);
          this.authService.authChange.next(false);
        }

      );
  }
  ngOnInit() {
  }
}
