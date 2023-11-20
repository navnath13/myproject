import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavcontentComponent } from './component/navcontent/navcontent.component';
import { ProductCardComponent } from './component/product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavcontentComponent,
    NavbarComponent,
    ProductCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductCardComponent
  ]
})
export class ShareModule { }
