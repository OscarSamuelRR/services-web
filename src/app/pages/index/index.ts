import { Component, signal } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Router, RouterLink } from '@angular/router';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';
import { NgOptimizedImage } from '@angular/common';
import { SEARCH_ROUTES } from '../../data/search-routes.data';
import { SearchRoutes } from '../../interfaces/search-routes.interface';
import { TranslateModule } from '@ngx-translate/core';
import { LangSwitcher } from '../../components/lang-switcher/lang-switcher';

@Component({
  selector: 'index',
  imports: [Footer, RouterLink, DivSections, DivSectionBig, NgOptimizedImage, TranslateModule, LangSwitcher],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  url_maps = signal<string>('https://www.google.com/maps/place/Las+Ma%C3%B1anitas/@18.9287816,-99.2396671,18z/data=!3m1!4b1!4m9!3m8!1s0x85cdde4be03ddc85:0x320d8cf523d46538!5m2!4m1!1i2!8m2!3d18.9287816!4d-99.2396671!16s%2Fg%2F11h1r3s2r?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D');

  // Signal que guarda lo que escribe el usuario
  searchQuery = signal<string>('');

  // Signal que guarda los resultados filtrados
  searchResults = signal<SearchRoutes[]>([]);

  constructor(
    private router: Router
  ) {}

  onSearch(query: string) {
    // Actualiza el texto del input
    this.searchQuery.set(query);

    // Si el texto es muy corto limpia los resultados
    if (query.trim().length < 2) {
      this.searchResults.set([]);
      return;
    }

    // Normaliza el texto quitando acentos y pasando a minúsculas
    // Así "habitación" y "habitacion" dan el mismo resultado
    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Filtra las rutas que coincidan con el texto
    const results = SEARCH_ROUTES.filter(r => {
      // Normaliza el label también
      const label = r.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      // Busca en el label O en las keywords
      return label.includes(q) || r.keywords.some(k => k.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q));});
      this.searchResults.set(results);
  }

  navigateTo(route: string) {
    // Limpia la búsqueda
    this.searchResults.set([]);
    this.searchQuery.set('');
    // Navega a la ruta seleccionada
    this.router.navigate([route]);
  }

  // Cierra las sugerencias si el usuario hace clic fuera
  clearSearch() {
    this.searchResults.set([]);
    this.searchQuery.set('');
  }
}
