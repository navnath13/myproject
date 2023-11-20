import { Component } from '@angular/core';
import { homecarousalData } from 'src/data/maincoursel.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent{
  currentSlide=0;
  carousalData:any;
interval:any;
  ngOnInit(){
  this.carousalData=homecarousalData;
  this.autoplay();
   }
   autoplay(){
    setInterval(()=>{
     this.nextSlide();
    },2000)
   }

   nextSlide(){
    this.currentSlide=(this.currentSlide+1) % this.carousalData.length;
   }
}
