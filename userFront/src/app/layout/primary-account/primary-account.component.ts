import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {PrimaryTransaction} from '../../models/primary-transaction';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-primary-account',
  templateUrl: './primary-account.component.html',
  styleUrls: ['./primary-account.component.css']
})
export class PrimaryAccountComponent implements OnInit {
  displayedColumns = ['date', 'description', 'type', 'status', 'amount', 'availableBalance'];
  primaryTransaction: PrimaryTransaction[];
  dataSource = new MatTableDataSource(this.primaryTransaction);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  primaryBalance: any = 0.00;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getPrimaryAccount().subscribe(res => {
      console.log(res.body);
      this.primaryBalance = res.body;
    });
    this.accountService.getPrimaryTransaction().subscribe(res => {
      console.log(res.body);
     this.dataSource = new MatTableDataSource(res.body) ;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
