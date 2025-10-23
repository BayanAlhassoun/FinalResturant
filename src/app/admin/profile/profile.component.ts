import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
constructor(public adminService: AdminService)
{}
  ngOnInit()
  {
    let user: any = localStorage.getItem('userInfo')
    user = JSON.parse(user);
this.adminService.GetUserById(user.UserId);
  }
}
