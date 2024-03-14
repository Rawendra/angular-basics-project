import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {

  constructor() { }

  @HostBinding('value') inputValueDefault='enter the value:directive'

}
