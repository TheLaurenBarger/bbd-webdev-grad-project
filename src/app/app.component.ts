import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService } from './_services';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: any;

    constructor(
        private router: Router,
        private authentificationService: AuthentificationService
    ) {
        this.authentificationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authentificationService.logout();
        this.router.navigate(['/login']);
    }
}
