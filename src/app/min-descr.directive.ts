import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinDescr]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinDescrDirective,
      multi: true,
    }
  ]
})
export class MinDescrDirective implements Validator {
  @Input() appMinDescr: number | undefined;
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.appMinDescr === undefined || control.value?.length >= this.appMinDescr) {
      return null;
    }

    return { appMinDescr: this.appMinDescr };
  }

}
