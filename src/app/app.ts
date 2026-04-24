import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.ng.html',
  styleUrl: './app.css'
})
export class App {
  title = 'services-web';

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') ?? 'es';

    this.translate.setFallbackLang('es');
    this.translate.use(lang);
  }
}