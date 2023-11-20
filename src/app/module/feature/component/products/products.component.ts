import { Component } from '@angular/core';
import { filter, singleFilter } from './filtersData';
import { lehangaCholi } from 'src/data/lehanga-choli.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  filterData:any;
singleFilterData: any;
manpants:any;
   ngOnInit(){
    this.filterData=filter;
    this.singleFilterData=singleFilter;
    this.manpants=lehangaCholi.slice(0,6);
   }
}
