import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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

    try {
      this.userService.register(name, username, email, img, country, password, repass).subscribe((res: any) => {
        localStorage.setItem('accessToken', JSON.stringify(res));
        this.router.navigate(['/']);
      })

    } catch (error) {
      alert(error);
    }

  }

}
