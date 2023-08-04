import { ValidatorFn } from "@angular/forms";

export function passValidator(): ValidatorFn {
    const regExp = new RegExp(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/gm);

    return (control) => {
        return control.value === "" || regExp.test(control.value)
            ? null
            : { passValidator: true };
    };
}


