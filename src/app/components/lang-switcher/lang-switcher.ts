import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lang-switcher',
  imports: [],
  templateUrl: './lang-switcher.html',
  styleUrl: './lang-switcher.css',
})
export class LangSwitcher {
  currentLang = signal<string>(localStorage.getItem('lang') ?? 'es');

  constructor(private translate: TranslateService) { 
    this.translate.use(this.currentLang());
  }

  toggleLang() {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(newLang);
    this.translate.use(newLang);
    // Guarda en localStorage para persistir entre páginas
    localStorage.setItem('lang', newLang);
  }
}
