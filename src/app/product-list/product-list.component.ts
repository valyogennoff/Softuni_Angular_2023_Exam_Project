import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../types/product';
import { GlobalLoaderService } from '../core/global-loader/global-loader.service';
import { ActivatedRoute } from '@angular/router';
import { UserId } from '../types/user-id';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // title = 'Smart Angular Crafts';
  productList: Product[] = [];
  _ownerId!: UserId;
  isLoading: boolean = true;
  constructor(
    private apiService: ApiService,
    activatedRoute: ActivatedRoute,
    private globalLoaderService: GlobalLoaderService) {


  }

  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    // this.isLoading = true;

    // setTimeout(() => {
    this.apiService.getProducts().subscribe(
      {
        next: (catalog) => {
          console.log(catalog[1]);
          this.productList = catalog;
          // this.isLoading = false;
          this.globalLoaderService.hideLoader();
        },
        error: (err) => {
          // this.isLoading = false;
          console.error(`Error: ${err.message}`);
          this.globalLoaderService.hideLoader();
        },
      });
    // }, 3000);
  }
}
