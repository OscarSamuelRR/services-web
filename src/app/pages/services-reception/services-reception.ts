import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeaderList } from '../../components/header-list/header-list';
import { ReceptionService } from '../../interfaces/reception-service.interface';
import { RECEPTION_SERVICES } from '../../data/reception-services.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-reception',
  imports: [Footer, HeaderList, TranslateModule],
  templateUrl: './services-reception.html',
  styleUrl: './services-reception.css',
})
export class ServicesReception {
  services?: ReceptionService[];
  
    ngOnInit() {
      this.services = RECEPTION_SERVICES;
    }
}
