import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
   constructor(private router:Router){}

  ngOnInit(){
    this.relatedProducts=lehangaCholi;
  }



  handleAddToCart(){
  
    this.router.navigate(['cart'])
  }
}
