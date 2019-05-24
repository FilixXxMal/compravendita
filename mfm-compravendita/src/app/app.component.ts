import { Component, Input } from '@angular/core';
import { User } from './user';
import { MockUsers } from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = MockUsers;
  title = 'Compravendita di oggetti usati';

}
