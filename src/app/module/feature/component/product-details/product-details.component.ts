import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CartService } from 'src/app/State/Cart/cart.service';
import { ProductService } from 'src/app/State/product/product.service';
import { AppState } from 'src/app/model/AppState';
import { lehangaCholi } from 'src/data/lehanga-choli.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,1,1];
  relatedProducts:any;
  product:any;
  productRelated:any;
  productId:any;
   constructor(private router:Router,private activeRoute:ActivatedRoute,private productSer:ProductService,
    public store:Store<AppState>,
    private cartservice:CartService){}

  ngOnInit(){
    this.activeRoute.paramMap.subscribe((params)=>{
      const param=params.get("id");
     this.productId=param;
     this.productSer.findProductsById(param);
    
     this.store.pipe(select((store)=>store.product)).subscribe((products)=>{
      this.product=products?.product; });
      console.log(" single product",this.product);
    })

    this.productSer.findProductsByCategory(this.product?.category);

    this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
      this.productRelated=product?.products?.content;
    

    });
    this.relatedProducts=this.productRelated;
  }



  handleAddToCart(){
  console.log("productId",this.productId)
  const data={Size:this.selectedSize,productId:this.productId}
  this.cartservice.addItemToCart(data)


    this.router.navigate(['cart'])
  }
}
