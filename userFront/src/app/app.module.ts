 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './layout/shared-module/shared.module';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {LoginComponent} from './auth/login/login.component';
 import {SignupComponent} from './auth/signup/signup.component';
 import {AuthService} from './service/auth.service';
 import {AccountService} from './service/account.service';
 import {UiService} from './service/ui.service';
 import {AppointmentService} from './service/appointment.service';
 import {TransactionService} from './service/transaction.service';
 import {RecipientService} from './service/recipient.service';
@NgModule({
  declarations: [
    AppComponent,
     LoginComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
     BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
],
  providers: [AuthService, AccountService,
    UiService, AppointmentService, TransactionService, RecipientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
