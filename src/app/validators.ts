import { AbstractControl } from '@angular/forms';

export function pfidValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp('^[0-9]');

        if (!regex.test(control.value)) {
            return {
                isError: true
            };

        }
    }
    return null;
}