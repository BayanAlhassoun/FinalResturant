import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css',
     "../../../assets/admin/vendors/mdi/css/materialdesignicons.min.css",
    "../../../assets/admin/vendors/ti-icons/css/themify-icons.css",
    "../../../assets/admin/vendors/css/vendor.bundle.base.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
   "../../../assets/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css",
    "../../../assets/admin/css/style.css",
  ]
})
export class UsersComponent {

@ViewChild('CreateCustomerDialog') callCreateDialog!: TemplateRef<any>
@ViewChild('UpdateCustomerDialog') callUpdateDialog!: TemplateRef<any>
@ViewChild('DeleteCustomerDialog') callDeleteDialog!: TemplateRef<any>
@ViewChild('MoreCustomerDialog') callMoreDialog!: TemplateRef<any>

  constructor(public adminService: AdminService, public dialog: MatDialog)
  {

  }
ngOnInit()
{
  let scripts = [
     "../../../assets/admin/vendors/js/vendor.bundle.base.js",
    "../../../assets/admin/vendors/chart.js/chart.umd.js",
    "../../../assets/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js",
   "../../../assets/admin/js/off-canvas.js",
    "../../../assets/admin/js/misc.js",
    "../../../assets/admin/js/settings.js",
   "../../../assets/admin/js/todolist.js",
    "../../../assets/admin/js/jquery.cookie.js",
    "../../../assets/admin/js/dashboard.js"
  ]

  scripts.forEach(s=>
  {
    let script = document.createElement('script');
    script.src = s;
    script.async = true;
    document.body.appendChild(script)
  }
  )

  this.adminService.GetAllCustomers()
}

CreateCustomer: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
  email: new FormControl('', [Validators.required]),
  gender_Id: new FormControl('', Validators.max(2))
})

UpdateCustomer: FormGroup= new FormGroup({
  customer_Id: new FormControl(),
  name: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
  email: new FormControl('', [Validators.required]),
  gender_Id: new FormControl('', Validators.max(2))
})

Create()
{
  this.adminService.CreateCustomer(this.CreateCustomer.value)
  this.dialog.closeAll()
}

OpenCreateDialog()
{
this.dialog.open(this.callCreateDialog,
  {height: '50%' , width: '40%%'})
}


OpenUpdateDialog(customer: any)
{
  console.log(customer);
  
  this.UpdateCustomer.patchValue(customer)
  console.log(this.UpdateCustomer.value);
  
  this.dialog.open(this.callUpdateDialog)
}

Update()
{
  this.adminService.UpdateCustomer(this.UpdateCustomer.value)
  this.dialog.closeAll()
}
deletedItemId = 0
OpenDeleteDialog(id: number)
{
  this.deletedItemId = id
this.dialog.open(this.callDeleteDialog)
}

Delete()
{
  this.adminService.DeleteCustomer(this.deletedItemId)
}
user: any
OpenMoreDialog(user: any)
{
  this.user = user
this.dialog.open(this.callMoreDialog)
}


searchForm: FormGroup = new FormGroup(
  {
    searchValue: new FormControl()
  }
)

Search()
{
  console.log(this.searchForm.value);
  console.log(this.searchForm.controls['searchValue'].value);//bay
  
  this.adminService.SearchResult = this.adminService.customers.filter((x:any)=>x.name.toUpperCase().includes(this.searchForm.controls['searchValue'].value.toUpperCase()))
  
}

}
