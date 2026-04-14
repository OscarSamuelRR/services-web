import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OfferExperience } from '../../interfaces/offer-experience.interface';
import { OFFERS_EXPERIENCES } from '../../data/offers-experiences.data';

@Component({
  selector: 'app-description',
  imports: [RouterLink, Footer, HeaderList],
  templateUrl: './description.html',
  styleUrl: './description.css',
})
export class Description {
  offer?: OfferExperience;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.offer = OFFERS_EXPERIENCES.find(o => o.id === id);
  }
}
