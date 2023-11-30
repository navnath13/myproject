import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feature/component/home/home.component';
import { ProductCardComponent } from './module/share/component/product-card/product-card.component';
import { ProductsComponent } from './module/feature/component/products/products.component';
import { CartComponent } from './module/feature/component/cart/cart.component';
import { ProductDetailsComponent } from './module/feature/component/product-details/product-details.component';
import { CheckoutComponent } from './module/feature/component/checkout/checkout.component';
import { PaymentComponent } from './module/feature/component/payment/payment.component';
import { PaymentSuccessComponent } from './module/feature/component/payment-success/payment-success.component';
import { OrderComponent } from './module/feature/component/order/order.component';
import { OrderdetailsComponent } from './module/feature/component/orderdetails/orderdetails.component';
import { AdminRoutingModule } from './module/admin/admin-routing.module';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'cart',component:CartComponent},
{path:'product-details/:id', component:ProductDetailsComponent},
{path:'checkout',component:CheckoutComponent},
{path:'checkout/payment/:id',component:PaymentComponent},
{path:':lavelOne/:lavelTwo/:lavelThree',component:ProductsComponent},
{path:"payment-success",component:PaymentSuccessComponent},
{path:'account/order',component:OrderComponent},
{path:'order/:id',component:OrderdetailsComponent},
{path:"admin",loadChildren:()=>import("./module/admin/admin-routing.module").then(m=>AdminRoutingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
