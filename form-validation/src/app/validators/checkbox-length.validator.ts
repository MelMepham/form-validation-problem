import { AbstractControl } from '@angular/forms';

export function CheckboxLengthValidator(minLength: number) {
  return (control: AbstractControl) => {
    const objValues = Object.values(control.value);
    const checkboxPressed = objValues.filter(val => val);

    if (checkboxPressed.length < minLength) {
      return { isValidAndInView: true };
    }
    return null;
  };
}
