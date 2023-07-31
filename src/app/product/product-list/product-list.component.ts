import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Smart Angular Crafts';
  productList: Product[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts(8).subscribe((items) => {
      console.log(items);
      this.productList = items;
    });
  }
}
