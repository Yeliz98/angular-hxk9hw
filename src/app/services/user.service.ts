import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {

  isLogin = false;
  logout() {
    this.isLogin=false;
  }

  }