import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-laundry',
  imports: [Footer, HeaderList, PdfViewer, TranslateModule],
  templateUrl: './laundry.html',
  styleUrl: './laundry.css',
})

export class Laundry {
  selectedPdf: string = '/pdfs/lavanderia.pdf';
  selectedTitle: string = 'Lavanderia';
}