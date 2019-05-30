import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NgModel } from '@angular/forms';
import { UserCreateComponent } from './user/user-create/user-create.component';

const routes: Routes = [
{path: '', component: UserCreateComponent},
{path: 'list', component: UserCreateComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}
