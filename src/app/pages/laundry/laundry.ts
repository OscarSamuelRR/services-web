import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-laundry',
  imports: [Footer, HeaderList, PdfViewer],
  templateUrl: './laundry.html',
  styleUrl: './laundry.css',
})

export class Laundry {
  selectedPdf: string = '/pdfs/lavanderia.pdf';
  selectedTitle: string = 'Lavanderia';
}