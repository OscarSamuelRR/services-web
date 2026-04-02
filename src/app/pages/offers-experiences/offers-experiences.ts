import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';

@Component({
  selector: 'app-offers-experiences',
  imports: [HeaderList, Footer, DivSections, DivSectionBig],
  templateUrl: './offers-experiences.html',
  styleUrl: './offers-experiences.css',
})
export class OffersExperiences {

}
