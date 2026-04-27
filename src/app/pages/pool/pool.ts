import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { POOL_RULES } from '../../data/pool-rules.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pool',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './pool.html',
  styleUrl: './pool.css',
})
export class Pool {
  rules = POOL_RULES;
}