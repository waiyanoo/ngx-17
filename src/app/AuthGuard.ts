import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {NbAuthService} from '@nebular/auth';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return  this.authService.onTokenChange()
      .pipe(
        map(token => {
          if(!token.isValid()){
            console.log("Token is not valid");
            this.router.navigate(['auth/login']);
          }
          console.log("Token is valid");
          return  true;
        })
      )

  //   return this.authService.isAuthenticated().pipe(
  //     map(authenticated => {
  //       if (!authenticated) {
  //         this.router.navigate(['auth/login']);
  //         return false;
  //       } else {
  //         return true;
  //       }
  //
  //     }),
  //   );
  }
}
