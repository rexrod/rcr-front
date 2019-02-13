import { Component, OnInit, Input, Injectable, Output } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Transport } from 'app/models/transports/transports.model';

@Component({
  selector: 'dashboard-live-map-button',
  templateUrl: './dashboard-live-map-button.component.html',
  styleUrls: ['./dashboard-live-map-button.component.scss'],
})

@Injectable()
export class DashboardLiveMapButtonComponent implements OnInit {

  isOpen: boolean;

  @Input() transport: Transport;

  @Output()
  public userName;
 
  public data;
  public hora;

  constructor(
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) {     
  }

  ngOnInit() {
    // this.userName = this.session.getState().admin.establishment.name;
    this.userName = localStorage.getItem('name');    
    // this.data = this.transport.coordinates[this.transport.coordinates.length-1].date;
    this.data = new Date(this.transport.coordinates[this.transport.coordinates.length-1].date);
    console.log(this.data);
    console.log(this.data.getMonth());

    let month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";

    this.hora = ("0" + this.data.getHours()).slice(-2) + ':' + ("0" + this.data.getMinutes()).slice(-2) ;
    this.data = this.data.getDate() + '/' + month[this.data.getMonth()] + '/' + this.data.getFullYear();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    console.log('Dropdown: ' + this.transport.tracker.notes);
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout() {
  }

}

