import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({providedIn: 'root'})
export class UserService {
  private data = new Subject<User>();

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('http://localhost:3000/api/user');
  }
}
