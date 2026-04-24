import { Component, input } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { TourPlace } from '../../interfaces/tour.interface';
import { ActivatedRoute } from '@angular/router';
import { TOURS } from '../../data/tours.data';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tour-page',
  imports: [HeaderList, Footer, TranslateModule, CommonModule],
  templateUrl: './tour-page.html',
})
export class TourPage {
  places: TourPlace[] = [];
  title: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && TOURS[id]) {
      this.places = TOURS[id];
      this.title = 'Tour ' + id.charAt(0).toUpperCase() + id.slice(1);
    }
  }
}