import { Component } from '@angular/core';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { DivSections } from '../../components/div-sections/div-sections';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { AmenitieData } from '../../interfaces/amenitie-data.interface';
import { AMENITIE } from '../../data/amenities.data';

@Component({
  selector: 'app-amenities',
  imports: [HeaderList, Footer, DivSections, DivSectionBig],
  templateUrl: './amenities.html',
  styleUrl: './amenities.css',
})
export class Amenities {
  amenities?: AmenitieData[];

  ngOnInit() {
    this.amenities = AMENITIE;
  }
}
