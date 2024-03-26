import { createAction, props } from "@ngrx/store";

export const findProdutByCategoryRequest=createAction(
    '[Product] Find Products By Category Request',
)
export const findProdutByCategorySuccess=createAction(
    '[Product] Find Products By Category Success',
    props<{payload:any}>()
)
export const findProdutByCategoryFailure=createAction(
    '[Product] Find Products By Category Failure',
    props<{error:any}>()
)


export const findProdutByIdRequest=createAction(
    '[Product] Find Products By Id Request',
)
export const findProdutByIdSuccess=createAction(
    '[Product] Find Products By Id Success',
    props<{payload:any}>()
)
export const findProdutByIdFailure=createAction(
    '[Product] Find Products By Id Failure',
    props<{error:any}>()
)