import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UiService} from '../../service/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public newUser: User = new User();
  show: boolean;
  isIdentical: boolean;
  passwordd: boolean;
  constructor(private authService: AuthService , private router: Router, private uiService: UiService) {
    this.show = false;
    this.passwordd = false;
  }

  ngOnInit() {
  }
  changePass() {
    this.passwordd = !this.passwordd;
  }
  password() {
    this.show = !this.show;
    this.changePass();
  }
  onSubmit() {
    this.authService.newUser(this.newUser).subscribe((res) => {
        this.router.navigate(['/login']);
       // console.log(res);
        this.uiService.showSnackBar(res, 'Success', 5000);
      },
      (err) => {
        if (err.error === 'UserExists') {
         // console.log(err.error);
          this.uiService.showSnackBar('User Already Exist!', 'Failed', 5000);
          this.newUser.username = undefined;
          this.newUser.email = undefined;
          this.newUser.phoneNumber = undefined;
        } else if (err.error === 'EmailExists') {
       // console.log(err.error);
          this.uiService.showSnackBar('Email Already Exist!', 'Failed', 5000);
          this.newUser.email = undefined;
      } else if (err.error === 'UsernameExists') {
       // console.log(err.error);
          this.uiService.showSnackBar('User Name Already Exist!', 'Failed', 5000);
          this.newUser.username = undefined;
      } else if (err.error === 'PhoneNumberExists') {
        // console.log(err.error);
          this.uiService.showSnackBar('Phone Number Already Exist!', 'Failed', 5000);
          this.newUser.phoneNumber = undefined;
      }
      }

    );
  }

  onCheckPassword(password: string) {
    // console.log('pass' + password);
    if (password != this.newUser.password) {
      this.isIdentical = true;
    } else {
      this.isIdentical = false;
    }
  }

  onCheckConfirmPassword(password: string) {
    // console.log('pass' + password);
    if (password != this.newUser.confirmPassword) {
      this.isIdentical = true;
    } else {
      this.isIdentical = false;
    }
  }

}
