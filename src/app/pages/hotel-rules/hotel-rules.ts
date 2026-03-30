import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-hotel-rules',
  imports: [HeaderList, Footer],
  templateUrl: './hotel-rules.html',
  styleUrl: './hotel-rules.css',
})
export class HotelRules {

}
