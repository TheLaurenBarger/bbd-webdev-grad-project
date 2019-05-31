import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { ViewUserComponent } from './auth/view-user/view-user.component';

const routes: Routes = [
{path: '', component: UserCreateComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'create', component: CreateUserComponent},
{path: 'view', component: ViewUserComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}
