import { Routes, RouterModule } from '@angular/router';

import { DisplayWarriorComponent } from './display-warrior';
import { LoginComponent } from './login';
import { EditWarriorComponent } from './edit-warrior';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: DisplayWarriorComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'edit', component: EditWarriorComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);