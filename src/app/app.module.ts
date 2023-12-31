import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './module/share/share.module';
import { FeatureModule } from './module/feature/feature.module';
import { AdminModule } from './module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    FeatureModule,
    AdminModule,
     StoreModule.forRoot({},{}),
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
