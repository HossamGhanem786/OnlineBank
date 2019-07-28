import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {MatTableDataSource} from '@angular/material';
import {AccountService} from '../../service/account.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {UiService} from '../../service/ui.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  displayedColumns = ['username', 'firstName', 'lastName', 'email', 'phoneNumber' ,
    'primaryAccount', 'savingsAccount', 'active', 'action'];
  userList: User[];
  dataSource = new MatTableDataSource(this.userList);

  constructor(private accountService: AccountService , private authService: AuthService,
              private router: Router, private uiService: UiService) {
  }

  ngOnInit() {
    this.getUserList();
  }
  activatedUser(element) {
    this.authService.activatedUser(element.username).subscribe( res => {
      console.log('' + res.body);
      this.uiService.showSnackBar('User Activated Successfully!!', 'Success', 3000);
      this.ngOnInit();

    }, err => {
      console.log('error' + err.error);
      this.uiService.showSnackBar('User Activated Successfully!!', 'Success', 3000);
      this.ngOnInit();
    });
  }
  deActivatedUser(element: any) {
    this.authService.deActivatedUser(element.username).subscribe( res => {
      this.uiService.showSnackBar('User Deactived Successfully!!', 'Success', 3000);
      this.ngOnInit();

    }, err => {
      console.log('error' + err.error);
      this.uiService.showSnackBar('User deActivated Successfully!!', 'Success', 3000);
      this.ngOnInit();
    });
  }
  getUserList() {
    this.authService.getUserList().subscribe( res => {
      this.dataSource = res.body;
      console.log(res.body);
    });
  }

  getPrimaryTransaction(element: any) {
    this.router.navigate(['home/primary', element.username]);
  }

  getSavingsTransaction(element: any) {
    this.router.navigate(['home/savings', element.username]);
  }
}

