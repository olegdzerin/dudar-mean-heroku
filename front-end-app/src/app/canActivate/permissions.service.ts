import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(private userTokenService: UserTokenService) { }
  // canActivate(currentUser: any, id?: any): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //  // throw new Error('Method not implemented.');
  //  if(currentUser.token) return true;
  //  return false
  // }
  canActivate(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    // throw new Error('Method not implemented.');
    if(this.userTokenService.token) return true;
    return false
   }
  
}
