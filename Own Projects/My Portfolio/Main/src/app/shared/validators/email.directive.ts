import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true,
  }],
})
export class EmailDirective implements Validator, OnChanges{

  @Input() appEmail: string[] = [];

  constructor() { }

  validator: ValidatorFn = () => null;
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null{
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
      const {currentValue} = changes['appEmail'];

      if (currentValue?.length) {
        this.validator = this.emailValidator(currentValue)
      }
  }

  emailValidator(domains: string[]):ValidatorFn{
  //  const domainLine = domains.join('|');
    const regExp = new RegExp('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')
    
    
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
      const email = control.value;
      if (!email) {
        return null;
      }
      // const re = new RegExp(domains);
      return regExp.test(email)? null : { email: { value: email } };
    };
  }

}
