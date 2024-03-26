import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BASE_API_URL } from "src/app/config/api";
import { RemoveCartItemFailure, RemoveCartItemSucess, UpdateCartItemFailure, UpdateCartItemSuccess, addItemToCartFailure, addItemToCartSuccess, getCartFailure, getCartSuccess } from "./cart.action";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CartService{
  API_BASE_USE=BASE_API_URL;
  private headers;
  constructor(private http:HttpClient,private store:Store,private router:Router,rout:ActivatedRoute){
    this.headers=new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`Bearer ${localStorage.getItem('jwt')}`,
    })
  }



  addItemToCart(ReqData:any){
    const url=`${this.API_BASE_USE}/api/cart/add`;
    const headers=new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type':'application/json',
    })

    this.http.put(url,ReqData,{headers}).pipe(
        map((data:any)=>{
            return addItemToCartSuccess({reqData:data})
        }),
        catchError((error:any)=>{
           return of( addItemToCartFailure(error.response && error.response.data.message?
            error.response.data.message:error.message))
        })
    ).subscribe((action)=>this.store.dispatch(action))
  }


  getCart(){
    const url=`${this.API_BASE_USE}/api/cart/`;
    const headers=new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type':'application/json',
    })

   return this.http.get(url,{headers});
  }
  

  RemoveCartItem(CartItemId:Number){
    const url=`${this.API_BASE_USE}/api/cartItem/${CartItemId}`;
    const headers=new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type':'application/json',
    })

     return this.http.delete(url,{headers});
  }


updateCartItem(ReqData:Number){
    const url=`${this.API_BASE_USE}/api/cart_item/${ReqData}`;
    const headers=new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type':'application/json',
    })

    this.http.put(url,{headers}).pipe(
        map((data:any)=>{
            console.log('update cart data',data)
            return UpdateCartItemSuccess({reqData:data})
        }),
        catchError((error:any)=>{
           return of( UpdateCartItemFailure(error.response && error.response.data.message?
            error.response.data.message:error.message))
        })
    ).subscribe((action)=>this.store.dispatch(action))
  }



}