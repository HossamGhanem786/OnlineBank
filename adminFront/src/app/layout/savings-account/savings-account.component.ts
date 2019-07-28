import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PrimaryTransaction} from '../../models/primary-transaction';
import {AccountService} from '../../service/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TransactionService} from '../../service/transaction.service';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrls: ['./savings-account.component.css']
})
export class SavingsAccountComponent implements OnInit {
username: string;
  displayedColumns = ['date', 'description', 'type' , 'status', 'amount', 'availableBalance'];
  savingsTransaction: PrimaryTransaction[];
  dataSource = new MatTableDataSource(this.savingsTransaction);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
savingsBalance: any = 0.00;
  constructor(private accountService: AccountService, private transactionService: TransactionService,
              private routes: ActivatedRoute) {
    this.routes.params.subscribe((params: Params) => {
      console.log('params' + params);
      this.username = params['username'];
    });
  }

  ngOnInit() {
    console.log('username  ' + this.username);
    this.getSavingsAccount();
    this.getSavingsTransaction();
  }

getSavingsAccount() {
  this.accountService.getSavingsAccount(this.username).subscribe(res => {
    console.log(res.body);
    this.savingsBalance = res.body;
  });
}
getSavingsTransaction() {
  this.transactionService.getSavingsTransaction(this.username).subscribe(res => {
    console.log(res);
    this.dataSource = new MatTableDataSource(res.body);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });
}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
