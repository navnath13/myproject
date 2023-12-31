import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoggedIn=false;

changeTemplate=()=>{
  this.isLoggedIn=!this.isLoggedIn;
}
}
