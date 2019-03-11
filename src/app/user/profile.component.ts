import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

/**
 * Profile component - Allows the user to edit the first name and the user name
 * for the logged in user.
 */
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
  /**
   * The FORM that will be used.
   * @type FormGroup
   */
  profileForm: FormGroup;

  /**
   * The string controls for the FormControl
   * @type FormControl
   */
  lastName: FormControl;

  /**
   * Last name of the logged in user.
   * @type LastName
   */
  firstName: FormControl;

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * On cancel method that has been bound to the btnCancel
   */
  onCancel() {
    this.router.navigate(["events"]);
  }

  /**
   * Reactive form: Validate the first name.
   */
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  /**
   * Validates the first name.
   */
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched ;
  }

  /**
   * Save method.
   */
  onSave() {
    /**
     * Only if the form is valid.
     */
    if (this.profileForm.valid) {
      this.authService.updateProfile(
        this.profileForm.value.firstName,
        this.profileForm.value.lastName
      );
      /** Once valid then we need to navigate to the Events page. */
      this.router.navigate(["events"]);
    }
  }

  /**
   * On component initialize we need to add the first name and the last name and add to the form Group.
   */
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
