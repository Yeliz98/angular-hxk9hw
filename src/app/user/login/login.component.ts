import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public message: string = '';
  constructor(private userService: UserService) { }

  loginUser(userForm) {
    /*
    if (this.userForm.value['username'] === this.username && this.userForm.value['password'] === this.password) {
   alert(' login successfully : ' + JSON.stringify(this.userForm.value));
    */
    /*
    if (userForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const user: User = userForm.value.user;
      this.userService.createNews(user);
    }
    */
    
  }

  }
