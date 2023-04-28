import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-channel-management',
  templateUrl: './channel-management.component.html',
  styleUrls: ['./channel-management.component.scss']
})
export class ChannelManagementComponent implements OnInit {
  cardsData:any
 
  constructor() {

    this.cardsData = [
      { name: 'Connect Room Type', discription: ' Distribute Across channels ', class: 'col-lg-2 connectRoomtype', value: 0 + "°C" },
      { name: 'Connect Room Rates', discription: 'Distribute Across Channel', class: 'col-lg-2 connectRoomrate ', value: 0 + "°C" },      
  ]
   }

  ngOnInit(): void {
  }

}
