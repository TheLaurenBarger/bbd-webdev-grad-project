import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit, OnDestroy {

  user: User;

  constructor(public userService: UserService) {}
  ngOnInit() {
    this.userService.getUser().subscribe((users: User) => {
      this.user = users;
      console.log(users);
    });

   }

   ngOnDestroy() {

   }
}
