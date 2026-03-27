import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';

@Component({
  selector: 'app-hotel-services',
  imports: [HeaderList, Footer, DivSections, DivSectionBig],
  templateUrl: './hotel-services.html',
  styleUrl: './hotel-services.css',
})
export class HotelServices {

}
