import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    const id = this.activatedRoute.snapshot.params['productId'];
    this.apiService.getProductById(id).subscribe(product => {
      this.product = product;
      console.log({ id });

    })
  }
}
