import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
})

/**
 * Template based form is not easy to UNIT test
 * as most of the logic goes inside the HTML as
 * opposed to the Model based Form.
 */
export class LoginComponent {
  login(loginForm: NgForm) {
    console.log(loginForm.value);
  }
}
