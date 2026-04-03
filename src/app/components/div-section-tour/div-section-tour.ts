import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div-section-tour',
  imports: [RouterLink],
  templateUrl: './div-section-tour.html',
  styleUrl: './div-section-tour.css',
})
export class DivSectionTour {
  url_img = input.required<string>();
  route = input.required<string>();
  span_text = input.required<string>();
  imagePosition = input<string>();
}
