import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css',
           "../../../assets/admin/vendors/mdi/css/materialdesignicons.min.css",
    "../../../assets/admin/vendors/ti-icons/css/themify-icons.css",
    "../../../assets/admin/vendors/css/vendor.bundle.base.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
    "../../../assets/admin/vendors/font-awesome/css/font-awesome.min.css",
   "../../../assets/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css",
    "../../../assets/admin/css/style.css"
  ]
})
export class SidebarComponent {
  constructor(private router: Router)
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
}

Logout()
{
  localStorage.clear()
this.router.navigate(['/login'])
}
}
