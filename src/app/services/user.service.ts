import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {

  private user: User[];

  constructor() { 
    this.user = [
      {
        username: 'kaipetersen',
        password: 'professor'
      },
      {
        username: 'test',
        password: 'test1'
      }
    ];
  }

  login() {
    if ( this.loginForm.value['username'] === this.username && this.loginForm.value['password'] === this.password) {
  alert(' login successfully : ' + JSON.stringify(this.loginForm.value));
  }

  }}