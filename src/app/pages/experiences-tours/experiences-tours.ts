import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experiences-tours',
  imports: [HeaderList, Footer, RouterLink],
  templateUrl: './experiences-tours.html',
  styleUrl: './experiences-tours.css',
})
export class ExperiencesTours {

}
