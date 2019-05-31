import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

    constructor(public authService: AuthService) {}
  
    onCreateProfile(form: NgForm) {
      if (form.invalid) {
        console.log('Try again');
        return;
      } else {
        console.log('Well, gonna try this now');
        this.authService.createUser(form.value.email, form.value.password);
      }
    }
    

}
