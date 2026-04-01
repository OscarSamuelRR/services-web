import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-spa-aesthetic',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './spa-aesthetic.html',
  styleUrl: './spa-aesthetic.css',
})
export class SpaAesthetic {
  selectedPdf: string = '/pdfs/menu_estetica.pdf';
  selectedTitle: string = 'Precios estética';
} 
