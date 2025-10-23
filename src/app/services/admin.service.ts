import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  name = "Bayan"
  categories: any
  customers: any=[]
  SearchResult: any

  GetAllCategories() {
    this.httpClient.get("https://localhost:7031/api/category").subscribe(
      {
        next: (result) => { this.categories = result },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  GetAllCustomers() {
    this.httpClient.get("https://localhost:7031/api/customer").subscribe(
      {
        next: (res) => { this.customers = res;
          this.SearchResult = res
         },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  CreateCategory(category: any) {
    this.httpClient.post("https://localhost:7031/api/category", category).subscribe(
      {
        next: () => { console.log("Created Successfully"); },
        error: (err) => { console.log(err); }
      }
    )
  }

  CreateCustomer(customer: any) {
    this.httpClient.post("https://localhost:7031/api/customer", customer).subscribe({
      next: () => {
        console.log("Created Successfully");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  UpdateCustomer(customer: any) {
    this.httpClient.put("https://localhost:7031/api/customer", customer).subscribe({
      next: () => {
        console.log("Updated Successfully");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  UpdateCategory(category: any) {
    this.httpClient.put("https://localhost:7031/api/category", category).subscribe({
      next: () => {
        console.log("Updated");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  DeleteCategory(id: number)//10
  {
    this.httpClient.delete(`https://localhost:7031/api/category/${id}`).subscribe({
      next: () => {
        console.log("Deleted Sussefully");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  DeleteCustomer(id: number)//10
  {
    this.httpClient.delete(`https://localhost:7031/api/customer/${id}`).subscribe({
      next: () => {
        console.log("Deleted Sussefully");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  category: any
  GetCategoryById(id: number) {
    this.httpClient.get(`https://localhost:7031/api/category/GetCategoryById/${id}`).subscribe({
      next: (result) => { this.category = result },
      error: (err) => {
        console.log(err)
      }
    })
  }

  Register(user: any) {
    console.log({ ...user });

    user.imageName = this.imageName
    console.log({ ...user });

    this.httpClient.post("https://localhost:7031/api/login/register", user).subscribe({
      next: () => {
        console.log("Registerd Successfully");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  imageName: any

  UploadImage(formDate: any) {
    this.httpClient.post("https://localhost:7031/api/login/UploadImage", formDate, { responseType: 'text' }).subscribe({
      next: (result) => {
        this.imageName = result, console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  Login(user: any) {
    this.httpClient.post(" https://localhost:7031/api/login/login", user, { responseType: 'text' }).subscribe({
      next: (result) => {
        console.log(result);
        let userInfo: any = jwtDecode(result)
        console.log(userInfo);
        localStorage.setItem('token', result)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        if(userInfo.RoleId == 1)
        {
          this.router.navigate(['/admin/index'])
        }
        else if(userInfo.RoleId == 21)
        {
          this.router.navigate(['/'])
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


Search(name: any)
{
this.httpClient.get(`https://localhost:7031/api/customer/search/${name}`).subscribe({
  next: (result)=>{this.customers = result},
  error: (err)=>{console.log(err);
  }
})
}

userCount:any
GetCustomerCount()
{
  this.httpClient.get("https://localhost:7031/api/customer/GetCustomersCount").subscribe({
    next: (res)=>{this.userCount = res},
    error: (err)=>{console.log(err);
    }
  })
}
user: any
GetUserById(id: number)
{
this.httpClient.get(`https://localhost:7031/api/customer/GetuserById/${id}`).subscribe({
  next:(result)=>{ this.user= result },
  error:(err)=>{console.log(err);
  }
})
}

users: any

GetAllUsers()
{
  this.httpClient.get("https://localhost:7031/api/customer/GetAllUsers").subscribe({
    next:(result)=>{this.users= result},
    error:(err)=>{console.log(err);
    }
  })
}


}
