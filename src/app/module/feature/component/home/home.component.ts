import { Component } from '@angular/core';
import { womenGound } from 'src/data/gouns.service';
import { mainsJeans } from 'src/data/jeans.service';
import { lehangaCholi } from 'src/data/lehanga-choli.service';
import { mensKurta } from 'src/data/mens-kurta.service';
import { shoes } from 'src/data/shoes.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menJeans:any;
  womenGound:any;
  lehangaCholi:any;
  mensKurta:any;
  shoes:any;
  ngOnInit(){
  this.menJeans=mainsJeans.slice(0,5);
  this.womenGound=womenGound.slice(0,5);
  this.lehangaCholi=lehangaCholi.slice(0,5);
  this.mensKurta=mensKurta.slice(0,5);
  this.shoes=shoes.slice(0,5);
  }

}
