import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-left',
  templateUrl: './time-left.component.html'
})
export class TimeLeftComponent {
  hours = 0;
  minutes = 0;
  percent = 0;

  get status() {
    if (this.percent <= 0) {
      return '';
    }

    const remaining = (100 - this.percent) * (this.hours * 60 + this.minutes) / this.percent;
    const end = moment().add(remaining, 'm');

    return `The print will be done ${end.fromNow()}, around ${end.format('dddd, MMMM Do, H:mm')}`;
  }
}
