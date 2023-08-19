import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthService,) { }

  // getCategories(limit?: number) {
  //   const { apiUrl } = environment;
  //   const limitFilter = limit ? `?limit=${limit}` : '';
  //   return this.http.get<Category[]>(`${apiUrl}/data/themes${limitFilter}`);
  // }
  getProduct(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Product>(`${apiUrl}/data/catalog/${id}`);
  }

  getProducts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Product[]>(`${apiUrl}/data/catalog${limitFilter}`);
    // console.log({apiUrl});
  }

  addProduct(
    make: string,
    description: string,
    material: string,
    model: string,
    price: number,
    category: string,
    img: string,
  ) {

    return this.http.post<Product>('/api/data/catalog', { make, description, material, model, price, category, img });
  }

  getMyProducts() {
    const userId = this.authService.getToken();
    const { apiUrl } = environment;
    return this.http.get<Product[]>(`/api/data/catalog`);
  }

  deleteProduct(id: string, headers: HttpHeaders) {
    const { apiUrl } = environment;
    const options = { headers };

    return this.http.delete<Product>(`${apiUrl}/data/catalog/${id}`, options);
  }

}