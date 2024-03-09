import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';
  count = 0;
  name: string = '';
  username: string = '';
  private _privateUserName: string = '';
  displayText: string = '';

  get privateUserName(): string {
    return this._privateUserName;
  }
  set privateUserName(value: string) {
    console.log(value)
    if(value==='rawendra'){
      alert('Hello rawendra')
    }
    this._privateUserName = value;
  }

  incrementCount() {
    this.count = this.count + 1;
  }
  handleChangeUserName(_username: string) {
    this.username = _username;
    if (this.username !== '') {
      console.log('user is valid');
      this.displayText = 'user is valid';
    } else {
      this.displayText = '';
    }
  }
}
