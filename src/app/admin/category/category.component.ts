import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css',
           "../../../assets/admin/vendors/mdi/css/materialdesignicons.min.css",
    "../../../assets/admin/vendors/ti-icons/css/themify-icons.css",
    "../../../assets/admin/vendors/css/vendor.bundle.base.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
   "../../../assets/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css",
    "../../../assets/admin/css/style.css",
  ],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent {

 @ViewChild('CreateCategoryDialog') callCreateCategoryDialog !: TemplateRef<any>;
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

  this.adminService.GetAllCategories();
}

CreateForm: FormGroup = new FormGroup(
  {
    category_name: new FormControl('', [Validators.required, Validators.minLength(3)])
  }
)

Create()
{
  this.adminService.CreateCategory(this.CreateForm.value);
  this.dialog.closeAll()
}

OpenCreateDialog()
{
this.dialog.open(this.callCreateCategoryDialog,
  {
    height: '50%',
    width: '50%'
  }
)
}

}
