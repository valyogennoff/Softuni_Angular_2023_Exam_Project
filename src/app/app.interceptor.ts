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


        console.log('Before If');


        if (req.url.startsWith('/api')) {
            const accessToken = this.authService.getToken();
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
            });
            debugger

            console.log(accessToken);

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