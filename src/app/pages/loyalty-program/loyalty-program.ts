import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { LoyaltyLevel } from '../../interfaces/loyalty-level.interface';
import { LOYALTY_LEVELS } from '../../data/loyalty-levels.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-loyalty-program',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './loyalty-program.html',
  styleUrl: './loyalty-program.css',
})

export class LoyaltyProgram {
  levels: LoyaltyLevel[] = LOYALTY_LEVELS;
}
