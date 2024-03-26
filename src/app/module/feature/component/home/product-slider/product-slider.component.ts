import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent{
  @Input() title:any;
  @Input() products:any;
 


}
