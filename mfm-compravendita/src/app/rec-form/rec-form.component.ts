import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { Users } from './mock-users';

@Component({
  selector: 'app-rec-form',
  templateUrl: './rec-form.component.html',
  styleUrls: ['./rec-form.component.css']
})
export class RecFormComponent implements OnInit {
  signup : FormGroup;
  users: User[] = Users;

  constructor(fb: FormBuilder) {
    this.signup = fb.group({
      'nome': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  ngOnSubmit(): void {

    let newUser: User = new User();
    newUser.nome = this.signup.controls['nome'].value;
    newUser.email = this.signup.controls['email'].value;
    newUser.password = this.signup.controls['password'].value;

    this.users.push(newUser);
  }

}
