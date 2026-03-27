import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div-list-opc',
  imports: [RouterLink],
  templateUrl: './div-list-opc.html',
  styleUrl: './div-list-opc.css',
})
export class DivListOpc {
  url_img = input.required<string>();
  route = input.required<string>();
  p_text = input.required<string>();
  h3_text = input.required<string>();
}
