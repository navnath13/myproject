import { createAction, props } from "@ngrx/store";
export const login=createAction('[Auth] Login', props<{email:string,password:string}>())
export const loginSuccess=createAction('[Auth] loginSuccess', props<{user:any}>())
export const loginFailure=createAction('[Auth] Login failure', props<{error:any}>())  

export const register=createAction('[Auth] register', props<{user:any}>())
export const registerSuccess=createAction('[Auth] register success', props<{user:any}>())
export const registerFailure=createAction('[Auth] register failure', props<{error:any}>())  

