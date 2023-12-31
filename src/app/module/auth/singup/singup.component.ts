import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {


  @Input() changeTemplate:any;

  constructor(private formBuilder:FormBuilder, private store:Store){}

  loginForm:FormGroup=this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })
  
submitFrom(){
  console.log("DATA SUBMIT")
  if(this.loginForm.value){
    console.log("longin req data", this.loginForm.value)
  }
}
}
