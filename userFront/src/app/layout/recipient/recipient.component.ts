import { Component, OnInit } from '@angular/core';
import {Recipient} from '../../models/recipient';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';
import {UiService} from '../../service/ui.service';
import {RecipientService} from '../../service/recipient.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {
  public newRecipient: Recipient = new Recipient();
  checked = false;
  displayedColumns = ['name', 'phone', 'email', 'accountNumber', 'description', 'amount', 'actions'];
  recipientList: Recipient[];
  dataSource = new MatTableDataSource(this.recipientList);

  constructor(private recipientService: RecipientService ,
              private router: Router, private dialog: MatDialog, private uiService: UiService) {
  }

  ngOnInit() {
    this.getRecipientList();
  }

  onEditRecipient(element: any) {
    this.recipientService.editRecipient(element.name).subscribe(res => {
      // console.log(element.name);
      this.newRecipient = res.body;
      this.ngOnInit();
    });
  }

  onDeleteRecipient(row: any) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);
    dialogRef.afterClosed().subscribe( res => {
      if (!res) {
        this.ngOnInit();
      } else {
        this.recipientService.deleteRecipient(row.name).subscribe(result => {
          this.ngOnInit();
          this.uiService.showSnackBar('Recipient Deleted Successfully!!', 'Success', 3000);
        });
      }
    });
  }

getRecipientList() {
  this.recipientService.getRecipientList().subscribe( res => {
    this.dataSource = res.body;
  });
}
  onSubmit() {
  this.recipientService.saveRecipient(this.newRecipient).subscribe(res => {
    this.ngOnInit();
    this.uiService.showSnackBar('Recipient Save Successfully!!', 'Success', 3000);
  }, error => {
    console.log('error' + error.error);
  });
    this.newRecipient = new Recipient();
  }
}
