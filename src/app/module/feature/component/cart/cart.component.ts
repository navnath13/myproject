import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CartService } from 'src/app/State/Cart/cart.service';
import { AppState } from 'src/app/model/AppState';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any;
  TotalPrice:any;
  totalDiscountPrice:number=0;
  totalAmount:number=0;
  totalItem:number=0;
    constructor(private router:Router, private cartService:CartService,
    private store:Store<AppState>){}
  ngOnInit(): void {
   this.cartService.getCart().subscribe((response:any)=>{
    this.cartItems=response.cartItems;
  this.TotalPrice=response.totalPrice;
  this.totalDiscountPrice=response.totalDiscountPrice;
  this.totalAmount=response.discount;
  this.totalItem=response.totalItem;
  
  
   },(erorr)=>{
    console.log(erorr);
   })

   
  


  }


  
  cart=[1,1,1]
  navigateToCheckOut(){
   this.router.navigate(["checkout"])
  }
}
