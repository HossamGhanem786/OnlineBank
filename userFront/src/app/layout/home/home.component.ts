import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../service/account.service';
import {Account} from '../../models/account';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  primaryBalance: any = 0.00 ;
  savingsBalance: any = 0.00;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getPrimaryAccount().subscribe( res => {
      console.log(res.body);
      this.primaryBalance = res.body;
    });
    this.accountService.getSavingsAccount().subscribe( res => {
      console.log(res.body);
      this.savingsBalance = res.body;
    });
  }

}
