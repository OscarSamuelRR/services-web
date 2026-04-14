import { Component, signal } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HOTEL_DESCRIPTIONS } from '../../data/hotel-description.data';
import { HotelDescription } from '../../interfaces/hotel-description.interface';

@Component({
  selector: 'app-description',
  imports: [RouterLink, Footer, HeaderList],
  templateUrl: './description.html',
  styleUrl: './description.css',
})
export class Description {
  description = signal<HotelDescription | undefined>(undefined);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.description.set(HOTEL_DESCRIPTIONS.find(o => o.id === id));
  }
}