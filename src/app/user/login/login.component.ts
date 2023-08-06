import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  // ngOnInit(): void { }
  // ngAfterViewInit(): void { }
  // login(email: string, password: string): void {
  //   this.router.navigate(['/']);
  // }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userService.login(email, password).subscribe(() => {

      form.setValue({
        email: '',
        password: '',
      });
      this.router.navigate(['/']);

    });


  }

}
