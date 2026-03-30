import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-assistance',
  imports: [HeaderList, Footer, PdfViewer],  // ← cambia NgxExtendedPdfViewerModule por PdfViewer
  templateUrl: './assistance.html',
  styleUrl: './assistance.css',
})

export class Assistance {
  selectedPdf: string | null = null;
  selectedTitle: string = '';

  showPdf(title: string, pdfUrl: string) {
    this.selectedPdf = pdfUrl;
    this.selectedTitle = title;
  }

  goBack() {
    this.selectedPdf = null;
    this.selectedTitle = '';
  }
}