import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUserId(): string | null {
    return localStorage.getItem('_id');
  }
}