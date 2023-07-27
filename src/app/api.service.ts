import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Category } from './types/category';
import { Product } from './types/product';
import { Observable } from 'rxjs';
import { productById, searchUrl } from './shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategory(id: string) {
    const { appUrl } = environment;
    return this.http.get<Category>(`${appUrl}/categories/${id}`);
  }

  getCategories(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Category[]>(`${appUrl}/themes${limitFilter}`);
  }
  getProducts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Product[]>(`${appUrl}/posts${limitFilter}`);
  }

  getAllProducts(): Observable<Product[]> {
    const { appUrl } = environment;
    return this.http.get<Product[]>(`${appUrl}/posts`);
  }

  getProductBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(`${searchUrl}${searchTerm}`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${productById}${id}`);
  }
}
