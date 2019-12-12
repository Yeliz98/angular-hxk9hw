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
  private username = 'kaipetersen';
  private password = 'angular';

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
    alert('Sie wurden erfolgreich angemeldet.');
  } else {
    this.logout();
    alert('Ihr Username oder Passwort ist ist nicht korrekt');
  }
  }

}