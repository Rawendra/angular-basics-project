import { Component } from '@angular/core';
import { ParentData } from './types';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  expression: boolean = true;
  parentdata: ParentData = {
    firstname: 'Rawendra',
    lastName: 'Kushwaha',
    email: 'rawendra@gmail.com',
  };
}
