import { createAction, props } from "@ngrx/store";


export const createOrderRequest= createAction(
    '[Order] Create Order Request',props<{reqData:any}>()
);
export const CreateOrderSuccess= createAction(
    '[Order] Create Order Success',props<{order:any}>()
);
export const CreateOrderFailure =createAction(
    '[Order] Create Order Failuer',props<{error:any}>()
);


export const getOrderByIdRequest=createAction(
    '[Order] Get Order By Id Request',props<{orderId:string}>()
)

export const getOrderByIdSuccess=createAction(
    '[Order] Get Order By Id Success',props<{order:any}>()
)
export const getOrderByIdFailure=createAction(
    '[Order] Get Order By Id Failure', props<{error:any}>()
)



export const getOrderHistoryRequest=createAction(
    '[Order] Get Order History Request',props<{orderId:string}>()
)

export const getOrderHistorySuccess=createAction(
    '[Order] Get Order History Success',props<{orders:any}>()
)
export const getOrderHistoryFailure=createAction(
    '[Order] Get Order History Failure', props<{error:any}>()
)