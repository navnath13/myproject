import {
  createAction,
  createActionGroup,
  createReducer,
  on,
} from '@ngrx/store';
import * as CartActions from './cart.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface CartState {
  cartItems: any[];
  loading: boolean;
  error: any;
  cart: any;
}
export const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
  cart: null,
};

export const cartReducer = createReducer(
  initialState,
  on(
    CartActions.addItemToCartRequest,
    CartActions.RemoveCartItemFailure,
    (state) => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(CartActions.addItemToCartSuccess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: [...state.cartItems, action.reqData],
  })),

  on(
    CartActions.addItemToCartFailure,
    CartActions.getCartFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  on(CartActions.getCartSuccess, (state, action) => ({
    ...state,
    loading: true,
    error: null,
    cartItems: action.reqData.cart_item,
    cart: action.reqData,
  })),
  on(CartActions.RemoveCartItemSucess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: state.cartItems.filter((item) => item.id !== action.CartItemId),
  })),
  on(CartActions.RemoveCartItemFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  })),

);
