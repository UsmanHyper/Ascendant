import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-channels',
  templateUrl: './my-channels.component.html',
  styleUrls: ['./my-channels.component.scss']
})
export class MyChannelsComponent implements OnInit {
  cardsData:any;
  toggleSwitch :any = "On";

  constructor() { 
    this.cardsData = [
      { img: '../../../assets/images/Booking.svg' },
      { img: '../../../assets/images/agoda.svg' },
      { img: '../../../assets/images/expedia.svg' },
      { img: '../../../assets/images/trip.svg' },
      { img: '../../../assets/images/tripadvisor.svg' },
      { img: '../../../assets/images/googlehotel.svg' },
      
  ]
  }

  ngOnInit(): void {
  }

}
