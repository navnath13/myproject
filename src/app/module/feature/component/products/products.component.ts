import { Component } from '@angular/core';
import { filter, singleFilter } from './filtersData';
import { lehangaCholi } from 'src/data/lehanga-choli.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/State/product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/model/AppState';
import { mensKurta } from 'src/data/mens-kurta.service';
import { mainsJeans } from 'src/data/jeans.service';
import { womenGound } from 'src/data/gouns.service';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  products: any;
  manpants :any
  lavelThree:any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private productservice:ProductService,private store:Store<AppState>) {}

  ngOnInit() {
    this.filterData =filter;
    this.singleFilterData=singleFilter;
    this.manpants=womenGound;
   

    this.activatedRoute.paramMap.subscribe((params)=>{
     
      
    this.lavelThree=params.get('lavelThree')
    var reqData={
      category:this.lavelThree,
      color:[],
      size:[],
      minPrice:0,
      maxPrice:100,
      minDiscount:0,
      pageNumber:0,
      pageSize:10,
      stock:null
      
    }
   
 
    this.productservice.findProductsByCategory(reqData);    
    });

     this.activatedRoute.queryParams.subscribe((params)=>{
      const color= params['color']
      const sizes=params['size']
      const price=params['price']
      const discount=params['discount']
      const stock=params['stock']
      const sort=params['sort']
      const pageNumber=params['pageNumber']
      const minPrice=price?.split("-")[0];
      const maxPrice=price?.split("-")[1];
    
      var reqData={
        category:this.lavelThree,
        color: color?[color].join(","):[],
        size:sizes,
        minPrice:minPrice?minPrice:0,
        maxPrice:maxPrice?maxPrice:100,
        minDiscount: discount ? discount : 0,
        pageNumber: pageNumber ? pageNumber : 0,
        pageSize:10, 
        stock:null
        
      }
     console.log("request data in heade",reqData);
      this.productservice.findProductsByCategory(reqData);
    
     })
    this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
      this.products=product?.products?.content;
    

    });
  }

  handleMultipleSelectionFilter(value: String, seletionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    const filterValues = queryParams[seletionId]
      ? queryParams[seletionId].split(',')
      : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
     
    } else {
      filterValues.push(value);
    }

    if (filterValues.length>0) {
      queryParams[seletionId] = filterValues.join(",");
    } else {
      delete queryParams[seletionId];
      console.log("product is delet")
    }
    this.router.navigate([], { queryParams });
  }


  handleSingleSelectFilter(value:string,seletionId:string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[seletionId]=value;
    this.router.navigate([], { queryParams });
  }



}
