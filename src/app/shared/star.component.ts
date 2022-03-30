import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 3;
    cropWidth: number = 75;
    starsContainerWidth: number = 75;

    ngOnChanges(): void {
        console.info('star rating changed...');
        this.cropWidth = this.rating * 75/5;
    }

    @Output() ratingClickNotifier: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClickNotifier.emit(`Rating ${this.rating} clicked`);
    }
}