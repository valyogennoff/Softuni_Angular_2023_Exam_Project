import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) {

  }


  login(email: string, password: string): void {

    //TODO: for now not handling real data
    this.userService.login()
  }
}
