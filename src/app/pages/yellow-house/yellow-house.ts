import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-yellow-house',
  imports: [RouterLink, Footer, HeaderList, TranslateModule],
  templateUrl: './yellow-house.html',
  styleUrl: './yellow-house.css',
})
export class YellowHouse {

}
