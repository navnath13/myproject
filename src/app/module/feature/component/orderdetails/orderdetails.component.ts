import { Component } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {

  orders=[1,1,1];
  step=[{id:0,title:"PLACED",isCompleted:true},
  {id:0,title:"CONFIRMED",isCompleted:false},
  {id:0,title:"SHIPPING",isCompleted:false},
  {id:0,title:"DILIVERED",isCompleted:false},]
PLACED: any;

}
