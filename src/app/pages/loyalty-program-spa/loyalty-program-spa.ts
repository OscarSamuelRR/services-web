import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { LoyaltyLevel } from '../../interfaces/loyalty-level.interface';
import { LOYALTY_LEVELS } from '../../data/loyalty-levels.data';

@Component({
  selector: 'app-loyalty-program-spa',
  imports: [HeaderList, Footer],
  templateUrl: './loyalty-program-spa.html',
  styleUrl: './loyalty-program-spa.css',
})
export class LoyaltyProgramSpa {
  levels: LoyaltyLevel[] = LOYALTY_LEVELS;
}
