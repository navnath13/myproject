import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  
  addresses=[1,1,1];

  constructor(private formBuilder:FormBuilder, private router:Router){}
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required],
  })



  handleCreatOrder(item:any){
    this.router.navigate([`checkout/payment/${1}`])
  }
  HandleSubmit(){
      const formVale=this.myForm.value;
      console.log("form value",formVale)
  }
}
