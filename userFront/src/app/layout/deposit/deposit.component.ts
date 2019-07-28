import { Component, OnInit } from '@angular/core';
import {Deposit} from '../../models/deposit';
import {Router} from '@angular/router';
import {UiService} from '../../service/ui.service';
import {TransactionService} from '../../service/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  public newDeposit: Deposit = new Deposit();
  constructor(private router: Router, private transactionService: TransactionService, private uiService: UiService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.transactionService.deposit(this.newDeposit).subscribe((res) => {
        this.router.navigate(['/home']);
        console.log( res.body);
        this.uiService.showSnackBar('Deposit', 'Success', 3000);
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
