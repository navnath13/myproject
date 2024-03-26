import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, min, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { findProdutByCategoryFailure, findProdutByCategorySuccess, findProdutByIdFailure, findProdutByIdSuccess } from "./product.action";

@Injectable({
    providedIn:'root',
})
export class ProductService{
    API_BASE_URL=BASE_API_URL;

    private getHeader():HttpHeaders{
        const token=localStorage.getItem('jwt');
        return new HttpHeaders().set("Authorization",`Bearer ${token}`)}
      constructor(private store:Store,private http:HttpClient,private router:Router,private rout:ActivatedRoute){}

      findProductsByCategory(reqData:any){

      
        const {color,size,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData;
            let params=new HttpParams().set("color",color).set('size',size).set("minPrice",minPrice)
            .set('maxPrice',maxPrice).set('minDiscount',minDiscount).set('category',category).set('stock',stock)
            .set('sort',sort).set('pageNumber',pageNumber).set('pageSize',pageSize);

            const headers=this.getHeader();
          
            return  this.http.get(`${this.API_BASE_URL}/api/products`,{headers,params}).pipe(
                map((data:any)=>{
                   
                    return findProdutByCategorySuccess({payload:data})
                }),
                catchError((error:any)=>{
                    return of(findProdutByCategoryFailure(
                        error.response && error.response.data.message?
                        error.response.data.message:error.message
                    ))
                })
            ).subscribe((action)=>this.store.dispatch(action))
      }
      
      findProductsById(ProductId:any){
      
            const headers=this.getHeader();
            return  this.http.get(`${this.API_BASE_URL}/api/products/id/${ProductId}`,{headers}).pipe(
                map((data:any)=>{
                    console.log("product details by id",data)
                    return findProdutByIdSuccess({payload:data})
                }),
                catchError((error:any)=>{
                    return of(findProdutByIdFailure(
                        error.response && error.response.data.message?
                        error.response.data.message:error.message
                    ))
                })
            ).subscribe((action)=>this.store.dispatch(action))
      }


         
      findAllProdut(){
      
        const headers=this.getHeader();
        return  this.http.get(`${this.API_BASE_URL}/api/admin/product/`,{headers});
      }


    }