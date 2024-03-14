import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ListKey } from './types';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { messages as _messages } from './messages';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  reactiveForm: FormGroup;
  customerName:string=''
  messages = _messages;
  nameErrorMessage: string = '';
  errorMessages = {};
  handleCustomerNameChange(){
    console.log(this.customerName)
  }
  handleFormSubmit() {
    console.log(this.reactiveForm);
  }
  shouldShowErrorMessage(field: string) {
    console.log('shouldShowErrorMessage', this.reactiveForm.get(field));
    const value =
      this.reactiveForm.get(field).invalid &&
      this.reactiveForm.get(field).dirty;
    const errorType = Object.keys(this.reactiveForm.get(field).errors || [])[0];
    // this.nameErrorMessage = this.messages.name.errors[errorType];
    this.errorMessages[field] = this.messages?.[field]?.errors[errorType];
    return value;
  }
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.nullValidator,
        Validators.maxLength(6),
      ]),
      email: new FormControl(null, [
        Validators.nullValidator,
        Validators.email,
      ]),
      password: new FormControl(null, Validators.nullValidator),
      confirmedPassword: new FormControl(null),
      gender: new FormControl(null, Validators.nullValidator),
      dob: new FormControl(null, Validators.nullValidator),
      country: new FormControl(null, Validators.nullValidator),
    });
  }
}
