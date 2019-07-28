import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {AccountService} from '../../../service/account.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {UiService} from '../../../service/ui.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public newUser: User = new User();
  pAccountNumber: any = 0.00;
  sAccountNumber: any = 0.00;
  showPassword: boolean;
  password: boolean;

  constructor(private accountService: AccountService , private router: Router, private authService: AuthService,
              private uiService: UiService) {
    this.showPassword = false;
    this.password = false;
  }

  ngOnInit() {
    this.editUser();
    this.getPAccountNumber();
    this.getSAccountNumber();

  }
  onSubmit() {
    this.authService.saveChanges(this.newUser).subscribe( res => {
      console.log(res);
      this.uiService.showSnackBar('Change Saved Successfully!!', 'Success', 5000);
    }, error1 => {
     // console.log(error1);
    });
  }
  editUser() {
    this.authService.getUser().subscribe(res => {
      this.newUser = res.body;
     // console.log(res);
    });
  }
  getPAccountNumber() {
    this.accountService.getPrimaryAccountNumber().subscribe(res => {
      this.pAccountNumber = res.body;
     // console.log(res.body);
    });
  }
  getSAccountNumber() {
    this.accountService.getSavingsAccountNumber().subscribe(res => {
      this.sAccountNumber = res.body;
     // console.log(res.body);
    });
  }
  passwordD() {
    this.showPassword = ! this.showPassword;
    this.changePass();
  }
  changePass() {
this.password = !this.password;
    }
  }

