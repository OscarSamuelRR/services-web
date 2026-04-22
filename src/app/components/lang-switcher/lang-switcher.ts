import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lang-switcher',
  imports: [],
  templateUrl: './lang-switcher.html',
  styleUrl: './lang-switcher.css',
})
export class LangSwitcher {
  currentLang = signal<string>('es');

  constructor(private translate: TranslateService) { }

  toggleLang() {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(newLang);
    this.translate.use(newLang);
  }
}
