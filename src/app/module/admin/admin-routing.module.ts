import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AmdinproductsComponent } from './component/amdinproducts/amdinproducts.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CreateProductComponent } from './component/create-product/create-product.component';

const routes: Routes = [
  {
    path: "", component: AdminComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "products", component: AmdinproductsComponent },
      {path:"orders",component:OrdersTableComponent},
      {path:"customer",component:CustomersComponent},
      {path:"products-create",component:CreateProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
