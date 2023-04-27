import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: any[];
  @Input() dataArray1: any[];
  cardsData:any

  constructor() {
    this.cards = [];
    this.dataArray1 = [];
    this.cardsData = [
      { code: 'CTC', title: ' Temperature ', class: 'col-lg-4', value: 0 + "°C" },
      { code: 'CHC', title: 'Humidity', class: 'col-lg-2', value: 0 + "%" },
      { code: 'PM10C', title: 'PM10', class: 'col-lg-2', value: 0 },
      { code: 'PM2C', title: 'PM2.5', class: 'col-lg-2', value: 0 },
      { code: 'AQIC', title: 'AQI', class: 'col-lg-2', value: 'Not Good' },
  ]
  }

  ngOnInit(): void {
    this.dataArray1= this.cardsData
  }

  // ngOnChanges(changes: SimpleChanges): void{
  //   if (changes['dataArray1']){
  //     let dummy:any = changes['dataArray1'].currentValue
      
  //   }
  // }
}
