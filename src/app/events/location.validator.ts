import {
  Validator,
  ValidationErrors,
  FormControl,
  NG_VALIDATORS,
  FormGroup
} from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[location-validator]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }
  ]
})
export class LocationValidator implements Validator {
  validate(formControl: FormGroup): ValidationErrors | null {
    let adddressControl = formControl.controls["address"];
    let cityControl = formControl.controls["city"];
    let countryControl = formControl.controls["country"];
    let onlineControl: FormControl = formControl.parent.controls["onlineUrl"];

    if (
      (adddressControl &&
        adddressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineControl && onlineControl.value)
    ) {
      return null;
    } else {
      return { "location-validator": 'Check the values.' };
    }
  }
}
