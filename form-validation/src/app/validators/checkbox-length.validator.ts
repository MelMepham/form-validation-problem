import { AbstractControl } from '@angular/forms';
import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';

export function CheckboxLengthValidator(minLength: number) {
  return (control: AbstractControl) => {
    const objValues = Object.values(control.value);
    const checkboxPressed = objValues.filter(val => val);

    if (checkboxPressed.length < 2) {
      return { isValidAndInView: true };
    }
    return null;
  }
}
