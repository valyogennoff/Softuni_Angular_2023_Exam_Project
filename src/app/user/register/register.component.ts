import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }


  ngAfterViewInit(): void { }

  register(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { name, username, email, img, country, password, repass } = form.value;

    this.userService.register(name, username, email, img, country, password, repass).subscribe(() => {
      form.setValue({
        name: '',
        username: '',
        email: '',
        img: '',
        country: '',
        password: '',
        repass: '',
      });
      this.router.navigate(['/']);
    })

  }

}
