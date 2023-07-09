import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Category } from './types/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategories(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Category[]>(`${appUrl}/themes${limitFilter}`);
  }
  getProducts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get(`${appUrl}/posts${limitFilter}`);
  }
}
