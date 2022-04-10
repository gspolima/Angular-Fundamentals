import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  constructor() {
    this.rangeValue = 0;
    this.rangeMin = 0;
    this.rangeMax = 0;
    this.isRangeDisabled = false;
   }

  ngOnInit(): void {
  }

  onRangeChange() {
    if (this.areValidValues(this.rangeMin, this.rangeMax)) {
      this.isRangeDisabled = false;
      this.rangeValue = this.rangeMin;
    }
    else {
      this.isRangeDisabled = true;
      this.rangeValue = 0;
    }
  }

  areValidValues(min: number, max: number): boolean {
    return max > min ? true : false;
  }

  rangeValue: number;
  rangeMin: number;
  rangeMax: number;
  isRangeDisabled: boolean;

}
