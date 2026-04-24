import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { DivSectionTour } from '../../components/div-section-tour/div-section-tour';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences-tours',
  imports: [HeaderList, Footer, RouterLink, DivSectionTour, TranslateModule],
  templateUrl: './experiences-tours.html',
  styleUrl: './experiences-tours.css',
})
export class ExperiencesTours {

}
