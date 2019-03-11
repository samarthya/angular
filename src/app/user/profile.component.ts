import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: crimson;
        padding-left: 10px;
      }

      .error {
        background-color: coral;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  lastName: FormControl;
  firstName: FormControl;

  constructor(private authService: AuthService, private router: Router) {}

  onCancel() {
    this.router.navigate(["events"]);
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched ;
  }

  onSave() {
    if (this.profileForm.valid) {
      this.authService.updateProfile(
        this.profileForm.value.firstName,
        this.profileForm.value.lastName
      );
      this.router.navigate(["events"]);
    }
  }

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required,Validators.pattern("^[a-zA-Z].*")]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
}
