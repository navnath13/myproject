import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-navcontent',
  templateUrl: './navcontent.component.html',
  styleUrls: ['./navcontent.component.css']
})
export class NavcontentComponent {
  category:any;
  @Input() selectedSection:any;
  
  
ngOnInit(){
  this.category=navigation;
  console.log(this.selectedSection)
 
}

}
