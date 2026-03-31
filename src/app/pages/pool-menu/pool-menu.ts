import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-pool-menu',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './pool-menu.html',
  styleUrl: './pool-menu.css',
})
export class PoolMenu {
  selectedPdf: string = '/pdfs/caja.pdf';
  selectedTitle: string = 'Menú de la alberca';
}
