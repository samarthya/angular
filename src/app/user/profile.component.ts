import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, IToastr } from "../common/toastr.service";
import { IUser } from './user.model';


@Component({
  templateUrl: "./profile.component.html",
  styles: [`
      em {
        color: crimson;
        float: right;
        padding-left: 10px;
      }
      .error {
        background-color: coral;
      }
      #logout {
        float: right;
      }
    `],
})

/**
 * Profile component - Allows the user to edit the first name and the user name
 * for the logged in user.
 */
export class ProfileComponent implements OnInit {
  /**
   * The FORM that will be used.
   * @type FormGroup
   */
  public profileForm: FormGroup;

  /**
   * The string controls for the FormControl
   * @type FormControl
   */
  public lastName: FormControl;

  /**
   * Last name of the logged in user.
   * @type LastName
   */
  public firstName: FormControl;

  /**
   * Constructor
   */
  constructor(
    private authService: AuthService,
    private router: Router, @Inject(TOASTR_TOKEN) private toasterService: IToastr) {}

  /**
   * On cancel method that has been bound to the btnCancel
   */
  public onCancel() {
    this.router.navigate(["events"]);
  }

  /**
   * Reactive form: Validate the first name.
   */
  public validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  /**
   * Validates the first name.
   */
  public validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  /**
   * Save method.
   */
  public onSave() {
    /**
     * Only if the form is valid.
     */
    if (this.profileForm.valid) {
      this.authService.updateProfile(
        this.profileForm.value.firstName,
        this.profileForm.value.lastName
      ).subscribe( (user: IUser) => {
        console.log(" User saved: " + user);
        /** Once valid then we need to navigate to the Events page. */
      //this.router.navigate(["events"]);
      this.toasterService.info(" Profile updated.");
      });

    }
  }

  /**
   * On component initialize we need to add the first name and the last name and add to the form Group.
   */
  public ngOnInit() {

      this.firstName = new FormControl(this.authService.currentUser.firstName, [
        Validators.required,
        Validators.pattern("^[a-zA-Z].*")
      ]);
      this.lastName = new FormControl(
        this.authService.currentUser.lastName,
        Validators.required
      );

      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      });

  }


  public onLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['events'])
    });
  }
}
