import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ISession, forbiddenName } from "../shared";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./create-session.component.html",
  styleUrls: ["./create.style.css"],
})
/**
 * Angular uses directives to match these attributes with validator functions in the framework.
 */
// tslint:disable:no-console
export class CreateSessionComponent implements OnInit {

  public sessionForm: FormGroup;

  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public abstract: FormControl;
  public level: FormControl;

  constructor(private router: Router) {
    console.log(" CreateSession ");
  }

  /**
   * On component init.
   */
  public ngOnInit() {
    console.log(" Initialized : CreateSessionComponent. ");
    this.name = new FormControl("", [Validators.required, forbiddenName(["Saurabh", "Sharma"])]);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
    ]);

    /**
     * Reactive form
     */
    this.sessionForm = new FormGroup({
      abstract: this.abstract,
      duration: this.duration,
      level: this.level,
      name: this.name,
      presenter: this.presenter,
    });
  }

  public onCancel(): void {
    this.router.navigate(["/events"]);
  }

  public validate(control: string) {
    switch (control) {
      case "session":
        return this.sessionForm.valid || this.sessionForm.untouched;
    }
  }

  /**
   * On NGSUBMIT this method will be called.
   * @param formValues
   */
  public onSave( formValues: any): void {
    console.log(formValues);
    let newSession: ISession = {
      abstract: formValues.abstract,
      duration: +formValues.duration,
      id: 999,
      level: formValues.abstract,
      name: formValues.name,
      presenter: formValues.presenter,
      voters: [],
    };
  }
}
