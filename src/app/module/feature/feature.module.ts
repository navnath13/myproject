import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './component/feture.component';
import { HomeComponent } from './component/home/home.component';
import { MainCarouselComponent } from './component/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './component/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './component/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './component/products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ShareModule } from '../share/share.module';
import { ProductCardComponent } from '../share/component/product-card/product-card.component';






@NgModule({
  declarations: [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent

    

  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    ShareModule
    
  ],
  exports:[
    FetureComponent,
    HomeComponent,
    ProductsComponent,
    ProductCardComponent
  ]
})
export class FeatureModule { }
