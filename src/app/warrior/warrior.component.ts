import { Component } from '@angular/core';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
})
export class WarriorComponent {
  userId: number;
  username: string;
  password: string;
  name: string;
  displayName: string;
  avatar: string;
}
