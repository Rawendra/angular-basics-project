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
  displayText:string=''

  incrementCount() {
    this.count = this.count + 1;
  }
  handleChangeUserName(_username:string) {
    this.username=_username
    if (this.username !== '') {
      console.log('user is valid');
      this.displayText='user is valid'
    }else{
      this.displayText=''
    }
  }
}
