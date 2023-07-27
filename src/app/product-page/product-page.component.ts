import { Component } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product: Product[] = [];
}
