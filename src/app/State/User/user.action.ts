import { createAction, props } from "@ngrx/store"

export const Userprofile=createAction('[User] getprofile')
export const UserprofileSuccess=createAction('[User] userProfile', props<{userProfile:any}>())
export const UserprofileFailure=createAction('[User] get User profile failure', props<{error:any}>())