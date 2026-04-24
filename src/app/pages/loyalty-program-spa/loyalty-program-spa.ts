import { Component, signal } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { LoyaltyLevel } from '../../interfaces/loyalty-level.interface';
// import { LOYALTY_LEVELS_SPA } from '../../data/loyalty-levels.data';
import {LOYALTY_LEVELS_SPA,LOYALTY_SPA_HEADER,LOYALTY_PARTICIPATION,LOYALTY_CONDITIONS} from '../../data/loyalty-spa.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-loyalty-program-spa',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './loyalty-program-spa.html',
  styleUrl: './loyalty-program-spa.css',
})
export class LoyaltyProgramSpa {
  // levels: LoyaltyLevel[] = LOYALTY_LEVELS_SPA;

  header = LOYALTY_SPA_HEADER;

  levels = signal<LoyaltyLevel[]>(LOYALTY_LEVELS_SPA);

  participation = signal<string[]>(LOYALTY_PARTICIPATION);

  conditions = signal<string[]>(LOYALTY_CONDITIONS);
}
