import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addProduct(
    make: string,
    description: string,
    material: string,
    model: string,
    price: string,
    year: string,
    img: string,
  ) {
    // const token = localStorage.getItem('accessToken');
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });
    return this.http.post<Product>('/api/data/catalog', { make, description, material, model, price, year, img });
  }

  getMyProducts() {
    const userId = sessionStorage.getItem('token');
    const { apiUrl } = environment;
    return this.http.get<Product[]>(`/api/data/catalog?where=_ownerId%3D%22${userId}%22`,);
    // console.log({apiUrl});
  }

}