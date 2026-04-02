import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div-section-big',
  imports: [RouterLink],
  templateUrl: './div-section-big.html',
  host: {
    class: 'col-span-2'
  }
  // styleUrl: './div-section-big.css',
})
export class DivSectionBig {
  url_img = input.required<string>();
  route = input.required<string>();
  span_text = input.required<string>();
  imagePosition = input<string>();
}
