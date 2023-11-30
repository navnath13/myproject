import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   constructor(private router:Router){}

  @Input() selectedSection:any;
  currentSection:any;
  
  isNavbarContentOpen:any
  opennavbarcontent(section:any){
   this.isNavbarContentOpen=true;
   this.currentSection=section;

  }
   closeNavBarContent(){
    this.isNavbarContentOpen=false;
   }
  //  this for the closing window
     @HostListener('document:click',[`$event`])
    onDocumentClick(event:MouseEvent){
const modelContainer =document.querySelector(".model-container");
const openButtons=document.querySelectorAll(".open-button");
let clickInsideButton=false;

openButtons.forEach((button:Element)=>{
  if(button.contains(event.target as Node)){
    clickInsideButton=true;
  }
})
if(modelContainer && !clickInsideButton && this.isNavbarContentOpen){
  this.closeNavBarContent();
}

 }
 
     //  this for the closing window method is closed
  navigateTo(path:any){
    this.router.navigate([path])
  }
}
