import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DivSections } from '../../components/div-sections/div-sections';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';

@Component({
  selector: 'app-discover-morelos-content',
  imports: [HeaderList, Footer, RouterLink, DivSections, TranslateModule],
  templateUrl: './discover-morelos-content.html',
  styleUrl: './discover-morelos-content.css',
})
export class DiscoverMorelosContent {

}
