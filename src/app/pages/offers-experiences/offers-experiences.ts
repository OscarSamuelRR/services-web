import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offers-experiences',
  imports: [HeaderList, Footer, DivSections, DivSectionBig, TranslateModule],
  templateUrl: './offers-experiences.html',
  styleUrl: './offers-experiences.css',
})
export class OffersExperiences {

}
