import { CheckboxLengthValidator } from './checkbox-length.validator';
import { FormGroup, FormControl } from '@angular/forms';

describe('CustomValidatorsService', () => {

  it('passwordsMatch: should determine if two form control values match', () => {
    const mockFormGroup = new FormGroup({
      one: new FormControl(false),
      two: new FormControl(false),
      three: new FormControl(false),
      four: new FormControl(false),

    }, {
      validators: [CheckboxLengthValidator(2)]
    });

    console.log(mockFormGroup.errors);
    expect(mockFormGroup.valid).toBe(false);
    expect(mockFormGroup.errors['isValidAndInView']).toBe(true);

    mockFormGroup.patchValue({ one: 'true' });
    expect(mockFormGroup.valid).toBe(false);
    expect(mockFormGroup.errors['isValidAndInView']).toBe(true);

    mockFormGroup.patchValue({ two: 'true' });
    expect(mockFormGroup.valid).toBe(true);
    expect(mockFormGroup.errors).toBe(null);

  });
});
