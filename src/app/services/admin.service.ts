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

UpdateCustomer(customer: any)
{
this.httpClient.put("https://localhost:7031/api/customer", customer).subscribe({
  next:()=>{console.log("Updated Successfully");
  },
  error: (err)=>{console.log(err);
  }
})
}

UpdateCategory(category: any)
{
this.httpClient.put("https://localhost:7031/api/category", category).subscribe({
  next:()=>{console.log("Updated");
  },
  error:(err)=>{console.log(err);
  }
})
}

DeleteCategory(id: number)//10
{
this.httpClient.delete(`https://localhost:7031/api/category/${id}`).subscribe({
  next:()=>{console.log("Deleted Sussefully");
  },
  error: (err)=>{console.log(err);
  }
})
}

DeleteCustomer(id: number)//10
{
this.httpClient.delete(`https://localhost:7031/api/customer/${id}`).subscribe({
  next:()=>{console.log("Deleted Sussefully");
  },
  error: (err)=>{console.log(err);
  }
})
}
category: any
GetCategoryById(id: number)
{
  this.httpClient.get(`https://localhost:7031/api/category/GetCategoryById/${id}`).subscribe({
    next: (result)=>{this.category = result},
    error: (err)=>{console.log(err)
    }
  })
}


}
