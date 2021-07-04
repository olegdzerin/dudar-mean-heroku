import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import {CheckFormService} from '../check-form.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
   
  name: any;
  login: any
  email: any;
  password: any;

  message: any

  constructor(
    private checkForm: CheckFormService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
 userRegisterClick(): any{
  
   const user = {
     name:this.name,
     login: this.login,
     email: this.email,
     password: this.password
   }
   if(!this.checkForm.checkName(user.name)){
    this.flashMessage.show("Імя користувача не введено",{
      cssClass: 'alert-danger',
      timeout: 4000
    }
    ) ;
    return false
   }else if(!this.checkForm.checkName(user.login)){
    this.flashMessage.show("Логін не введено",{
      cssClass: 'alert-danger',
      timeout: 4000
    }
    ) ;
   return false
   }else if(!this.checkForm.checkName(user.email)){
    this.flashMessage.show("email  не введено",{
      cssClass: 'alert-danger',
      timeout: 4000
    }
    ) ;
    return false
   }else if(!this.checkForm.checkName(user.password)){
    this.flashMessage.show("Пароль не введено",{
      cssClass: 'alert-danger',
      timeout: 4000
    }
    ) ;
    return false
   };
    this.authService.registerUser(user).
    subscribe((data: any) => {
     if(!data.success){
     
      this.flashMessage.show(data.msg,{
        cssClass: 'alert-danger',
        timeout: 4000
      });
      this.router.navigate(['/reg']);
     }else{
    
     
        this.flashMessage.show(data.msg,{
          cssClass: 'alert-success',
          timeout: 4000
        });
        this.router.navigate(['/auth']);
       
     }
    
    })


   
 }
}
