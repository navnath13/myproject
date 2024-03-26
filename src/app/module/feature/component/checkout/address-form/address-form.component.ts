import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/State/Order/order.service';
import { userService } from 'src/app/State/User/user.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  

  userprofile:any;
  address:any;

  constructor(private formBuilder:FormBuilder, private router:Router,private orderService:OrderService
    ,private userServive:userService){}
  ngOnInit(): void {
  
      this.userServive.getUserProfile().subscribe((data: any) => {
        this.userprofile = data;

        this.getAddress(data.id);
       
      });

}

getAddress(data:any){
  this.userServive.getAddress(data).subscribe((response)=>{
    this.address=response;

    console.log("address in cread",response)
  })

}



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
    this.router.navigate([`checkout/payment/${item.id}`])
  }
  HandleSubmit(){
      const formVale=this.myForm.value;

      this.orderService.CreateOrder(formVale);
      console.log("form value",formVale)
  }
}
