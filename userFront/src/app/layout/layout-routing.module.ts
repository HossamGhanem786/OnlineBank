import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimaryAccountComponent} from './primary-account/primary-account.component';
import {SavingsAccountComponent} from './savings-account/savings-account.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {DepositComponent} from './deposit/deposit.component';
import {TransferBetweenComponent} from './transfer-between/transfer-between.component';
import {RecipientComponent} from './recipient/recipient.component';
import {ToSomeoneElseComponent} from './to-someone-else/to-someone-else.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {WelcomeComponent} from './components/profile/welcome.component';
import {AuthGuard} from '../service/auth.guard';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout.component';
// import {HeaderComponent} from './components/header/header.component';


const routes: Routes = [
  {path : '', component : LayoutComponent , children: [
      { path: '', redirectTo: 'dashBoard', pathMatch: 'full' , canActivate: [AuthGuard]},
      {path: 'dashBoard', component: HomeComponent, canActivate: [AuthGuard]},
      {path : 'primary', component : PrimaryAccountComponent, canActivate: [AuthGuard]},
      {path : 'savings', component : SavingsAccountComponent, canActivate: [AuthGuard]},
      {path : 'withdraw', component : WithdrawComponent, canActivate: [AuthGuard]},
      {path : 'deposit', component : DepositComponent, canActivate: [AuthGuard]},
      {path : 'betweenAccount', component: TransferBetweenComponent, canActivate: [AuthGuard]},
      {path : 'recipient', component: RecipientComponent, canActivate: [AuthGuard]},
      {path : 'toSomeoneElse', component: ToSomeoneElseComponent, canActivate: [AuthGuard]},
      {path : 'profile', component : WelcomeComponent, canActivate: [AuthGuard]},
      {path : 'appointment', component: AppointmentComponent, canActivate: [AuthGuard]}
    ]}

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
