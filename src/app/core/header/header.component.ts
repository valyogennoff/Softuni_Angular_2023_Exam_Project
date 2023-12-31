import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) { }


  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  get loggedName(): string {
    return this.userService.user?.name || '';

  }

  get loggedImg(): string {
    return this.userService.user?.img || '';

  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
