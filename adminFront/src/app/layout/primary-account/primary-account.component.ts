import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {PrimaryTransaction} from '../../models/primary-transaction';
import {AccountService} from '../../service/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TransactionService} from '../../service/transaction.service';

@Component({
  selector: 'app-primary-account',
  templateUrl: './primary-account.component.html',
  styleUrls: ['./primary-account.component.css']
})
export class PrimaryAccountComponent implements OnInit {
  displayedColumns = ['date', 'description', 'type', 'status', 'amount', 'availableBalance'];
  username: string;
  primaryTransaction: PrimaryTransaction[];
  dataSource = new MatTableDataSource(this.primaryTransaction);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  primaryBalance: any = 0.00;

  constructor(private transactionService: TransactionService, private accountService: AccountService,
              private routes: ActivatedRoute) {
    this.routes.params.subscribe((params: Params) => {
      console.log('params' + params);
      this.username = params['username'];
    });
  }
  ngOnInit() {
    console.log('this.username' + this.username);
    this.getPrimaryAccount();
    this.getPrimaryTransaction();
  }
  getPrimaryAccount() {
    this.accountService.getPrimaryAccount(this.username).subscribe(res => {
      console.log(res.body);
      this.primaryBalance = res.body;
    });
  }
  getPrimaryTransaction() {
    this.transactionService.getPrimaryTransaction(this.username).subscribe(res => {
      console.log(res.body);
      this.dataSource = new MatTableDataSource(res.body);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
