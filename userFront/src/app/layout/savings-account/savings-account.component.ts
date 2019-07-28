import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PrimaryTransaction} from '../../models/primary-transaction';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrls: ['./savings-account.component.css']
})
export class SavingsAccountComponent implements OnInit {

  displayedColumns = ['date', 'description', 'type' , 'status', 'amount', 'availableBalance'];
  savingsTransaction: PrimaryTransaction[];
  dataSource = new MatTableDataSource(this.savingsTransaction);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
savingsBalance: any = 0.00;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getSavingsAccount().subscribe(res => {
      console.log(res.body);
      this.savingsBalance = res.body;
    });
    this.accountService.getSavingsTransaction().subscribe(res => {
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
