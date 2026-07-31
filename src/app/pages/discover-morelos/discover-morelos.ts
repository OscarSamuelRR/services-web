import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DivSectionTour } from '../../components/div-section-tour/div-section-tour';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';

@Component({
  selector: 'app-discover-morelos',
  imports: [HeaderList, Footer, RouterLink, DivSectionBig, TranslateModule],
  templateUrl: './discover-morelos.html',
  styleUrl: './discover-morelos.css',
})
export class DiscoverMorelos {

}
