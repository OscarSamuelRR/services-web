import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DivListOpc } from '../../components/div-list-opc/div-list-opc';
import { HeaderList } from '../../components/header-list/header-list';

@Component({
  selector: 'app-rooms',
  imports: [Footer, RouterLink, DivListOpc, HeaderList,RouterOutlet],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {

}
