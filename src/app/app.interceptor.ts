import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { Router } from "@angular/router";
import { ErrorService } from "./core/error/error.service";

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router,
        private errorService: ErrorService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authService.getToken();
        const userId = this.authService.getUserId();

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                    // UserId: userId,
                },
            });
        }

        if (req.url.startsWith('/api')) {
            // if (accessToken) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
            });
            // }
        }



        return next.handle(req).pipe(
            catchError(err => {
                if (err.status === 401) {
                    this.router.navigate(['/auth/login']);
                } else {
                    this.errorService.setError(err);
                    this.router.navigate(['/error']);
                }
                return [err];
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}