import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: ()=>import('./admin/admin.module').then(x=>x.AdminModule),
    canActivate: [authGuard]
  },
    {
    path: "customer",
    loadChildren: ()=>import('./customer/customer.module').then(x=>x.CustomerModule),
    canActivate: [authGuard]
  },
    {
    path: "employee",
    loadChildren: ()=>import('./employee/employee.module').then(x=>x.EmployeeModule)
  },
    {
    path: "",
    loadChildren: ()=>import('./home/home.module').then(x=>x.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
