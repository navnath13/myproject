import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductService } from 'src/app/State/product/product.service';
import { AppState } from 'src/app/model/AppState';
import { womenGound } from 'src/data/gouns.service';
import { mainsJeans } from 'src/data/jeans.service';
import { lehangaCholi } from 'src/data/lehanga-choli.service';
import { mensKurta } from 'src/data/mens-kurta.service';
import { shoes } from 'src/data/shoes.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private productService:ProductService,private store:Store<AppState>){}
  menJeans:any;
  womenGound:any;
  lehangaCholi:any;
  mensKurta:any;
  shoes:any;
  products:any;
  ngOnInit(){
    this.productService.findAllProdut().subscribe((response)=>{
   this.products=response;
   console.log(response);
   this.menJeans=this.products.slice(0,5);
   this.womenGound=this.products.slice(0,5).sort((a:any, b:any) => a.price - b.price);;
   this.lehangaCholi=this.products.filter((item: { color: any; }) => item.color === 'brow');
   this.mensKurta=this.products.filter((item: { color: any; }) => item.color === 'blue');
   this.shoes=this.products.filter((item: { color: any; }) => item.color === 'white');
    })
  }

}
