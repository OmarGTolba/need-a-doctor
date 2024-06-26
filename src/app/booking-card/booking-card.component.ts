import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.css'
})
export class BookingCardComponent implements OnChanges {
  @Input() image: string = '';
  @Input() imageHeight: string = '';
  url:string = '';
height= ''
  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.url= `../../assets/${this.image}`
    this.height=this.imageHeight
    }
  }
}
