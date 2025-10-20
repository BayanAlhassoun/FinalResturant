import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public adminService: AdminService)
{
adminService.name = "Ahmad"
}

ngOnInit()
{

  let styles = [
    "../../../assets/Login/fonts/material-icon/css/material-design-iconic-font.min.css",
    "../../../assets/Login/css/style.css"
  ]

  styles.forEach(s => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = s;
    document.head.appendChild(link);
  })

  let scripts = [
    "../../../assets/Login/vendor/jquery/jquery.min.js",
    "../../../assets/Login/js/main.js"
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
