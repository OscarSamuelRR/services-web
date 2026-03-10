import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-details',
  imports: [RouterLink, Footer],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

}
