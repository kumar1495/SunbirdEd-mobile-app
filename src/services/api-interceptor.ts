import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
    from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(
        private storage: Storage
    ) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handle(req, next))
    }

    async handle(req: HttpRequest<any>, next: HttpHandler) {
        const token = await this.storage.get('token');
        if (req.url.includes('kendra') && token) {
            console.log(token);
            req = req.clone({
                setHeaders: {
                    'Authorization': token ? 'Bearer ' + token : "",
                    'X-authenticated-user-token': token,
                    // 'X-Channel-id': '0125747659358699520'
                }
            })
        } else { }
        return next.handle(req).toPromise()
    }
}