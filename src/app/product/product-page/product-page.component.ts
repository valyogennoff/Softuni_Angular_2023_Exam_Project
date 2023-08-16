import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  isLoading: boolean = true;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    const id = this.activatedRoute.snapshot.params['itemId'];
    this.apiService.getProduct(id).subscribe(
      {

        next: (product) => {
          this.product = product;
          this.isLoading = false;
          console.log({ product });
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`)
        }

      }
    );
  }
}
