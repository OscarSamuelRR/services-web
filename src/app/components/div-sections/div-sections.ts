import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div-sections',
  imports: [RouterLink],
  templateUrl: './div-sections.html',
  styleUrl: './div-sections.css',
})
export class DivSections {
  url_img = input.required<string>();
  route = input.required<string>();
  span_text = input.required<string>();
}
