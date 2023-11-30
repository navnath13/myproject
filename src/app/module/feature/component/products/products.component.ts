import { Component } from '@angular/core';
import { filter, singleFilter } from './filtersData';
import { lehangaCholi } from 'src/data/lehanga-choli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  manpants: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.filterData = filter;
    this.singleFilterData = singleFilter;
    this.manpants = lehangaCholi;
  }

  handleMultipleSelectionFilter(value: String, seletionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    const filterValues = queryParams[seletionId]
      ? queryParams[seletionId].split(',')
      : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
     
    } else {
      filterValues.push(value);
    }

    if (filterValues.length>0) {
      queryParams[seletionId] = filterValues.join(",");
    } else {
      delete queryParams[seletionId];
      console.log("product is delet")
    }
    this.router.navigate([], { queryParams });
  }


  handleSingleSelectFilter(value:string,seletionId:string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[seletionId]=value;
    this.router.navigate([], { queryParams });
  }



}
