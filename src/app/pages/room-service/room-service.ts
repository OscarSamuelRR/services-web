import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-room-service',
  imports: [HeaderList, Footer, PdfViewer],
  templateUrl: './room-service.html',
  styleUrl: './room-service.css',
})
export class RoomService {
  selectedPdf: string = '/pdfs/caja.pdf';
  selectedTitle: string = 'Menú servicio a la habitación';
}
