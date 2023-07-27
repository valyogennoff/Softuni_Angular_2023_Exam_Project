import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Smart Angular Crafts';

  constructor(private userService: UserService, activatedRoute: ActivatedRoute) {
    // activatedRoute.params.subscribe((params) => {
    //   if(params.searchTerm)
    //   this.product = this.apiService.getProduct(params.searchTerm
    // })
  }
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
}
