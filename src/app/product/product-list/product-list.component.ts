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

  giftProductList: Product[] = [];
  giftCategory: string = "Gifts";
  homeProductList: Product[] = [];
  homeCategory: string = "Home";
  jewelryProductList: Product[] = [];
  jewelryCategory: string = "Jewellery";
  fashionProductList: Product[] = [];
  fashionCategory: string = "Fashion";
  elProductList: Product[] = [];
  elCategory: string = "Electronics";
  eventsProductList: Product[] = [];
  eventsCategory: string = "Events";
  travelProductList: Product[] = [];
  travelCategory: string = "Travel";
  gardeningProductList: Product[] = [];
  gardeningCategory: string = "Gardening";
  handProductList: Product[] = [];
  handCategory: string = "Handmade";
  outProductList: Product[] = [];
  outCategory: string = "Outdoors";


  isLoading: boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts(4).subscribe(
      {
        next: (items) => {
          console.log(items);

          // Sort the productList based on created_at in descending order
          this.productList = items.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });

          // Filter products based on the selected category
          this.giftProductList = this.productList.filter(product => product.category === this.giftCategory);
          this.homeProductList = this.productList.filter(product => product.category === this.homeCategory);
          this.jewelryProductList = this.productList.filter(product => product.category === this.jewelryCategory);
          this.fashionProductList = this.productList.filter(product => product.category === this.fashionCategory);
          this.elProductList = this.productList.filter(product => product.category === this.elCategory);
          this.eventsProductList = this.productList.filter(product => product.category === this.eventsCategory);
          this.travelProductList = this.productList.filter(product => product.category === this.travelCategory);
          this.gardeningProductList = this.productList.filter(product => product.category === this.gardeningCategory);
          this.handProductList = this.productList.filter(product => product.category === this.handCategory);
          this.outProductList = this.productList.filter(product => product.category === this.outCategory);


          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`)
        }
      });
  }
}
