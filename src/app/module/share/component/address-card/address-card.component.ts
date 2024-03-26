import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit{
   @Input()address:any;
   constructor(){}
  ngOnInit(): void {
    console.log("address component",this.address);
  }
}
