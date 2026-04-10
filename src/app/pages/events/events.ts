import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { EventArea } from '../../interfaces/event-area.interface';
import { EventsAreaData } from '../../data/events-area.data';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-events',
  imports: [HeaderList, Footer, RouterLink, PdfViewer],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  area?: EventArea;
  selectedPdf: string = '/pdfs/PRESENTACION _EMPRESARIAL.pdf';
  selectedTitle: string = 'Presentación Empresarial';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.area = EventsAreaData.find(o => o.id === id);
    
  }
}
