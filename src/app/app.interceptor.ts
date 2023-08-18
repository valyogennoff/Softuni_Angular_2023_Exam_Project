import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { ErrorService } from "./core/error/error.service";

const { apiUrl } = environment;

/**
 *
 *
 * @export
 * @class AppInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class AppInterceptor implements HttpInterceptor {
    /**
     * Creates an instance of AppInterceptor.
     * @param {AuthService} authService
     * @param {Router} router
     * @param {ErrorService} errorService
     * @memberof AppInterceptor
     */
    constructor(
        private authService: AuthService,
        private router: Router,
        private errorService: ErrorService
    ) { }

    /**
     *
     *
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @return {*}  {Observable<HttpEvent<any>>}
     * @memberof AppInterceptor
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the request url
        let requestUrl = req.url;

        // if the request URL have the string prefix - /api
        // then make the replace by the correct url
        if (requestUrl.startsWith('/api')) {
            requestUrl = requestUrl.replace('/api', apiUrl)
        }

        // clone the http request with new the new options
        let modifiedRequest = req.clone({
            url: requestUrl,
        });

        // Get the auth token from the service class
        // then check if we have an auth token to be added as a request header
        const authToken = this.authService.getToken();
        if (authToken?.length) {
            modifiedRequest = modifiedRequest.clone({
              headers: modifiedRequest.headers.set('Authorization', `Bearer ${authToken}`)
            });
        }

        // Handle any errors and move to next HttpClient request life cycle
        return next.handle(modifiedRequest).pipe(
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
