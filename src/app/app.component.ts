import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { userService } from './State/User/user.service';
import { AppState } from './model/AppState';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  userProfile: any;
  constructor(private router:Router, private dialog:MatDialog,private user:userService,private store:Store<AppState>){}
  ngOnInit(){ 
    if(localStorage.getItem("jwt"))this.user.getUserProfile()
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.user.getUserProfile();
      console.log("store",this.store)
  
  
    })
      }
}
