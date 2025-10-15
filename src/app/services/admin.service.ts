import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  name = "Bayan"
categories: any
customers: any

GetAllCategories()
{
this.httpClient.get("https://localhost:7031/api/category").subscribe(
  {
    next: (result)=>{this.categories = result},
    error: (err)=> {console.log(err);
    }
  }
)
}

GetAllCustomers()
{
  this.httpClient.get("https://localhost:7031/api/customer").subscribe(
    {
      next: (res)=>{this.customers=res},
      error: (err)=>{console.log(err);
      }
    }
  )
}

CreateCategory(category: any)
{
  this.httpClient.post("https://localhost:7031/api/category", category).subscribe(
    {
      next: ()=>{console.log("Created Successfully");},
      error: (err)=>{console.log(err);}
    }
  )
}

CreateCustomer(customer: any)
{
  this.httpClient.post("https://localhost:7031/api/customer", customer).subscribe({
    next: ()=>{console.log("Created Successfully");
    },
    error: (err)=>{console.log(err);
    }
  })
}

}
