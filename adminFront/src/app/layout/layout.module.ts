import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SavingsAccountComponent} from './savings-account/savings-account.component';
import {PrimaryAccountComponent} from './primary-account/primary-account.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {SharedModule} from './shared-module/shared.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {CommonModule} from '@angular/common';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from './header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';


@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,
    SavingsAccountComponent,
    PrimaryAccountComponent,
    AppointmentComponent,
    LayoutComponent,
    UserAccountComponent
  ],
  imports: [
    SharedModule, LayoutRoutingModule, CommonModule
  ],
  exports: [],
})
export class LayoutModule { }
