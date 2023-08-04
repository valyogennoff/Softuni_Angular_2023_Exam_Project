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

  registerHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { firstname: string; surname: string; username: string; email: string; img: string; country: string; password: string; repass: string } = form.value;


    form.setValue({
      firstname: '',
      surname: '',
      username: '',
      email: '',
      img: '',
      country: '',
      password: '',
      repass: '',
    });
    this.router.navigate(['/']);
  }

}
