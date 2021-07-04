import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import {CheckFormService} from '../check-form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private checkForm: CheckFormService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    this.authService.logout();
    this.flashMessage.show('Ви вийшли з облікового запису',{
      cssClass: 'alert-warning',
      timeout: 4000
    });
    this.router.navigate(['auth']);
    return false;
  }
}
