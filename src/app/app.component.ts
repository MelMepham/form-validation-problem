import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckboxLengthValidator } from './validators/checkbox-length.validator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  get email() { return this.myFunForm.get('email'); }
  get password() { return this.myFunForm.get('password'); }
  get type_of_tiger() { return this.myFunForm.get('type_of_tiger'); }


  public tigerIsClicked = false;

    public colorArray = ['blue', 'green', 'red', 'black', 'brown'];
    public animalArray = ['tiger', 'snake', 'donkey', 'bear'];

    public myFunForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(8)]
        }),
        color: new FormControl('', {
            validators: [Validators.required]
        }),
        animal_group: new FormGroup({}, {
            validators: [CheckboxLengthValidator(2)]
        }),
        type_of_tiger: new FormControl('')
    });

    public ngOnInit() {
        const abstractControl: AbstractControl = this.myFunForm.get('animal_group');

        if (abstractControl instanceof FormGroup) {
            this.animalArray.forEach(val => {
            (<FormGroup>abstractControl).addControl(val, new FormControl(false));
            });
        }
    }

    public updateAnimalValidation(animal: string): void {

        if (animal !== 'tiger') {
            return;
        }
        this.tigerIsClicked = !this.tigerIsClicked;

        if (this.tigerIsClicked) {
          this.myFunForm.get('type_of_tiger').setValidators([Validators.required]);
        } else {
          this.myFunForm.get('type_of_tiger').clearValidators();
        }
    }

    public onSubmit(value): void {
      // Left a console log in here on purpose
        console.log(value);
    }
}
