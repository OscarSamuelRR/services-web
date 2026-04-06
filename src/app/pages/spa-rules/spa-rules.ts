import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { SPA_HEADER, SPA_RULES, SPA_FOOTER_SECTIONS } from '../../data/spa-rules.data';

@Component({
  selector: 'app-spa-rules',
  imports: [HeaderList, Footer],
  templateUrl: './spa-rules.html',
  styleUrl: './spa-rules.css',
})
export class SpaRules {
  header = SPA_HEADER;
  rules = SPA_RULES;
  footerSections = SPA_FOOTER_SECTIONS;
}