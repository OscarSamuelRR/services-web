import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { SPA_AESTHETIC_SERVICES, SPA_FOOTER_NOTE } from '../../data/spa-aesthetic.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-spa-aesthetic',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './spa-aesthetic.html',
  styleUrl: './spa-aesthetic.css',
})
export class SpaAesthetic {
  services = SPA_AESTHETIC_SERVICES;
  footerNote = SPA_FOOTER_NOTE;
}