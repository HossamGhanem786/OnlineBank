import { Component, OnInit } from '@angular/core';
import {Deposit} from '../../models/deposit';
import {Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {TransactionService} from '../../service/transaction.service';
import {UiService} from '../../service/ui.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  public newWithdraw: Deposit = new Deposit();
  constructor(private router: Router, private transactionService: TransactionService, private  uiService: UiService) { }


  ngOnInit() {
  }
  onSubmit() {
    this.transactionService.withdraw(this.newWithdraw).subscribe((res) => {
        this.router.navigate(['/home']);
        this.uiService.showSnackBar('Withdraw', 'Success', 3000);
        console.log('Success', res);
        // this.errorMsg = res;
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
