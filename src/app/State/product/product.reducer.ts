import { createReducer, on } from "@ngrx/store"
import { findProdutByCategoryFailure, findProdutByCategorySuccess, findProdutByIdFailure, findProdutByIdSuccess } from "./product.action"

const initialState={
    products:[],
    loading:false,
    error:null,
    product:null
}
export const productReducer=createReducer(
    initialState,
    on(findProdutByCategorySuccess,(state,{payload})=>({
        ...state,
        products:payload,
        content:payload.content,
        loading:false,
    })),
    on(findProdutByIdSuccess,(state,{payload})=>({
        ...state,
        product:payload,
        loading:false,
    })),
    on(findProdutByCategoryFailure,findProdutByIdFailure,(state,{error})=>({
        ...state,
        error:error,
        loading:false,
    })),

)