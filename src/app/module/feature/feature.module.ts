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
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { OrderComponent } from './component/order/order.component';
import { OrderdetailsComponent } from './component/orderdetails/orderdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './component/product-details/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { AddressFormComponent } from './component/checkout/address-form/address-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OrderCardComponent } from './component/order/order-card/order-card.component';




@NgModule({
  declarations: [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderdetailsComponent,
    ProductReviewCardComponent,
    StarRatingComponent,
    AddressFormComponent,
    OrderCardComponent,


    

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    ShareModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  
    
  ],
  exports:[
    FetureComponent,
    HomeComponent,
    ProductsComponent,
    ProductCardComponent
  ]
})
export class FeatureModule { }
