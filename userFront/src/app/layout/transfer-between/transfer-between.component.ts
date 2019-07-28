import { Component, OnInit } from '@angular/core';
import {TransferBetween} from '../../models/transfer-between';
import {Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {TransactionService} from '../../service/transaction.service';


@Component({
  selector: 'app-transfer-between',
  templateUrl: './transfer-between.component.html',
  styleUrls: ['./transfer-between.component.css']
})
export class TransferBetweenComponent implements OnInit {
  public newTransferBetween: TransferBetween = new TransferBetween();
  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.transactionService.transferBetween(this.newTransferBetween).subscribe((res) => {
        this.router.navigate(['/home']);
        console.log( res.body);
      },
      (err) => {
        console.log('problem occur', err.error);
      }
    );
  }
  cancel() {
    this.router.navigate(['/home']);
  }
}
