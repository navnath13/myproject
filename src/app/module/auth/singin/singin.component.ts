import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { authService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  @Input() changeTemplate:any;

  constructor(private formBuilder:FormBuilder, private store:Store,private auth:authService,private dialog:MatDialog){}

  loginForm:FormGroup=this.formBuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })
  
submitFrom(){
 
  if(this.loginForm.value){
    this.auth.login(this.loginForm.value);
    this.dialog.closeAll();
    window.location.reload();

  }
}

}
