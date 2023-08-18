import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  title = 'Create New Product';
  constructor(private apiService: ApiService, private router: Router) { }

  getAuthToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  newProduct(newItemForm: NgForm): void {
    const authToken = this.getAuthToken();
    if (newItemForm.invalid || !authToken) return;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const { make, description, material, model, price, category, img, } = newItemForm.value;
    this.apiService.addProduct(make, description, material, model, price, category, img,).subscribe(() => {
      this.router.navigate(['/products'])
    });
  }
}
