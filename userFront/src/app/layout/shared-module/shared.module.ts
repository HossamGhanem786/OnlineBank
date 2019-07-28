import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule,
    MatSidenavModule , FlexLayoutModule, MatListModule, FormsModule, MatButtonModule,
    MatSelectModule , MatProgressSpinnerModule, MatFormFieldModule,
    NgbModule , HttpClientModule, MatInputModule, ReactiveFormsModule,
    MatCheckboxModule, MatCardModule , MatTableModule, MatPaginatorModule,
    MatSortModule, OwlDateTimeModule,
    OwlNativeDateTimeModule, MatDialogModule, MatSnackBarModule, RouterModule
  ],
  exports: [MatToolbarModule, MatIconModule,
    MatSidenavModule , FlexLayoutModule, MatListModule, FormsModule, MatButtonModule,
    MatSelectModule , MatProgressSpinnerModule, MatFormFieldModule,
    NgbModule , HttpClientModule, MatInputModule, ReactiveFormsModule,
    MatCheckboxModule, MatCardModule , MatTableModule, MatPaginatorModule,
    MatSortModule, OwlDateTimeModule,
    OwlNativeDateTimeModule, MatDialogModule, MatSnackBarModule, RouterModule]
})

export class SharedModule {
}
