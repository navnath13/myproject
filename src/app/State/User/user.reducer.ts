import { createReducer, on } from "@ngrx/store";

import { state } from "@angular/animations";
import { Userprofile, UserprofileFailure, UserprofileSuccess } from "./user.action";
const initailState={
    userProfile:null,
    loading:false,
    error:null
}
export const userReducer= createReducer(
    initailState,
    on(Userprofile, (state)=>({  ...state,loading:true,error:null })),
    on(UserprofileSuccess, (state,{userProfile})=>({...state,loading:false,error:null,userProfile})),
    on(UserprofileFailure, (state,{error})=>({  ...state,loading:true,error:error })),

    )