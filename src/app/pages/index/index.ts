import { Component, signal } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { DivSections } from '../../components/div-sections/div-sections';
import { DivSectionBig } from '../../components/div-section-big/div-section-big';

@Component({
  selector: 'index',
  imports: [Footer, RouterLink, DivSections, DivSectionBig],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  url_maps = signal<string>('https://www.google.com/maps/place/Las+Ma%C3%B1anitas/@18.9287816,-99.2396671,18z/data=!3m1!4b1!4m9!3m8!1s0x85cdde4be03ddc85:0x320d8cf523d46538!5m2!4m1!1i2!8m2!3d18.9287816!4d-99.2396671!16s%2Fg%2F11h1r3s2r?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D');
}
