import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import {CheckFormService} from '../check-form.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   password: string = '';
   login: string = '';

   constructor(
    // private checkForm: CheckFormService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  userLoginClick():any{
    const user = {
      login: this.login,
      password: this.password
    };
    if(user.password == ''){
      this.flashMessage.show("Введите пароль",{
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }
    this.authService.authUser(user).subscribe((data:any) => {
      if(!data.success) {
        this.flashMessage.show(data.msg,{
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['/auth']);
      }else{
        this.flashMessage.show("Ви успішно авторизовались",{
          cssClass: 'alert-success',
          timeout: 4000
        });
        this.router.navigate(['/dashboard']);
        this.authService.storeUser(data.token,data.user);
      }
    })
  }
}

