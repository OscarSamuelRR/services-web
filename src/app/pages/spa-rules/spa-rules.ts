import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-spa-rules',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './spa-rules.html',
  styleUrl: './spa-rules.css',
})
export class SpaRules {
  selectedPdf: string = '/pdfs/reglamentospa.pdf';
  selectedTitle: string = 'Reglamento de instalaciones';
}
