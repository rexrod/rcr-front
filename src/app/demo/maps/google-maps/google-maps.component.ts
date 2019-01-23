import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fury-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  lat: number = -3.096771;
  lng: number = -59.936741;
   
  constructor() { }

  ngOnInit() {
  }

}
