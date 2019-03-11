import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

/**
 * As soon as you import the FormsModule,
 * this directive becomes active by default
 * on all <form> tags. You don't need to add
 * a special selector.
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.css'],
})

/**
 * Template based form is not easy to UNIT test
 * as most of the logic goes inside the HTML as
 * opposed to the Model based Form.
 */
export class LoginComponent {
  mouseHelp: boolean;
  userName: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.mouseHelp = false;
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.authService.loginUser(loginForm.value.userName, loginForm.value.password);
    this.router.navigate(['events']);
  }

  onCancel() {
    this.router.navigate(['events']);
  }
}
