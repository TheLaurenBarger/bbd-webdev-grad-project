import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      console.log('Try again');
      return;
    } else {
      console.log('Well, gonna try this now');
      this.authService.createUser(form.value.email, form.value.password);
    }
  }
}
