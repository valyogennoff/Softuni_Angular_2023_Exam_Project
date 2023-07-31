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
  //   const { appUrl } = environment;
  //   const limitFilter = limit ? `?limit=${limit}` : '';
  //   return this.http.get<Category[]>(`${appUrl}/themes${limitFilter}`);
  // }
  getProduct(id: string) {
    const { appUrl } = environment;
    return this.http.get<Product>(`${appUrl}/catalog/${id}`);
  }

  getProducts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Product[]>(`${appUrl}/catalog${limitFilter}`);
    // console.log({appUrl});
  }
}
