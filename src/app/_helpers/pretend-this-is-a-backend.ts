import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

let users = [
    {
        userId: 1,
        username: '1997',
        password: 'password',
        name: 'The Lauren',
        displayName: 'Gilgamesh',
        avatar: 'images/avatars/1.svg'
    }
]

@Injectable()
export class PretendThisIsABackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        //WTF: How the hell does this just get parsed...
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // Because we really are pretending that this is a real backend
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    return next.handle(request);
            }    
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Your fake user doesn\'t have a valid fake password');
            return ok({
                userId: user.userId,
                username: user.username,
                name: user.name,
                displayName: user.displayName,
                avatar: user.avatar,
                token: 'fake-jwt-token'
            })
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }
    }
}

export const pretendThisIsABackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: PretendThisIsABackendInterceptor,
    multi: true
};