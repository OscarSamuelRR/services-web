import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-list',
  imports: [RouterLink],
  templateUrl: './header-list.html',
  styleUrl: './header-list.css',
})
export class HeaderList {
  h1_text = input.required<string>();
  url_site = input.required<string>();
}
