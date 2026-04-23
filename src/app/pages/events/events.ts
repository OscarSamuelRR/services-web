import { Component, input, Signal, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { EventArea } from '../../interfaces/event-area.interface';
import { EventsAreaData } from '../../data/events-area.data';
import { PdfViewer } from '../../components/pdf-viewer/pdf-viewer';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-events',
  imports: [HeaderList, Footer, RouterLink, PdfViewer, TranslateModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  area = signal<EventArea | undefined>(undefined);
  selectedPdf = signal<string>('/pdfs/PRESENTACION_EMPRESARIAL.pdf');
  selectedTitle = signal<string>('events.pdf_1');
  selectedPdf2 = signal<string>('/pdfs/EXPERIENCIAS_CORPORATIVAS_2025.pdf');
  selectedTitle2 = signal<string>('events.pdf_2');
  activePdf = signal<number>(1);
  isChanging = signal<boolean>(false);

  servicesCard1!: Signal<string[]>;
  servicesCard2!: Signal<string[]>;

  changePdf(num: number) {
    this.isChanging.set(true);
    setTimeout(() => {
      this.activePdf.set(num);
      this.isChanging.set(false);
    }, 300);
  }

  constructor(private route: ActivatedRoute, private translate: TranslateService) {
    this.servicesCard1 = toSignal(
      this.translate.stream('events.services.card1').pipe(
        map(value => value as string[])
      ),
      { initialValue: [] }
    );

    this.servicesCard2 = toSignal(
      this.translate.stream('events.services.card2').pipe(
        map(value => value as string[])
      ),
      { initialValue: [] }
    );
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.area.set(EventsAreaData.find(o => o.id === id));
  }
}
