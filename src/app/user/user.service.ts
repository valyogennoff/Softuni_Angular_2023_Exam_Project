import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  public user$ = this.user$$.asObservable();


  user: User | undefined;
  USER_KEY = 'user';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user$ = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  }


  login(email: string, password: string) {

    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  };


  register(
    name: string,
    username: string,
    email: string,
    img: string,
    country: string,
    password: string,
    repass: string) {

    return this.http
      .post<User>('/api/users/register', {
        name,
        username,
        email,
        img,
        country,
        password,
        repass
      })
      .pipe(tap((user) => this.user$$.next(user)));
  };


  logout() {
    localStorage.removeItem(this.USER_KEY)
    return this.http
      .get<User>('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
