import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  @Input() list : String;
  constructor() { }

  ngOnInit() {
  }

}
