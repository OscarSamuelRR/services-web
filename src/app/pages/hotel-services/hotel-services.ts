import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hotel-services',
  imports: [HeaderList, Footer, DivSections, DivSectionBig, TranslateModule],
  templateUrl: './hotel-services.html',
  styleUrl: './hotel-services.css',
})
export class HotelServices {

}
