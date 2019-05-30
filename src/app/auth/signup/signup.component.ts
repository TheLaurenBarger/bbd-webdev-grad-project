import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      console.log('Try again');
      return;
    } else {
      console.log('Well, gonna try this now');
      this.authService.createUser(form.value.email, form.value.password);
    }
  }
}
