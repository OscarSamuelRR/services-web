import { Component } from '@angular/core';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';

@Component({
  selector: 'app-spa-menu',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './spa-menu.html',
  styleUrl: './spa-menu.css',
})
export class SpaMenu {
  selectedPdf: string = '/pdfs/menuroomold.pdf';
  selectedTitle: string = 'Menú del Spa Orlane';
}
