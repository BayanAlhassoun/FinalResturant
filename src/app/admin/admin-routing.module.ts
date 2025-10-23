import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { User2Component } from './user2/user2.component';

const routes: Routes = [
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "user2",
    component: User2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
