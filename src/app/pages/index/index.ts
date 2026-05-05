import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Router, RouterLink } from '@angular/router';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { NgOptimizedImage } from '@angular/common';
import { SEARCH_ROUTES } from '../../data/search-routes.data';
import { ROOMS } from '../../data/rooms.data';
import { TOURS } from '../../data/tours.data';
import { EventsAreaData } from '../../data/events-area.data';
import { OFFERS_EXPERIENCES } from '../../data/offers-experiences.data';
import { HOTEL_DESCRIPTIONS } from '../../data/hotel-description.data';
import { SearchRoutes } from '../../interfaces/search-routes.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangSwitcher } from '../../components/lang-switcher/lang-switcher';
import { Subscription } from 'rxjs';

@Component({
  selector: 'index',
  imports: [Footer, RouterLink, DivSections, DivSectionBig, NgOptimizedImage, TranslateModule, LangSwitcher],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit, OnDestroy {
  url_maps = signal<string>('https://www.google.com/maps/place/Las+Ma%C3%B1anitas/@18.9287816,-99.2396671,18z/data=!3m1!4b1!4m9!3m8!1s0x85cdde4be03ddc85:0x320d8cf523d46538!5m2!4m1!1i2!8m2!3d18.9287816!4d-99.2396671!16s%2Fg%2F11h1r3s2r?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D');

  searchQuery = signal<string>('');
  searchResults = signal<SearchRoutes[]>([]);

  private allRoutes: SearchRoutes[] = [];
  private langSub?: Subscription;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.generateRoutes();
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.generateRoutes();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  private generateRoutes() {
    this.allRoutes = [
      // Rutas simples con label traducido
      ...SEARCH_ROUTES.map(r => ({
        ...r,
        label: this.translate.instant(r.label)
      })),

      // Dinámicas con traducción
      ...ROOMS.map(r => ({
        label: this.translate.instant(r.title),
        route: `/rooms/${r.id}`,
        keywords: ['habitacion', 'suite', 'cuarto', this.translate.instant(r.title).toLowerCase()]
      })),

      ...Object.keys(TOURS).map(key => ({
        label: `Tour ${key.charAt(0).toUpperCase() + key.slice(1)}`,
        route: `/tour-page/${key}`,
        keywords: ['tour', 'excursion', 'visita', key]
      })),

      ...EventsAreaData.map(e => ({
        label: this.translate.instant(e.name),
        route: `/events/${e.id}`,
        keywords: ['evento', e.id.replace(/-/g, ' ')]
      })),

      ...OFFERS_EXPERIENCES.map(o => ({
        label: this.translate.instant(o.title),
        route: `/offers-experiences-content/${o.id}`,
        keywords: ['oferta', 'experiencia', this.translate.instant(o.title).toLowerCase()]
      })),

      ...HOTEL_DESCRIPTIONS.map(o => ({
        label: this.translate.instant(o.name),
        route: `/food-drinks/description/${o.id}`,
        keywords: ['restaurante mananitas', 'bar', 'azalea', 'menu', 'atrio', this.translate.instant(o.name).toLowerCase()]
      })),
    ];
  }

  onSearch(query: string) {
    this.searchQuery.set(query);

    if (query.trim().length < 2) {
      this.searchResults.set([]);
      return;
    }

    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const results = this.allRoutes.filter(r => {
      const label = r.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return label.includes(q) || r.keywords.some(k => k.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q));
    });
    this.searchResults.set(results);
  }

  navigateTo(route: string) {
    this.searchResults.set([]);
    this.searchQuery.set('');
    this.router.navigate([route]);
  }

  clearSearch() {
    this.searchResults.set([]);
    this.searchQuery.set('');
  }
}