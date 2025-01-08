import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



export function matchPassword(
  password: string,
  confirmPassword: string
):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordReg = control.get(password);
    const confirmPasswordReg = control.get(confirmPassword);
    if (passwordReg && confirmPasswordReg) {
      if (passwordReg.value!== confirmPasswordReg.value) {
        return { matchPassword: true };
      }else{
        return null;
      }
    }
    return null;
  };
}