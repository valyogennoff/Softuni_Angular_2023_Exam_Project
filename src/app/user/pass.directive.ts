import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { passValidator } from './pass-validator';


// const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/gm

@Directive({
  selector: '[appPass]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassDirective,
      multi: true,
    }
  ]
})


export class PassDirective implements Validator, OnChanges {
  @Input() appPass: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPassChanges = changes["appPass"];
    if (currentPassChanges) {
      this.validator = passValidator();
    }
  }

}
