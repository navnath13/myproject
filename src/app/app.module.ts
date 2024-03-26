import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './module/share/share.module';
import { FeatureModule } from './module/feature/feature.module';
import { AdminModule } from './module/admin/admin.module';
import { StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';
import { productReducer } from './State/product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';

@NgModule({
  declarations: [
    AppComponent,
   


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    FeatureModule,
    AdminModule,
     StoreModule.forRoot({auth:authReducer,user:authReducer,product:productReducer,cart:cartReducer,order:orderReducer}),
    AuthModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt'),
        allowedDomains: ['your-api-domain.com'], // Replace with your API domain
        disallowedRoutes: ['example.com/example-route'] // Adjust as needed
      }
    }),

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
