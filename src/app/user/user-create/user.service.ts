import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  private user: User;
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<{user: User}>('http://localhost:3000/user');
  }
}
