import { Component, OnInit } from '@angular/core';
import {SomeOneElse} from '../../models/some-one-else';
import {Recipient} from '../../models/recipient';
import {Router} from '@angular/router';
import {TransactionService} from '../../service/transaction.service';
import {RecipientService} from '../../service/recipient.service';

@Component({
  selector: 'app-to-someone-else',
  templateUrl: './to-someone-else.component.html',
  styleUrls: ['./to-someone-else.component.css']
})
export class ToSomeoneElseComponent implements OnInit {
  recipientList: Recipient[];
  public someOne: SomeOneElse = new SomeOneElse();
  constructor(private transactionService: TransactionService,
              private recipientService: RecipientService, private router: Router) { }

  ngOnInit() {
    this.getRecipientList();
  }

  getRecipientList() {
    this.recipientService.getRecipientList().subscribe( res => {
      console.log(res);
      this.recipientList = res.body;
    });
  }
  onSubmit() {
    this.transactionService.toSomeoneElse(this.someOne).subscribe((res) => {
       this.router.navigate(['/home']);
       this.ngOnInit();
        console.log(res.body );
       },
       (err) => {
         console.log('problem occur', err.error);
       });
  }
  cancel() {
    this.router.navigate(['/home']);
  }
}
