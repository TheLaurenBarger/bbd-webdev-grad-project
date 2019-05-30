import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { WARRIORS } from '../fake-warriors';

let users = WARRIORS;

@Injectable()
export class PretendThisIsABackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('users/register') && method === 'POST':
                    return register();
                default:
                    return next.handle(request);
            }    
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                userId: user.userId,
                username: user.username,
                password: user.password,
                name: user.name,
                displayName: user.displayName,
                avatar: user.avatar,
                token: 'fake-jwt-token'
            })
        }

        function register() {
            const user = body;

            if (users.find(x => x.username === user.username)) {
                return error('HOW DARE YOU ATTEMPT TO STEAL THE GLORY OF ANOTHER WARRIOR!?')
            }

            user.id = users.length ? Math.max(...user.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(user));

            return ok();
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: PretendThisIsABackendInterceptor,
    multi: true
};