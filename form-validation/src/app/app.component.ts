import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { CheckboxLengthValidator } from './validators/checkbox-length.validator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public tigerIsClicked = false;

    public colorArray = ['blue', 'green', 'red', 'black', 'brown'];
    public animalArray = ['tiger', 'snake', 'donkey', 'bear'];

    public myFunForm = new FormGroup({
        email: new FormControl('melissa.mepham@gmail.com', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('passworddd', {
            validators: [Validators.minLength(8)]
        }),
        color: new FormControl('blue', {
            validators: [Validators.required]
        }),
        animalGroup: new FormGroup({}, {
            validators: [CheckboxLengthValidator(2)]
        }),
        // Have put a native validator for this in the html
        // because it needs to be updated dynamically
        // (not the best idea to be validating in two different places)
        type_of_tiger: new FormControl('')
    });

    public ngOnInit() {
        const abstractControl: AbstractControl = this.myFunForm.get('animalGroup');

        if (abstractControl instanceof FormGroup) {
            this.animalArray.forEach(val => {
            (<FormGroup>abstractControl).addControl(val, new FormControl(false));
            });
        }
    }

    public updateAnimalValidation(animal: string): void {
        if (animal === 'tiger') {
            this.tigerIsClicked = !this.tigerIsClicked;
        }
    }

    public onSubmit(value): void {
        console.log(value);
    }
}
