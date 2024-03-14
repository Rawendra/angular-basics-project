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

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  reactiveForm: FormGroup;
  handleFormSubmit() {
    console.log(this.reactiveForm);
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
