import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

import { AuthComponent } from './auth/auth.component';
import { CanActivateTeam } from './canActivate/can-activate-team.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component'
import { RegComponent } from './reg/reg.component';
// import { CanActivateTeam } from './canActivate/can-activate-team.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard',canActivate:[CanActivateTeam], component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
