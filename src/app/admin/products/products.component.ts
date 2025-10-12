import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',
               "../../../assets/admin/vendors/mdi/css/materialdesignicons.min.css",
    "../../../assets/admin/vendors/ti-icons/css/themify-icons.css",
    "../../../assets/admin/vendors/css/vendor.bundle.base.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
   "../../../assets/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css",
    "../../../assets/admin/css/style.css",
  ]
})
export class ProductsComponent {
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
}
}
