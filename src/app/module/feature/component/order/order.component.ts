import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private router:Router){}
  orders=[[1,1],[1,1,1]];
  orderFilter=[
    {value:"onTheWay",label:"onTheWay"},
    {value:"Delivered",label:"Deliver"},
    {value:"cancelled",label:"Cancelled"},
    {value:"return",label:"Return"}
    ]


    

navigateToOrderDetail(id:any){
  this.router.navigate([`order/${id}`])

}
}
