import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn =(
  route :ActivatedRouteSnapshot,
  state :RouterStateSnapshot) => {

if(inject (UserAuthService).isUserLogged)
 {
   return true;
 }
 else
 {
   inject(Router).navigate(['/Login']);
   return false;
 }
}
