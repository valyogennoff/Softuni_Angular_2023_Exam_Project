import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    // ProductPageComponent,
    // NewProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
