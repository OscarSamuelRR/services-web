import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hotel-rules',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './hotel-rules.html',
  styleUrl: './hotel-rules.css',
})
export class HotelRules {

}
