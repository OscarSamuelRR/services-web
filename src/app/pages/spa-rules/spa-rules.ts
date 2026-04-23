import { Component, signal } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { SPA_HEADER, SPA_RULES, SPA_FOOTER_SECTIONS } from '../../data/spa-rules.data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SpaRule } from '../../interfaces/instruction.interface';

@Component({
  selector: 'app-spa-rules',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './spa-rules.html',
  styleUrl: './spa-rules.css',
})

export class SpaRules {
  header = SPA_HEADER;

  rules = signal<SpaRule[]>(SPA_RULES);

  footerSections = signal<{ content: string }[]>(SPA_FOOTER_SECTIONS);
}