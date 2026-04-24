import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { OfferExperience } from '../../interfaces/offer-experience.interface';
import { OFFERS_EXPERIENCES } from '../../data/offers-experiences.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offers-experiences-content',
  imports: [RouterLink, Footer, HeaderList, TranslateModule],
  templateUrl: './offers-experiences-content.html',
})
export class OffersExperiencesContent {
  offer?: OfferExperience;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.offer = OFFERS_EXPERIENCES.find(o => o.id === id);
  }
}