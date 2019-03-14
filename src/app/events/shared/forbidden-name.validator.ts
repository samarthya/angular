import { ValidatorFn, AbstractControl } from "@angular/forms";
import { stringify } from "@angular/core/src/render3/util";

/**
 * ValidatorFn - A function that receives a control and synchronously returns a map of
 * validation errors if present, otheAnalyserOptions
 * ValidationErrors - [key: string]: any;
 */
export function forbiddenName(names): ValidatorFn {
  if (!names) {
    return null;
  }

  return (control: AbstractControl): { [key: string]: any } | null => {
    const faultingWords = names
      .map((name: string) => (control.value.includes(name) ? name : null))
      .filter((w) => w != null);

    // TBD: Remove console.log
    // tslint:disable-next-line:no-console
    console.log(faultingWords);

    return faultingWords && faultingWords.length > 0
      ? { "forbiddenName": faultingWords.join(" OR ") }
      : null;
  };
}
