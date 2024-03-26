import { createReducer, on } from "@ngrx/store";
import * as OrderActions from "./order.action"
import { state } from "@angular/animations";


export interface OrderState{
    loading:boolean,
    error:string | null;
    order:any | null;
    orders:any[];
}

export const initialState:OrderState={
    loading: false,
    error: null,
    order: null,
    orders: []
}


export const orderReducer=createReducer(
    initialState,
    on(OrderActions.createOrderRequest,OrderActions.getOrderHistoryRequest,OrderActions.getOrderByIdRequest,(state)=>({
      ...state,
      loading :true,
      error:null  
    })),
    on(OrderActions.CreateOrderFailure,OrderActions.getOrderHistoryFailure,OrderActions.getOrderByIdFailure,(state,{error})=>({
        ...state,
        loading:false,
        error,
    })),

    on(OrderActions.CreateOrderSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order
    })),
  
    
    on(OrderActions.getOrderByIdSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order

    })),
 
    on(OrderActions.getOrderHistorySuccess,(state,{orders})=>({
        ...state,
        loading:false,
        orders

    }))




)