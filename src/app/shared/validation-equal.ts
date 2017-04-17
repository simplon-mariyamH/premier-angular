import { ValidatorFn, AbstractControl } from '@angular/forms';


export function equal(item:any): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if (item === control.value) {
            return null;
        }
        return {'equal':control.value};
    }
}