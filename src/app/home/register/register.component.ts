import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(public adminService: AdminService)
{

}

RegisterForm: FormGroup = new FormGroup(
  {
    fullname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    genderid: new FormControl(),
    positionid: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    imageName: new FormControl()
  }
)

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


Register()
{
  this.RegisterForm.controls["positionid"].setValue(21)
  console.log(this.RegisterForm.value);
  this.adminService.Register(this.RegisterForm.value)
}

UploadImage(file: any)
{
  if(file.files.length > 0)
  {
    let formData = new FormData()
    formData.append('file', file.files[0], file.files[0].name)
    this.adminService.UploadImage(formData)
  }
}
}
