import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    // ProductPageComponent,
    // NewProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    // ProductPageComponent,
    // NewProductComponent,
  ]
})
export class ProductModule { }
