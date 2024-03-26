import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.css']
})
export class HomeProductCardComponent implements OnInit {
  @Input()products:any;
 ngOnInit(): void {
   console.log('home product card',this.products)
 }
 constructor(private router:Router){}
 navigate(){
  this.router.navigate([`/product-details/${this.products.id}`])
  console.log(this.products)
}

 
}
