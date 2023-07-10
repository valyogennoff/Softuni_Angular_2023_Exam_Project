import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // title = 'Smart Angular Crafts';
  productList: Product[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getProducts(8).subscribe(
      {
        next: (posts) => {
          console.log(posts[0]);
          this.productList = posts;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err.message}`);
        },
      });
  }
}
