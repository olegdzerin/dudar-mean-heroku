import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

import { UserTokenService } from './canActivate/user-token.service';
import { PermissionsService } from './canActivate/permissions.service';
import { CanActivateTeam } from './canActivate/can-activate-team.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AuthComponent,
    RegComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule,
  ],
  providers: [CheckFormService,
     AuthService,
     CanActivateTeam,
     UserTokenService,
     PermissionsService,
     FlashMessagesService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
