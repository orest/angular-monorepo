import { Component, OnInit } from '@angular/core';
import { LoginComponentBase } from '../base/login.component';

@Component({
  selector: 'cws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent extends LoginComponentBase implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
  }

}
