import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-availbility',
  templateUrl: './room-availbility.component.html',
  styleUrls: ['./room-availbility.component.scss']
})
export class RoomAvailbilityComponent implements OnInit {
  cardsData: any
  constructor() {
    this.cardsData = [
      { name: 'Connect Room Type', discription: 'Distribute Across Channel', class: ' connectRoomtype' },
      { name: 'Connect Room Rates', discription: 'Distribute Across Channel', class: ' connectRoomrate ' },
    ]
  }

  ngOnInit(): void {
  }

}
