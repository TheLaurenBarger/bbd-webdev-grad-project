// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { DisplayWarriorComponent } from './display-warrior';
// import { EditWarriorComponent } from './edit-warrior';
// import { LoginComponent } from './login';

// import { AuthGuard } from './_helpers';

// //Add routing for urls to pages:
// const routes: Routes = [
//   { path: '', component: DisplayWarriorComponent, canActivate: [AuthGuard] },
//   { path: 'edit', component: EditWarriorComponent },
//   { path: 'login', component: LoginComponent },

//   //If some idiot goes to a non existent page, send them to the Display Warrior page. 
//   {path: '**', redirectTo: ''}

// ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class appRoutingModule { }

// export const appRoutingModule = RouterModule.forRoot(routes);