import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { DivSectionTour } from '../../components/div-section-tour/div-section-tour';

@Component({
  selector: 'app-experiences-tours',
  imports: [HeaderList, Footer, RouterLink, DivSectionTour],
  templateUrl: './experiences-tours.html',
  styleUrl: './experiences-tours.css',
})
export class ExperiencesTours {

}
