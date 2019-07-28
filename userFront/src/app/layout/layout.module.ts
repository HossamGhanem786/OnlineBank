import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './components/profile/welcome.component';
import {SavingsAccountComponent} from './savings-account/savings-account.component';
import {PrimaryAccountComponent} from './primary-account/primary-account.component';
import {DepositComponent} from './deposit/deposit.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {TransferBetweenComponent} from './transfer-between/transfer-between.component';
import {RecipientComponent} from './recipient/recipient.component';
import {ToSomeoneElseComponent} from './to-someone-else/to-someone-else.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {ConfirmAppointmentComponent} from './confirm-appointment/confirm-appointment.component';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';
import {SharedModule} from './shared-module/shared.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from './components/header/header.component';


@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,
    WelcomeComponent,
    SavingsAccountComponent,
    PrimaryAccountComponent,
    DepositComponent,
    WithdrawComponent,
    TransferBetweenComponent,
    RecipientComponent,
    ToSomeoneElseComponent,
    AppointmentComponent,
    ConfirmAppointmentComponent,
    ConfirmDeleteComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule, LayoutRoutingModule, CommonModule
  ],
  entryComponents: [ConfirmAppointmentComponent, ConfirmDeleteComponent],
  exports: [],
})
export class LayoutModule { }
