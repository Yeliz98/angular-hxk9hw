import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import {FormControl, FormGroup,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean;
  private username = 'admin';
  private password = 'admin';

  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
        this.userService.isLogin = true;
    }
    logout() {
      this.userService.isLogin = false;
  }

  onSubmit() {
  if (this.profileForm.value.name === this.username && this.profileForm.value.password === this.password) {
    this.login();
    alert('Login successfully');
  } else {
    this.logout();
    alert('Login Failed. Please try again');
  }
  }

}