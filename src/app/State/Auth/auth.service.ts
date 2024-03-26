import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./auth.actions";
import { Action } from "rxjs/internal/scheduler/Action";
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
    providedIn:'root',
})
export class authService{
 private apiUrl=BASE_API_URL+"/auth";
 constructor(private http:HttpClient,private store:Store,private jwtHelper: JwtHelperService){}


 register(user:any){
    this.http.post(`${this.apiUrl}/singup`,user).pipe(
        map((user:any)=>{
       console.log('registere user', user);
       if(user.jwt){
        localStorage.setItem("jwt",user.jwt)
       }
       return registerSuccess({user});
        }),
        catchError((error)=>{
       return of(registerFailure(
        error.response && error.response.data.message ? error.response.data.message :error.message
       ))
        })
    ).subscribe((action)=>this.store.dispatch(action))
 }


 login(loginData: any){
    this.http.post(`${this.apiUrl}/singin`, loginData).pipe(
      map((user: any) => {
     
        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt);
        }
        console.log("Login API call", user);
        return loginSuccess({ user });
      }),
      catchError((error) => {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
        return of(loginFailure(errorMessage));
      })
    ).subscribe((action) => this.store.dispatch(action));
  }








}


