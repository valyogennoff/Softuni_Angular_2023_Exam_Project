import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';



@NgModule({
  declarations: [
    // ProductPageComponent,
    // NewProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // SlicePipe,
    // FormsModule
  ],
  exports: [
    // ProductPageComponent,
    // NewProductComponent,
  ]
})
export class ProductModule { }
