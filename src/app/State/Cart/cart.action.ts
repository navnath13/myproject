import { createAction, props } from "@ngrx/store";

export const addItemToCartRequest=createAction('[Cart] Add Item To Cart Request', props<{reqData:any}>());
export const addItemToCartSuccess=createAction(
    '[Cart] Add Item To Cart Success',
    props<{reqData:any}>()
);
export const addItemToCartFailure=createAction(
    '[Cart] Add Item To Cart Failure',
    props<{error:any}>()
);
export const getCartRequet=createAction(
    '[Cart] Get Cart Request'
);
export const getCartSuccess=createAction(
    '[Cart] Get Cart Success',
    props<{reqData:any}>()
);
export const getCartFailure=createAction(
    '[Cart] Get Cart Failure',
    props<{error:any}>()
);



export const RemoveCartItemSucess=createAction(
    '[Cart] Remove Cart Item Success',
    props<{CartItemId:Number}>()
);
export const RemoveCartItemFailure=createAction(
    '[Cart] Remove Cart Item Failure',
    props<{error:any}>()
);



export const UpdateCartItemRequest=createAction(
    '[Cart] Update Cart Item Request',
    props<{reqData:any}>()
);
export const UpdateCartItemSuccess=createAction(
    '[Cart] Update Cart Item Success',
    props<{reqData:any}>()
);
export const UpdateCartItemFailure=createAction(
    '[Cart] Update Cart Item Failure',
    props<{error:any}>()
);
