import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-food-drinks',
  imports: [HeaderList, Footer, DivSections, DivSectionBig, TranslateModule],
  templateUrl: './food-drinks.html',
  styleUrl: './food-drinks.css',
})
export class FoodDrinks {

}
