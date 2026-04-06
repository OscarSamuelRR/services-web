import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { POOL_RULES_ES, POOL_RULES_EN } from '../../data/pool-rules.data';

@Component({
  selector: 'app-pool',
  imports: [HeaderList, Footer],
  templateUrl: './pool.html',
  styleUrl: './pool.css',
})
export class Pool {
  rulesEs = POOL_RULES_ES;
  rulesEn = POOL_RULES_EN;
}