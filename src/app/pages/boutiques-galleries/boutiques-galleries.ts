import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-boutiques-galleries',
  imports: [HeaderList, Footer, DivSections, DivSectionBig, TranslateModule],
  templateUrl: './boutiques-galleries.html',
  styleUrl: './boutiques-galleries.css',
})
export class BoutiquesGalleries {

}
