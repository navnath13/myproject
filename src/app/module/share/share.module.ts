import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavcontentComponent } from './component/navcontent/navcontent.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { AddressCardComponent } from './component/address-card/address-card.component';
import { FormsModule } from '@angular/forms';
import { OrdertrackerComponent } from './component/ordertracker/ordertracker.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavcontentComponent,
    NavbarComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
    OrdertrackerComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatDividerModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
    OrdertrackerComponent
  ]
})
export class ShareModule { }
