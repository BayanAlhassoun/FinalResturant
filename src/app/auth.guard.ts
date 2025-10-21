import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let userInfo: any = localStorage.getItem('userInfo')
  userInfo = JSON.parse(userInfo)

  if (state.url.includes('admin'))
  {
    if(userInfo.RoleId == 1)
    {
      return true;
    }
    else
    {
      router.navigate(['/login'])
      return false;
    }
  } 
  else if (state.url.includes('customer'))
  {
    if(userInfo.RoleId == 21)
    {
      return true;
    }
    else
    {
      router.navigate(['/login'])
      return false;
    }
  } 

  return false;
};
