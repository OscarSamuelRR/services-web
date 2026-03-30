import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-pool',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './pool.html',
  styleUrl: './pool.css',
})
export class Pool {
  selectedPdf: string = '/pdfs/reglas_alberca.pdf';
  selectedTitle: string = 'Reglamento';
}
