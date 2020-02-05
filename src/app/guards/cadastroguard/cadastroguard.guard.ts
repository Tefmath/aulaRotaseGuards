import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroguardGuard implements CanActivate {
  
  constructor(private router:Router){
    
  }
  
  canActivate():Observable<boolean> | Promise<boolean> | boolean {
     return this.router.navigate(['/tabs/tab3']) ;
    }
   

  
}
