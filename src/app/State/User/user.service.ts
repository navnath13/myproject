import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";

import { UserprofileFailure, UserprofileSuccess } from "./user.action";

@Injectable({
    providedIn:'root',
})
export class userService{
 private apiUrl=BASE_API_URL;
 headers:any;
 
 constructor(private http:HttpClient,private store:Store){
    this.headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem("jwt")}`);
 }

 getUserProfile(){
    if(!this.headers){
    const headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem("jwt")}`);
   
    }
    return this.http.get(`${this.apiUrl}/api/users/profile`,{headers:this.headers})
   
 }

getAddress(userId:any){
   if(!this.headers){
      const headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem("jwt")}`);
     
      }
      return this.http.get(`${this.apiUrl}/api/address/${userId}`,{headers:this.headers})
}
       

 Logout(){
    localStorage.removeItem("jwt")
 }

 
}