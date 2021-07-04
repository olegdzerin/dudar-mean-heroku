import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from './permissions.service';
import { UserTokenService } from './user-token.service';

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissionsService: PermissionsService, private currentUserService: UserTokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log(route);   
    // return true;
    return this.permissionsService.canActivate();
  }
}
