import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimaryAccountComponent} from './primary-account/primary-account.component';
import {SavingsAccountComponent} from './savings-account/savings-account.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {AuthGuard} from '../service/auth.guard';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout.component';
import {UserAccountComponent} from './user-account/user-account.component';
// import {HeaderComponent} from './components/header/header.component';


const routes: Routes = [
  {path : '', component : LayoutComponent , children: [
      { path: '', redirectTo: 'dashBoard', pathMatch: 'full' },
      {path: 'dashBoard', component: HomeComponent},
      {path : 'primary/:username', component : PrimaryAccountComponent},
      {path : 'savings/:username', component : SavingsAccountComponent},
      {path : 'userAccount', component: UserAccountComponent},
      {path : 'appointment', component: AppointmentComponent}
    ]}

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
