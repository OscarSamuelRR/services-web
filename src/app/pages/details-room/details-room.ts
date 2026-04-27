import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { RoomData } from '../../interfaces/room-data.interface';
import { ROOMS } from '../../data/rooms.data';
import { TranslateModule } from '@ngx-translate/core';
import { LangSwitcher } from '../../components/lang-switcher/lang-switcher';

@Component({
  selector: 'app-details',
  imports: [RouterLink, Footer, TranslateModule, LangSwitcher],
  templateUrl: './details-room.html',
  styleUrl: './details-room.css',
})
export class DetailsRoom {
  room?: RoomData;
  showMore = false; //Se deja en caso de requerir 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.room = ROOMS.find(r => r.id === id);
  }

  toggleMore() {
    this.showMore = !this.showMore;
  }
}
