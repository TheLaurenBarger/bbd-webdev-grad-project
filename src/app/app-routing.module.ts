import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayWarriorComponent } from './display-warrior';
import { EditWarriorComponent } from './edit-warrior';
import { LoginComponent } from './login';

//Add routing for urls to pages:
const routes: Routes = [
  { path: '', component: DisplayWarriorComponent },
  { path: 'edit', component: EditWarriorComponent },
  { path: 'login', component: LoginComponent },

  //If some idiot goes to a non existent page, send them to the Display Warrior page. 
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
