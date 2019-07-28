import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './service/auth.guard';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
    {path : 'home', loadChildren: './layout/layout.module#LayoutModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
