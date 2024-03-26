import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { CreateOrderFailure, CreateOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistorySuccess } from "./order.action";

@Injectable({
    providedIn:'root'
})
export class OrderService{
    private API_BASE_URL=BASE_API_URL;
    private headers:any;
 


    constructor(
        private store:Store,private http:HttpClient,private router:Router,private  activatedRout:ActivatedRoute
    ){
         this.headers=new HttpHeaders({
            'Content-Type':'application/json',
            Authorization:`Bearer${(localStorage.getItem('jwt'))}`,
        })

    }



    CreateOrder(reqData:any){
        console.log('order request data',reqData);
          const url=`${this.API_BASE_URL}/api/order/`;

          const headers=new HttpHeaders({
            Authorization :`Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type':'application/json',
        })
          return this.http.post(url,reqData,{headers:headers}).pipe(
           map((data:any)=>{
            console.log('order Is created',data);
            if(data.id){
        this.router.navigate([`/checkout/payment/${data.id}`],{
            queryParams:{ step: '3', order_id:data.id}
        });
            }
            console.log('create order',data)
            return CreateOrderSuccess({order:data})
           
           }),
           catchError((error:any)=>{
         
            console.log(error)
            return of(CreateOrderFailure(error.response && error.response.data.message ? error.response.data.message:error.message))
           })


          ).subscribe((action)=>this.store.dispatch(action))

    }




    getOrderById(orderId:string){
        console.log('order id is', orderId)


        const URL= `${this.API_BASE_URL}/api/order/${orderId}`;
        const headers=new HttpHeaders({
            Authorization :`Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type':'application/json',
        })
        return this.http.get(URL,{headers:headers}).pipe(
            map((data:any)=>{
                console.log('order Data', data);
                return getOrderByIdSuccess({order:data})
            }),
            catchError((error:any)=>{
                console.log(error);
                return of( getOrderByIdFailure(error.response && error.response.message ? error.response.data.message:error.message ))
            })
        ).subscribe((action)=>this.store.dispatch(action))

    }



    GetOrderHistory(){
        const url=`${this.API_BASE_URL}/api/orders/users`;
        return this.http.get(url,{headers:this.headers}).pipe(
            map((data:any)=>{
                console.log('order history data', data)

                return getOrderHistorySuccess({orders:data})
            }),
            catchError((error:any)=>{
                console.log('error getting order history',error);

                return of(getOrderHistoryFailure(error.response && error.response.data.message ? error.response.data.message:error.message))
            })
        )
    }

  

}