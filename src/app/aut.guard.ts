import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { ResolveFn } from "@angular/router";

export const autGuard: CanActivateFn = (route, state) => {
  const service:UserServiceService =  inject(UserServiceService)
  const router = inject(Router);
  if(!service.isAutenticated())
  {
      router.navigate(["/login"])
      return false;
  }
  return true;
};
