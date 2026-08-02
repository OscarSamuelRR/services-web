import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DivSections } from '../../components/div-sections/div-sections';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { DiscoverMorelosCont } from '../../interfaces/discover-morelos-cont.interface';
import { DISCOVER_MORELOS_CONTENT } from '../../data/discover-morelos.data';

@Component({
  selector: 'app-discover-morelos-content',
  imports: [HeaderList, Footer, RouterLink, DivSections, TranslateModule],
  templateUrl: './discover-morelos-content.html',
  styleUrl: './discover-morelos-content.css',
})
export class DiscoverMorelosContent {
  discoverMorelosContent = signal<DiscoverMorelosCont[]>([]);
  sectionTitleKey = signal<string>('');
  sectionSubTitleKey = signal<string>('');

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const section = this.route.snapshot.paramMap.get('section');
    const content = DISCOVER_MORELOS_CONTENT.filter(o => o.section === section);
    this.discoverMorelosContent.set(content);
    this.sectionTitleKey.set(`discover_morelos_sections.${section}.main_title`);
    this.sectionSubTitleKey.set(`discover_morelos_sections.${section}.subtitle`);
  }
}
