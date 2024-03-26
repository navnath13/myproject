import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CartService } from 'src/app/State/Cart/cart.service';
import { OrderService } from 'src/app/State/Order/order.service';
import { AppState } from 'src/app/model/AppState';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Output() showBottun:any;
  cartItems:any;
  TotalPrice:any;
  totalDiscountPrice:number=0;
  totalAmount:number=0;
  totalItem:number=0;

  order:any;
  
    constructor(private router:Router, private cartService:CartService,
    private store:Store<AppState>,private activedroute:ActivatedRoute
    ,private orderservice:OrderService){}
  ngOnInit(): void {



  // this for the getting order detail information
 let id=this.activedroute.snapshot.paramMap.get('id');
    if(id){
      this.orderservice.getOrderById(id);
    }
   this.store.pipe(select(store=>store.order)).subscribe((order)=>{
    this.order=order.order;
    this.cartItems=order.order.orderitems;
    this.TotalPrice=order.order.totalPrice;
    this.totalDiscountPrice=order.order.totalDiscountedPrice; 
    this.totalAmount=order.order.discounted; 
    this.totalItem=order.order.totalItem; 
    console.log("order data",this.order?.shippingAddress)
   })
  
   
  }





}
