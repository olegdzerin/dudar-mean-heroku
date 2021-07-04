import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }
checkName(name: string){
  if(name == undefined)
  return false;
  else
  return true;
}
checkLogin(login: string){
  if(login == undefined)
  return false;
  else
  return true;
}
checkEmail(email: string){
  if(email == undefined)
  return false;
  else
  return true;
}
checkPasword(password: string){
  if(password == undefined)
  return false;
  else
  return true;
}

}