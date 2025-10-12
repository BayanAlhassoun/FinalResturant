import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: ()=>import('./admin/admin.module').then(x=>x.AdminModule)
  },
    {
    path: "customer",
    loadChildren: ()=>import('./customer/customer.module').then(x=>x.CustomerModule)
  },
    {
    path: "employee",
    loadChildren: ()=>import('./employee/employee.module').then(x=>x.EmployeeModule)
  },
    {
    path: "home",
    loadChildren: ()=>import('./home/home.module').then(x=>x.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
