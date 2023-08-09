import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {


  newProduct(newItemForm: NgForm): void {
    if (newItemForm.invalid) return;
    console.log(newItemForm.value);

  }
}
