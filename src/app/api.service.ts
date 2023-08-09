import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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
}
