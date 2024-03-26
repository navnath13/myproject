import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navcontent',
  templateUrl: './navcontent.component.html',
  styleUrls: ['./navcontent.component.css']
})
export class NavcontentComponent {
  category:any;
  @Input() selectedSection:any;
  
  constructor(private router:Router){}
ngOnInit(){
  this.category=navigation;

  console.log("select Section",this.selectedSection)
 
 
}
handleNavigate(path: any ){

  console.log('NAVIGET CEALL',path)
  this.router.navigate([path]);
};
}
