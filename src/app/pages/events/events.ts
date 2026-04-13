import { Component, input, signal } from '@angular/core';
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
  area = signal<EventArea | undefined>(undefined);
  selectedPdf = signal<string>('/pdfs/PRESENTACION_EMPRESARIAL.pdf');
  selectedTitle = signal<string>('Presentación Empresarial');
  selectedPdf2 = signal<string>('/pdfs/EXPERIENCIAS_CORPORATIVAS_2025.pdf');
  selectedTitle2 = signal<string>('Experiencias Corporativas');
  activePdf = signal<number>(1);
  isChanging = signal<boolean>(false);

  changePdf(num: number) {
    this.isChanging.set(true);
    setTimeout(() => {
      this.activePdf.set(num);
      this.isChanging.set(false);
    }, 300);
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.area.set(EventsAreaData.find(o => o.id === id));
    
  }
}
