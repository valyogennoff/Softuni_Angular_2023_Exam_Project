import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getToken(): string | null {
    const tokenData = localStorage.getItem('accessToken');
    if (!tokenData?.length) {
      return '';
    }

    try {
      const parsedData = JSON.parse(tokenData);
      return parsedData.accessToken;
    } catch (err) {
      return '';
    }
  }

  getUserId(): string | null {
    return localStorage.getItem('_id');
  }
}
